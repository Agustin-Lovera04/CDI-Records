import { CluesDAO as DAO } from "../DAO/manager/clues-DAO.js"
class CluesService{
    constructor(DAO){
        this.DAO = new DAO()
    }

    async getAllClues(){
        return await this.DAO.getAllClues()
    }

    async addCluesToAlbum(data, id_album, artistas){
        if(!id_album || !artistas){
            return {error: 'Error al recuperar información de el álbum.'}
        }
        const {nombre_pista, version, pista, colaboradores} = data

        if(!pista || !nombre_pista) {
            return {error: 'Faltan campos obligatorios.'}
        }

        const dataClue = {
            id_album,
            nombre_pista,
            artistas,
            pista
        }
        return await this.DAO.addCluesToAlbum(dataClue)
    }
}

export const cluesServiceInstance = new CluesService(DAO)