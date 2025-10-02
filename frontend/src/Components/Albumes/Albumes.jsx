import React, { useState } from 'react';
import { BASE_URL } from '../utils';

const Albumes = () => {
  const [imageFile, setImageFile] = useState(null);
  const [fields, setFields] = useState({
    titulo: '',
    compilado: '',
    artistas: '',
    gen1: '',
    gen2: ''
  });

  const handleCreateAlbum = (e) => {
    e.preventDefault();

    fetch(`${BASE_URL}/albumes`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({fields, caratula: imageFile})
    })


  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleCreateAlbum}>
        <div>
        <label htmlFor="imageInput">Imagen del álbum:</label>
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          onChange={handleFileChange}
          />

          <p>Formato: PNG, GIF, BMP, TIF, JPG Y JPEG</p>
          <p>Espacio de color: RGB</p>
          <p>Dimensiones Mínimas: 1400x1400 pixeles (Recomendado 3000x3000 pixeles)</p>
          <p>La imágen debe se cuadrada, ancho y alto deben ser iguales</p>
          <p>Las imágenes no deben superar los 50 megapixeles ni 10Mb de peso.</p>
          <p>La información de tu carátula debe corresponder a su título y artista</p>
          <p>No debe contener imágenes explicitamente sexuales</p>
          <p>Ningún otro nombre de artista debe predominar por sobre el tuyo en tamaño</p>
          <p>No debe incluir marcas registradas de las cuales no tengas permiso</p>
          </div>
<br /><hr />
        <label htmlFor="tituloInput">Título:</label>
        <input
          type="text"
          id="tituloInput"
          name="titulo"
          value={fields.titulo}
          onChange={handleInputChange}
        />
<br />
        <label htmlFor="artistasInput">Artista o Artistas:</label>
        <input
          type="text"
          id="artistasInput"
          name="artistas"
          value={fields.artistas}
          onChange={handleInputChange}
        />
<br />
        <label htmlFor="compileInput">Compilado?:</label>
        <input
          type="checkbox"
          id="compileInput"
          name="compilado"
          value={fields.compilado}
          onChange={handleInputChange}
        />
<br />
        <label htmlFor="gen1Input">Género:</label>
        <input
          type="text"
          id="gen1Input"
          name="gen1"
          value={fields.gen1}
          onChange={handleInputChange}
        />
<br />
        <label htmlFor="gen2Input">Género 2:</label>
        <input
          type="text"
          id="gen2Input"
          name="gen2"
          value={fields.gen2}
          onChange={handleInputChange}
        />
<br />
        <button type="submit">Crear Álbum</button>
      </form>
    </div>
  );
};

export default Albumes;
