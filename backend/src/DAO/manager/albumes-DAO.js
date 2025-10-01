export class AlbumesDAO{
albumes = [
         {
            id: 1,
            titulo: 'album 1',
            paso: 4,  // QUE ES ==> Son los estados que se van actualizando segun el progreso de creacion de los albumes
            artistas: 'Agustin Lovera',
            caratula: '../.png',
            usuario: 'Agustin Lovera',
            is_compiled: 0, //number as boolean,
            gen1: 'Cumbia',
            gen2: '-',
            estado: 'Publicado',
            manager: 'manager@gmail.com'
        }
    ]

    async getAllAlbumes(){
        return this.albumes
    }

    async createAlbum(dataAlbum){
        try {
            const create = this.albumes.push(dataAlbum)
            return create
        } catch (error) {
            return {error: 'Error interno - Contacte a un administrador: admin@cdirecords.com'}
        }
    }
}