import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils";

const Albumes = () => {
  const navigate = useNavigate();
  const [validationErrorImage, setValidationErrorImage] = useState(null);
  const [error, setError] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [fields, setFields] = useState({
    titulo: "",
    is_compiled: false,
    artistas: "",
    gen1: "",
    gen2: "",
  });

  const handleCreateAlbum = async (e) => {
    e.preventDefault();

    setValidationErrorImage('')
    setError('')

    const formData = new FormData();
    formData.append("titulo", fields.titulo);
    formData.append("is_compiled", fields.is_compiled);
    formData.append("artistas", fields.artistas);
    formData.append("gen1", fields.gen1);
    formData.append("gen2", fields.gen2);

    if (imageFile) {
      formData.append("caratula", imageFile);
    }

    try {
      const response = await fetch(`${BASE_URL}/albumes`, {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
        return;
      }

      navigate(
        `/home/albumes/paso2/${data.payload.id_album}&${data.payload.usuario}`
      );
    } catch (error) {
      setError(
        "Error interno - Contacte a un administrador: admin@cdirecords.com"
      );
    }
  };

  const handleFileChange = (e) => {
    const image = e.target.files[0];
    if (!image) return;
    
    if (image.size > 10 * 1024 * 1024) {
      setValidationErrorImage("La imagen no debe superar los 10 MB");
      e.target.value = null;
      setImageFile(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();

      img.onload = () => {
        const width = img.width;
        const height = img.height;
        const megapixels = (width * height) / 1_000_000;

        if (width < 1400 || height < 1400 || width !== height) {
          setValidationErrorImage(
            "La imagen debe ser cuadrada y tener mínimo 1400x1400 px"
          );
          e.target.value = null;
          setImageFile(null);
          return;
        }

        if (megapixels > 50) {
          setValidationErrorImage(
            "La imagen no debe superar los 50 megapixels"
          );
          e.target.value = null;
          setImageFile(null);
          return;
        }

        setValidationErrorImage(null);
        setImageFile(image);
      };

      img.src = event.target.result;
    };

    reader.readAsDataURL(image);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFields({ ...fields, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div>
      {validationErrorImage && (
        <p style={{ color: "red" }}>{validationErrorImage}</p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleCreateAlbum} id="">
        <div>
          <label htmlFor="caratula">Imagen del álbum:</label>
          <input
            type="file"
            id="caratula"
            accept="image/*"
            onChange={handleFileChange} required
          />

          <p>Formato: PNG, GIF, BMP, TIF, JPG Y JPEG</p>
          <p>Espacio de color: RGB</p>
          <p>
            Dimensiones Mínimas: 1400x1400 pixeles (Recomendado 3000x3000
            pixeles)
          </p>
          <p>La imágen debe se cuadrada, ancho y alto deben ser iguales</p>
          <p>
            Las imágenes no deben superar los 50 megapixeles ni 10Mb de peso.
          </p>
          <p>
            La información de tu carátula debe corresponder a su título y
            artista
          </p>
          <p>No debe contener imágenes explicitamente sexuales</p>
          <p>
            Ningún otro nombre de artista debe predominar por sobre el tuyo en
            tamaño
          </p>
          <p>
            No debe incluir marcas registradas de las cuales no tengas permiso
          </p>
        </div>
        <br />
        <hr />
        <label htmlFor="tituloInput">Título:</label>
        <input
          type="text"
          id="tituloInput"
          name="titulo"
          value={fields.titulo}
          onChange={handleInputChange} required
        />
        <br />
        <label htmlFor="artistasInput">Artista o Artistas:</label>
        <input
          type="text"
          id="artistasInput"
          name="artistas"
          value={fields.artistas}
          onChange={handleInputChange} required
        />
        <br />
        <label htmlFor="compileInput">Compilado?:</label>
        <input
          type="checkbox"
          id="compileInput"
          name="is_compiled"
          value={fields.is_compiled}
          onChange={handleInputChange} required
        />
        <br />
        <label htmlFor="gen1Input">Género:</label>
        <input
          type="text"
          id="gen1Input"
          name="gen1"
          value={fields.gen1}
          onChange={handleInputChange} required
        />
        <br />
        <label htmlFor="gen2Input">Género 2:</label>
        <input
          type="text"
          id="gen2Input"
          name="gen2"
          value={fields.gen2}
          onChange={handleInputChange} required
        />
        <br />
        <button type="submit">Crear Álbum</button>
      </form>
    </div>
  );
};

export default Albumes;
