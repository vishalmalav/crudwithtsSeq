import { Request, Response } from "express";
import { Sequelize } from "sequelize";
import db from "../models";

export const createProject = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const body = req.body;
    // const body.password = await bcrypt.hash(body.password,8);
    const response = await db.Project.create(body);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(500).json("internal server error");
  }
};
