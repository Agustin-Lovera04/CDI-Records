import {Link, useNavigate, useParams} from 'react-router-dom'
import { BASE_URL } from "../utils";
import { useEffect, useState } from 'react';

const Stage3 = () => {
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const {id_album, artistas} = useParams()
    useEffect(()=>{
        if(!id_album, !artistas){
            navigate('/home/albumes')
        }
    }, [id_album, artistas])

  const handleUpdateStage = async()=> {
    try {
      const response =await fetch(`${BASE_URL}/albumes/stage3/${id_album}`, {
        method: 'PUT',
        credentials: 'include',
      })
      
      
      const data = await response.json()
      if(data.error){
       return setError(data.error)
      }

      navigate(`/home/clues/stage2/${id_album}/${artistas}`)
    } catch (error) {
      setError("Error interno - Contacte a un administrador: admin@cdirecords.com")
    }

  }

  return (
    <div>
      {error &&  <p>{error}</p> }
      <h2>Lista de pistas</h2>
      <button onClick={handleUpdateStage}>Agregar mas pistas</button>
      <Link to={`/home/albumes/stage4/${id_album}/${artistas}`}>Guardar y continuar</Link>
    </div>
  )
}

export default Stage3