import {ÁlbumesDAO as DAO} from '../DAO/manager/álbumes-DAO.js'
class ÁlbumesService{
    constructor(DAO){
        this.DAO = new DAO()
    }
}

export const álbumesServiceInstance = new ÁlbumesService(DAO)