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


    async getAlbumById(id){
        const album = this.albumes.find(album => album.id === id)

        if(!album)return {error: 'No se encontró album con el ID ingresado.'}
        return album
    }

    async createAlbum(dataAlbum){
        try {
            this.albumes.push(dataAlbum)
            return {id_album: 2, usuario: dataAlbum.usuario}    // HARDOCODE ID HASTA AUTOGENERAR
        } catch (error) {
            return {error: 'Error interno - Contacte a un administrador: admin@cdirecords.com'}
        }
    }


    async updateStageTo2(id_album){
        try {
        const albumIDX = this.albumes.findIndex(a => a.id === id_album);
        if (albumIDX === -1) return { error: 'No se encontró album con el ID ingresado.' };

        const nuevosAlbumes = [...this.albumes];

        nuevosAlbumes[albumIDX] = { ...nuevosAlbumes[albumIDX], paso: 2 };

        this.albumes = nuevosAlbumes;

        return {success: true}

    } catch (error) {
            return {error: 'Error interno - Contacte a un administrador: admin@cdirecords.com'}
        }
    }

    async sendAlbumToRevision(id_album){
    try {
        const albumIDX = this.albumes.findIndex(a => a.id === id_album);
        if (albumIDX === -1) return { error: 'No se encontró album con el ID ingresado.' };

        const nuevosAlbumes = [...this.albumes];

        nuevosAlbumes[albumIDX] = { ...nuevosAlbumes[albumIDX], paso: 4 };

        this.albumes = nuevosAlbumes;

        return {success: true}

    } catch (error) {
            return {error: 'Error interno - Contacte a un administrador: admin@cdirecords.com'}
        }
    }
}