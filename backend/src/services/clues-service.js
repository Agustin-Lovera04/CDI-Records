import { CluesDAO as DAO } from "../DAO/manager/clues-DAO.js"
import { albumesServiceInstance } from "./albumes-service.js"
class CluesService{
    constructor(DAO){
        this.DAO = new DAO()
    }

    async getAllClues(){
        return await this.DAO.getAllClues()
    }

    async addCluesToAlbum(data, id_album, artistas, clue){
        if(!id_album || !artistas){
            return {error: 'Error al recuperar información de el álbum.'}
        }

        const existAlbum = await albumesServiceInstance.getAlbumById(id_album)
        if(existAlbum.error)return {error: existAlbum.error}

        const {nombre_pista, version, colaboradores} = data

        if(!clue || !nombre_pista) {
            return {error: 'Faltan campos obligatorios.'}
        }

        id_album = Number(id_album)

        const dataClue = {
            id_album: id_album,
            nombre_pista,
            artistas,
            pista: `uploads/audios/${clue.filename}`,
            version: version || null,
            colaboradores: colaboradores || ''
        }
        return await this.DAO.addCluesToAlbum(dataClue)
    }
}

export const cluesServiceInstance = new CluesService(DAO)