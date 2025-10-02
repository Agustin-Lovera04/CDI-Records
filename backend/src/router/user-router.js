import { Router } from "express";
import { UserController } from "../controller/user-controller.js";
import { accessControl, passportCall } from "../middlewares/middlewares.js";
export const router = Router();

router.get("/", passportCall('jwt'),UserController.getAllUsers);

router.post("/register", passportCall("register"), UserController.registerUser);

router.post("/login", passportCall("login"), UserController.loginUser);

router.get('/current', passportCall('jwt'), UserController.getInfoUserForCurrent)