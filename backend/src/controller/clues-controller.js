import { cluesServiceInstance } from "../services/clues-service.js";

export class CluesController{

    static async getAllClues(req,res){
        const clues = await cluesServiceInstance.getAllClues()

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload: clues.length});
    }
}