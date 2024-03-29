import fs from "fs";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    cb(null, path.join(__dirname, "../../public/uploads"));
  },
  filename: function (req: any, file: any, cb: any) {
    cb(null, Math.floor(Math.random() * 99999999) + "-" + file.originalname);
  },
});

export const uploadFileMiddleware = multer({
  storage,
});
