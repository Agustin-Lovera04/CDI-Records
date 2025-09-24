import { userServiceInstance } from "../services/user-service.js";

export class UserController {
  static async getAllUsers(req, res) {
    const users = await userServiceInstance.getAllUsers();
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({ payload: users.length });
  }

  static async registerUser(req, res) {
    console.log(req.user);
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({ payload: "Usuario registrado con éxito" });
  }

  static async loginUser(req, res) {
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({ payload: "Usuario logueado con exito" });
  }
}
