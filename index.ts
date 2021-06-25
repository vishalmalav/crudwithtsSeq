import express from "express";
import db from "./models";
import { users } from "./seeders/user";
import { projects } from "./seeders/project";
import { ProjectAssignments } from "./seeders/projectAssignment";
import { brotliDecompress } from "zlib";
import indexRouter from "./routes/routes.index";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(indexRouter);
// const createProjectAssignments = () => {
//   ProjectAssignments.map((P) => {
//     db.ProjectAssignment.create(P);
//   });
// };
// createProjectAssignments();
app.get("/", (req, res) => {
  db.User.findAll({
    include: {
      model: db.Project,
    },
  })
    .then((result: object) => res.json(result))
    .catch((er: Object) => console.log(er));
});

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`server on port ${port}`);
  });
});
