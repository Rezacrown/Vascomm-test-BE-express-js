import type { Request, Response, NextFunction } from "express";
import { ResponseFormater } from "../../utils/ResponseFormat";
import { getLandingProduct } from "../../services/landing";

export async function index(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await getLandingProduct(req);

    const response: ResponseFormater = {
      code: 200,
      message: "success get all data produced",
      data: data,
    };

    return res.json(response).status(200);
  } catch (error) {
    console.log(error);
    next(error);
  }
}
