import { userServiceInstance } from "../services/user-service.js";

export class UserController {
    static async getAllUsers(req,res){

        const users = await userServiceInstance.getAllUsers()
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload: users.length});
    }
}