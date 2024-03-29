import fs from "fs";

import express from "express";

const route = express.Router();

import { index, create, destroy, update } from "./controller";

import { uploadFileMiddleware } from "../../utils/multer";

route.get("/", index);

route.post("/", uploadFileMiddleware.single("image"), create);

route.put("/:id", uploadFileMiddleware.single("image"), update);

route.delete("/:id", destroy);

export default route;
