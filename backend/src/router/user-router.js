import { Router } from "express";
import { UserController } from "../controller/user-controller.js";
import { accessControl, passportCall } from "../middlewares/middlewares.js";
export const router = Router();

router.get("/", UserController.getAllUsers);

router.post("/register", passportCall("register"), UserController.registerUser);

router.post("/login", passportCall("login"), UserController.loginUser);

router.get('/test', passportCall('jwt'), accessControl(["PREMIUM"]), (req,res) => {
    res.setHeader('Content-Type','application/json');
    return res.status(200).json({ok: 'ok'});
})