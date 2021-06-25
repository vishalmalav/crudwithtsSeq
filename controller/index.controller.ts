import { Request, Response } from "express";
import { Sequelize } from "sequelize";
import db from "../models";
import uuidParse from "uuid-parse";
import bcrypt from "bcrypt";

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
    const hash = await bcrypt.hash(body.password, 8);
    body.password = hash;
    // const body.password = await bcrypt.hash(body.password,8);
    const response = await db.User.create(body);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(500).json("internal server error");
  }
};

export const loginUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;
    const a = await db.User.findOne({ where: { email: email } });

    if (a) {
      const validpass = await bcrypt.compare(password, a.password);
      if (validpass) {
        return res.status(200).json(a);
      }
      throw new Error("password wrong");
    }
    throw new Error("email wrong");
  } catch (e) {
    console.log(e);
    return res.status(500).json("email password wrong");
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
