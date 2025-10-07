import sharp from 'sharp'
import { AlbumesDAO as DAO } from "../DAO/manager/albumes-DAO.js";
class AlbumesService {
  constructor(DAO) {
    this.DAO = new DAO();
  }

  async getAllAlbumes() {
    return await this.DAO.getAllAlbumes();
  }

  async getAlbumById(id){
    if(!id)return {error: 'Debe enviar un id valido.'}
    id = Number(id)
    if(isNaN(id)) return {error: 'Debe enviar un id valido.'}

    return await this.DAO.getAlbumById(id)
  }
  
  async createAlbum(data, caratula, usuario) {
    if(caratula === undefined){
      return {error: 'Formato de archivo no aceptado.'}
    }
    const metadata = await sharp(caratula.path).metadata();
    const width = metadata.width;
    const height = metadata.height;

    const megapixels = (width * height) / 1_000_000;
    if (megapixels > 50) {
      return { error: "La imagen no debe superar los 50 megapíxeles" };
    }

    if (width < 1400 || height < 1400 || width !== height) {
      return { error: "La imagen debe ser cuadrada y de al menos 1400x1400 px" };
    }

    let { titulo, is_compiled, artistas, gen1, gen2, manager } = data;
    if (
      !caratula ||
      !titulo ||
      !is_compiled ||
      !artistas ||
      !gen1 ||
      !usuario
    ) {
      return { error: "Faltan campos obligatorios" };
    }


    if(is_compiled == "true"){
      is_compiled = 1
    }else{
      is_compiled = 0
    }

    const dataAlbum = {
      paso: 1,
      titulo,
      artistas,
      caratula: `uploads/caratulas/${caratula.filename}`,
      usuario,
      is_compiled,
      gen1,
      gen2: gen2 || null,
      estado: "Pasos pendientes",
      manager: manager || null,
    };

    return await this.DAO.createAlbum(dataAlbum);
  }

  async updateStageTo2(params){
    let {id_album} = params
    if(!id_album)return {error: 'Debe enviar un id valido.'}

    id_album = Number(id_album)

    if(isNaN(id_album))return {error: 'Debe enviar un id valido.'}

    const existAlbum = await this.getAlbumById(id_album)
    if(existAlbum.error)return {error: existAlbum.error}
    
    return await this.DAO.updateStageTo2(id_album)
  }

  async sendAlbumToRevision(params){
    let {id_album} = params
    if(!id_album)return {error: 'Debe enviar un id valido.'}

    
    id_album = Number(id_album)

    if(isNaN(id_album))return {error: 'Debe enviar un id valido.'}

    const existAlbum = await this.getAlbumById(id_album)
    if(existAlbum.error)return {error: existAlbum.error}
    
    return this.DAO.sendAlbumToRevision(id_album)
  }
}

export const albumesServiceInstance = new AlbumesService(DAO);
