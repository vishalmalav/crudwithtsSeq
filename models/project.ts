"use strict";
import { Model } from "sequelize";
interface projectAttributes {
  id: number;
  title: string;
  status: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Project extends Model<projectAttributes> implements projectAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    title!: string;
    status!: string;
    static associate(models: any) {
      Project.belongsToMany(models.User, {
        through: "ProjectAssignment",
      });
      // define association here
    }
  }
  Project.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      title: { type: DataTypes.STRING, allowNull: false },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Project",
    }
  );
  return Project;
};
