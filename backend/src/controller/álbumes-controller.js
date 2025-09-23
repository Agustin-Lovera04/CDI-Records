import { álbumesServiceInstance } from "../services/álbumes-service.js";

export class ÁlbumesController{
    static async getAllÁlbumes(req,res){
        const álbumes = await álbumesServiceInstance.getAllÁlbumes()

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload: álbumes.length});
    }
}