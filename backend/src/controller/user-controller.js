import { userServiceInstance } from "../services/user-service.js";

export class UserController {
    static async getAllUsers(req,res){

        const users = await userServiceInstance.getAllUsers()
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload: users.length});
    }

    /* static async registerUser(req,res){
        const {email, password} = req.body;

        if(!email || !password){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error: 'Debe enviar todos los campos requeridos'});
        }

        let dataUser = {email, password}

        const registerUser = await userServiceInstance.registerUser(dataUser)
        if(registerUser.error){
            res.setHeader('Content-Type','application/json');
            return res.status(registerUser.codeError).json({error: registerUser.error});
        }
    }
 */

}