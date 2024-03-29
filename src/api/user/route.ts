import fs from "fs";

import express from "express";

const route = express.Router();

import { create, destroy, index, update } from "./controller";

route.get("/", index);

route.post("/", create);

route.put("/", update);

route.delete("/", destroy);

export default route;
