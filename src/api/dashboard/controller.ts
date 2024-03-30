import { NextFunction, Request, Response } from "express";

import { ResponseFormater } from "../../utils/ResponseFormat";

import { getDataDashboard } from "../../services/dashboard";
import { RequestiWithuser } from "../../../types/RequestWithUser";

export async function index(
  req: RequestiWithuser,
  res: Response,
  next: NextFunction
) {
  try {
    let data = {};
    if (Number(req.user?.role) == 1) {
      data = await getDataDashboard(req);
    }

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
