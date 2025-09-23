import {ÁlbumesDAO as DAO} from '../DAO/manager/álbumes-DAO.js'
class ÁlbumesService{
    constructor(DAO){
        this.DAO = new DAO()
    }

    async getAllÁlbumes(){
        return await this.DAO.getAllÁlbumes()
    }
}

export const álbumesServiceInstance = new ÁlbumesService(DAO)