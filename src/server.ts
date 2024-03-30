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
import DashboardRoutes from "./api/dashboard/route";

import AuthRoutes from "./api/auth/route";
import { isAuthenticate, isOnlyAdmin } from "./middlewares/auth";

// use middlewares
app.use(Express.static(path.join(__dirname, "..", "public")));
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

// use routes
app.use("/api/auth", AuthRoutes);

app.use("/api/landing", LandingRoutes);

app.use("/api/dashboard", isAuthenticate, DashboardRoutes);

app.use("/api/product", isAuthenticate, isOnlyAdmin, ProductRoutes);
app.use("/api/user", isAuthenticate, isOnlyAdmin, UserRoutes);

// run application
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
