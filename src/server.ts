import { users } from "./../prisma/seeder/user";
import Express from "express";

const app = Express();
const port = 3000;

import fs from "fs";
import path from "path";

// import routes API
import LandingRoutes from "./api/landing/route";
import ProductRoutes from "./api/product/route";
import UserRoutes from "./api/user/route";
import { config } from "./config";

// use middlewares
app.use(Express.static(path.join(__dirname, "..", "public")));
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

// use routes
app.use("/api/landing", LandingRoutes);
app.use("/api/product", ProductRoutes);
app.use("/api/user", UserRoutes);

// run application
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
