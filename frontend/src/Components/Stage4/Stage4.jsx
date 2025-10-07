import { useEffect, useState } from "react";
import { BASE_URL } from "../utils";
import { useNavigate, useParams } from "react-router-dom";

const Stage4 = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  let { id_album } = useParams();
  useEffect(() => {
    if (!id_album) {
      setError("Debe enviar un id valido.");
    }
  }, [id_album]);
  const handleSendAlbumToRevision = async () => {
    try {
      const response = await fetch(`${BASE_URL}/albumes/stage4/${id_album}`, {
        method: "PUT",
        credentials: "include",
      });

      const data = await response.json();

      if (data.error) {
        return setError(data.error);
      }

      console.log('paso')

      navigate("/home/albumes");
    } catch (error) {
        console.log(error)
      setError(
        "Error interno - Contacte a un administrador: admin@cdirecords.com"
      );
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <h1>Titulo del album</h1>
      <h2>Imagen del album</h2>
      <h3>Genero: </h3>

      <p>PISTAS</p>
      <p>PISTAS</p>
      <p>PISTAS</p>

      <h3>Colaboradores</h3>

      <button onClick={handleSendAlbumToRevision}>Enviar a revision.</button>
    </div>
  );
};

export default Stage4;
