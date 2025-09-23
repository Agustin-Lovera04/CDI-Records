export class ÁlbumesDAO{
    álbumes = [
         {
            id: 1,
            name: 'album 1',
            artist: 'Agustin Lovera',
            pistas: []
        },
         {
            id: 2,
            name: 'album 2',
            artist: 'Juan Lovera',
            pistas: []
        },
         {
            id: 3,
            name: 'album 3',
            artist: 'Pedro Lovera',
            pistas: []
        },
    ]

    async getAllÁlbumes(){
        return this.álbumes
    }
}