import { UserDAO as DAO } from "../DAO/manager/user-DAO"

class UserService{
    constructor(DAO){
        this.DAO = new DAO()
    }

    async getAllUsers(){
        return await this.DAO.getAllUsers()
    }
}

export const userServiceInstance = new UserService(DOMException)