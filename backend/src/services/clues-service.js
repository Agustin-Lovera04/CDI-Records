import { CluesDAO as DAO } from "../DAO/manager/clues-DAO"
class CluesService{
    constructor(DAO){
        this.DAO = new DAO()
    }
}

export const cluesServiceInstance = new CluesService(DAO)