import { userServiceInstance } from "../services/user-service.js";

export class UserController {
  static async getAllUsers(req, res) {
    const users = await userServiceInstance.getAllUsers();
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({ payload: users.length });
  }

  static async registerUser(req, res) {
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({ payload: req.user});
  }

  static async loginUser(req, res) {
    const token = await userServiceInstance.genTokenForLogin(req.user)
    if(token.error){
      res.setHeader('Content-Type','application/json');
      return res.status(500).json({error: token.error});
    }

    res.cookie("tokenCookie", token, {maxAge: 1000*60*60, httpOnly: true, signed:true})
    
    res.setHeader('Content-Type','application/json');
    return res.status(201).json({
        message: 'Sesión iniciada.',
        user: (
          req.user
        )});
  }

}
