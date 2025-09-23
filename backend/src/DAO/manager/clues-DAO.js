export class CluesDAO {
    clues = [
        {
            id: 1,
            name: 'cumbia 1',
            artist: 'Agustin Lovera',
            album: 'Album 1',
            reproductions: 1000
        },
        {
            id: 2,
            name: 'cumbia 2',
            artist: 'Juan Lovera',
            album: 'Album 2',
            reproductions: 1000
        },
        {
            id: 3,
            name: 'cumbia 3',
            artist: 'Pedro Lovera',
            album: 'Album 3',
            reproductions: 1000
        }
    ]

    async getAllClues(){
        return this.clues
    }
}