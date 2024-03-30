import express from "express";

const route = express.Router();

import { ApproveStatusUser, signIn } from "./controller";
import { SignUp } from "../../services/auth";
import { isAuthenticate, isOnlyAdmin } from "../../middlewares/auth";

// signin
// route.get("/");

route.post("/signin", signIn);

route.post("/register", SignUp);

// for admin to aprrovde register user
route.post("/approve/:id", isAuthenticate, isOnlyAdmin, ApproveStatusUser);

export default route;
