import {AlbumesDAO as DAO} from '../DAO/manager/albumes-DAO.js'
class AlbumesService{
    constructor(DAO){
        this.DAO = new DAO()
    }

    async getAllAlbumes(){
        return await this.DAO.getAllAlbumes()
    }

    async createAlbum(data){
        const { caratula, titulo, is_compiled, artista, gen1, gen2 } = data
        if(!caratula || !titulo || !is_compiled || !artista || !gen1 || !gen2){
            return {error: 'Faltan campos obligatorios'}
        }

        const dataAlbum = {
            caratula, titulo, is_compiled, artista, gen1, gen2, paso: 1, id: 2, estado: 'Pasos pendientes'
        }

        return await this.DAO.createAlbum(dataAlbum)
    }
}

export const albumesServiceInstance = new AlbumesService(DAO)