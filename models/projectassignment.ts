"use strict";
import { Model } from "sequelize";
interface projectAssignmentAttribute {
  ProjectId: number;
  UserId: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class ProjectAssignment
    extends Model<projectAssignmentAttribute>
    implements projectAssignmentAttribute
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    ProjectId!: number;
    UserId!: string;
    static associate(models: any) {
      // define association here
    }
  }
  ProjectAssignment.init(
    {
      ProjectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: { model: "Project", key: "id" },
      },
      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        references: { model: "Users", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "ProjectAssignment",
    }
  );
  return ProjectAssignment;
};
