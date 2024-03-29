import type { Request, Response, NextFunction } from "express";

import { ResponseFormater } from "../../utils/ResponseFormat";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  upadateProduct,
} from "../../services/product";

export async function index(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await getAllProduct(req);

    const response: ResponseFormater = {
      code: 200,
      message: "success get all data products",
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
    const data = await createProduct(req);

    const response: ResponseFormater = {
      code: 201,
      message: "success create data product",
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
    const data = await deleteProduct(req);

    const response: ResponseFormater = {
      code: 200,
      message: "success delete data product",
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
    const data = await upadateProduct(req);

    const response: ResponseFormater = {
      code: 200,
      message: "success update data product",
      data: data,
    };

    return res.json(response).status(200);
  } catch (error) {
    console.log(error);
    next(error);
  }
}
