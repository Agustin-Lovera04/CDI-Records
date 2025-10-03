import sharp from 'sharp'
import { AlbumesDAO as DAO } from "../DAO/manager/albumes-DAO.js";
class AlbumesService {
  constructor(DAO) {
    this.DAO = new DAO();
  }

  async getAllAlbumes() {
    return await this.DAO.getAllAlbumes();
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

    const { titulo, is_compiled, artistas, gen1, gen2, manager } = data;
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
}

export const albumesServiceInstance = new AlbumesService(DAO);
