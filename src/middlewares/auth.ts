import { NextFunction, Response } from "express";
import { RequestiWithuser, UserData } from "../../types/RequestWithUser";

import { config } from "../config";
import jwt from "jsonwebtoken";

export async function isAuthenticate(
  req: RequestiWithuser,
  res: Response,
  next: NextFunction
) {
  let token: string | null = null;
  try {
    const headerAuth = req.headers["authorization"];

    if (headerAuth && headerAuth?.startsWith("Bearer")) {
      token = headerAuth.split(" ")[1]; // split & get token value
    } else {
      throw new Error("Invalid authorization header Bearer");
    }

    if (!token) {
      throw new Error("Authentication invalid");
    }

    const payload = jwt.verify(token, config.jwtSecret as string) as UserData;

    if (!payload) throw new Error("Authentication failed");

    // check sttatus user
    if (payload.status == "nonaktif")
      throw new Error(
        "Authentication failed bacause account status is not ready approved"
      );

    // set payload
    req.user = {
      id: payload.id,
      email: payload.email,
      name: payload.name,
      role: payload.role,
      status: payload.status,
    };

    next();
  } catch (error) {
    next(error);
  }
}

export async function isOnlyAdmin(
  req: RequestiWithuser,
  res: Response,
  next: NextFunction
) {
  try {
    if (!req.user) {
      throw new Error("user not found");
    } else {
      // 1 for roleId admin
      if (Number(req.user.role) != 1) throw new Error("Role Not Authorized");
      next();
    }
  } catch (error) {
    next(error);
  }
}
