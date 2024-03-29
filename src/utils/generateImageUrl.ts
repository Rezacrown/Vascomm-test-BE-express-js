import { Request } from "express";

export const generateUrlImage = async (req: Request) => {
  const result = `uploads/${req?.file?.filename}`;

  return result;
};
