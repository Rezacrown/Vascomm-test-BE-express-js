import { NextFunction, Request, Response } from "express";

import { ResponseFormater } from "../../utils/ResponseFormat";

import { getDataDashboard } from "../../services/dashboard";

export async function index(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await getDataDashboard(req);

    const response: ResponseFormater = {
      code: 200,
      message: "success get all data Dashboard",
      data: data,
    };

    return res.json(response).status(200);
  } catch (error) {
    console.log(error);
    next(error);
  }
}
