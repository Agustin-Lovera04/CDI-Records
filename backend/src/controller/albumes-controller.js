import { albumesServiceInstance } from "../services/albumes-service.js";
export class AlbumesController{
    static async getAllAlbumes(req,res){
        const albumes = await albumesServiceInstance.getAllAlbumes()

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload: albumes});
    }

    static async createAlbum(req,res){
        const createAlbum = await albumesServiceInstance.createAlbum(req.body, req.file ,req.user.nombre)

        if(createAlbum.error){
            res.setHeader('Content-Type','application/json');
            return res.status(401).json({error: createAlbum.error});
        }
        
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({message: 'Album creado con éxito', payload: createAlbum});
    }


    static async updateStageTo2(req,res){

        const updateStageTo2 = await albumesServiceInstance .updateStageTo2(req.params)
        if(updateStageTo2.error){
            res.setHeader('Content-Type','application/json');
            return res.status(404).json({error: updateStageTo2.error});
        }

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({ok: 'Paso actualizado con éxito'});
    }

    static async sendAlbumToRevision(req,res){
        const sendAlbumToRevision = await albumesServiceInstance.sendAlbumToRevision(req.params)

        if(sendAlbumToRevision.error){
            res.setHeader('Content-Type','application/json');
            return res.status(404).json({error: sendAlbumToRevision.error});
        }

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({ok: 'Album en revision'});
    }
}