import fs from "fs";

import express from "express";

const route = express.Router();

import { index } from "./controller";

route.get("/", index);

export default route;
