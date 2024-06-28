import express from "express";

import * as newUserController from "../Controllers/controllers.js";

export const userRoutes = express.Router();

userRoutes.post("/register", newUserController.addNewUserController);

userRoutes.post("/login", newUserController.loginUserController);

userRoutes.get("/get/:id", newUserController.getLoggedInUserController);
