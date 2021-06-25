import { Request, Response } from "express";
import { Sequelize } from "sequelize";
import db from "../models";
import uuidParse from "uuid-parse";

export const getUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response = await db.User.findAll({
      attributes: ["name", "email"],
    });
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(500).json("internal server error");
  }
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = req.params.id;
    const response = await db.User.findAll({ where: { id } });
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(500).json("internal server error");
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const body = req.body;
    const response = await db.User.create(body);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(500).json("internal server error");
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = req.params.id;
    const body = req.body;
    const response = await db.User.update({ body }, { where: { id } });
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(500).json("internal server error");
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = req.params.id;
    const response = await db.User.destroy({ where: { id } });
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(500).json("internal server error");
  }
};
