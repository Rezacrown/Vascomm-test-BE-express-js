import express from "express";

const route = express.Router();

import { index } from "./controller";

route.use("/", index);

export default route;
