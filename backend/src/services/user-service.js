import { UserDAO as DAO } from "../DAO/manager/user-DAO.js"

class UserService{
    constructor(DAO){
        this.DAO = new DAO()
    }

    async getAllUsers(){
        return await this.DAO.getAllUsers()
    }

/*     async registerUser(dataUser){
        return await this.DAO.registerUser(dataUser)
    }
 */
    async getUserByEmail(email){
        return await this.DAO.getUserByEmail(email)
    }

    async createUser(dataUser){
        return await this.DAO.createUser(dataUser)
    }
}

export const userServiceInstance = new UserService(DAO)