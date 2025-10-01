import {AlbumesDAO as DAO} from '../DAO/manager/albumes-DAO.js'
class AlbumesService{
    constructor(DAO){
        this.DAO = new DAO()
    }

    async getAllAlbumes(){
        return await this.DAO.getAllAlbumes()
    }

    async createAlbum(data, usuario){
        const { caratula, titulo, is_compiled, artistas, gen1, gen2 } = data
        if(!caratula || !titulo || !is_compiled || !artistas || !gen1 || !gen2 || !usuario){
            return {error: 'Faltan campos obligatorios'}
        }

        const dataAlbum = {
           id: 2, paso: 1,  titulo, artistas, caratula,usuario,is_compiled,  gen1, gen2,   estado: 'Pasos pendientes', manager: null    // Hardocode por falta de relaciones
        }

        return await this.DAO.createAlbum(dataAlbum)
    }
}

export const albumesServiceInstance = new AlbumesService(DAO)