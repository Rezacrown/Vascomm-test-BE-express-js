import type { Request, Response, NextFunction } from "express";

import { ResponseFormater } from "../../utils/ResponseFormat";
import {
  createUser,
  getAllUser,
  softDeleteUser,
  updateUser,
} from "../../services/user";

export async function index(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await getAllUser(req);

    const response: ResponseFormater = {
      code: 200,
      message: "success get all data users",
      data: data,
    };

    return res.json(response).status(200);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await createUser(req);

    const response: ResponseFormater = {
      code: 201,
      message: "success create data user",
      data: data,
    };

    return res.json(response).status(201);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export async function destroy(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await softDeleteUser(req);

    const response: ResponseFormater = {
      code: 200,
      message: "success soft deleted data user",
      data: data,
    };

    return res.json(response).status(200);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await updateUser(req);

    const response: ResponseFormater = {
      code: 200,
      message: "success update data user",
      data: data,
    };

    return res.json(response).status(200);
  } catch (error) {
    console.log(error);
    next(error);
  }
}
