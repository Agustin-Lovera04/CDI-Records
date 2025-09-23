import { CluesDAO as DAO } from "../DAO/manager/clues-DAO.js"
class CluesService{
    constructor(DAO){
        this.DAO = new DAO()
    }

    async getAllClues(){
        return await this.DAO.getAllClues()
    }
}

export const cluesServiceInstance = new CluesService(DAO)