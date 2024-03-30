import { Request } from "express";
export interface RequestiWithuser extends Request {
  user?: UserData;
}

export type UserData = {
  id?: string;
  name?: string;
  email?: string;
  role?: string;
  status?: "aktif" | "nonaktif";
};
