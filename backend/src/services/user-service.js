import { UserDAO as DAO } from "../DAO/manager/user-DAO.js"

class UserService{
    constructor(DAO){
        this.DAO = new DAO()
    }

    async getAllUsers(){
        return await this.DAO.getAllUsers()
    }
}

export const userServiceInstance = new UserService(DAO)