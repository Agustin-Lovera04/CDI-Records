import { UserDAO as DAO } from "../DAO/manager/user-DAO"

class UserService{
    constructor(DAO){
        this.DAO = new DAO()
    }
}

export const userServiceInstance = new UserService(DOMException)