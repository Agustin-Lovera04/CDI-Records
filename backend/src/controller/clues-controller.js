import { cluesServiceInstance } from "../services/clues-service.js";

export class CluesController{

    static async getAllClues(req,res){
        const clues = await cluesServiceInstance.getAllClues()

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload: clues});
    }

    static async addCluesToAlbum(req,res){
        const {id_album, artistas} = req.params || null
        const addCluesToAlbum = await cluesServiceInstance.addCluesToAlbum(req.body, id_album, artistas, req.file)

        if(addCluesToAlbum.error){
            res.setHeader('Content-Type','application/json');
            return res.status(404).json({error: addCluesToAlbum.error});
        }
        
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({message: 'Pistas agregadas con éxito'});
    }
}