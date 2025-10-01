export class CluesDAO {
    clues = [
        {
            id: 1,
            id_album: 2,
            nombre_pista: 'cumbia 1',
            artista: 'Agustin Lovera',
            version: undefined,
            pista: '../.wav',
            colaboradores: [{"nombre": 'Agustin Lovera', "Rol": "Compositor", "share": 10}]   // o NULL
        }
    
    ]

    async getAllClues(){
        return this.clues
    }

    async addCluesToAlbum(dataClue){
        try {
            this.clues.push(dataClue)
            return dataClue
        } catch (error) {
            return {error: 'Error interno - Contacte a un administrador: admin@cdirecords.com'}
        }
    }
}