import { NextFunction, Request, Response } from "express";
import { ResponseFormater } from "../../utils/ResponseFormat";
import { ApproveStatus, SignInJwt, SignUp } from "../../services/auth";

export async function signIn(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await SignInJwt(req);

    const response: ResponseFormater = {
      code: 200,
      message: "success signIn user",
      data: data,
    };

    return res.json(response).status(200);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export async function signUp(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await SignUp(req);

    const response: ResponseFormater = {
      code: 201,
      message: "success Register user",
      data: data,
    };

    return res.json(response).status(201);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export async function ApproveStatusUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = await ApproveStatus(req);

    const response: ResponseFormater = {
      code: 200,
      message: "success approve user",
      data: data,
    };

    return res.json(response).status(200);
  } catch (error) {
    console.log(error);
    next(error);
  }
}
