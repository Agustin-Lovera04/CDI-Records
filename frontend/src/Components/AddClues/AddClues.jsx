import { useState } from "react"
import { BASE_URL } from "../utils"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"

const AddClues = () => {
    const navigate = useNavigate()
    const {id_album, artistas} = useParams()
    useEffect(()=>{
        if(!id_album, !artistas){
            navigate('/home/albumes')
        }
    }, [id_album, artistas])

    const [validationErrorClueFile, setValidationErrorClueFile] = useState(null)
    const [error, setError] = useState(null)
    const [clueFile, setClueFile] = useState(null)
    const [fields, setFields] = useState({
        nombre_pista: '',
        version: ''
    })

    const handleAddClue = async(e)=>{
        e.preventDefault()
        
        setValidationErrorClueFile('')
        setError('')
        
        const formData = new FormData()
        formData.append('nombre_pista', fields.nombre_pista)
        formData.append('version', fields.version)
        
        if(clueFile){
            formData.append('clue', clueFile)
        }
        
        try {
            const response = await fetch(`${BASE_URL}/clues/stage2/${id_album}/${artistas}`, {
                method: 'POST',
                credentials: 'include',
                body: formData
            })

            const data = await response.json()

            if(data.error){
                setError(data.error)
                return
            }

            navigate(
                `/home/crear-albumes/stage3/${id_album}/${artistas}`
            );
        } catch (error) {
                 setError(
        "Error interno - Contacte a un administrador: admin@cdirecords.com"
      );
        }
    }

    const handleFileChange = (e) => {
        const clue = e.target.files[0]
        if(!clue){
            return
        }

        setClueFile(clue)
    }

    const handleInputChange = (e) => {
        setFields({  
        ...fields, [e.target.name]: e.target.value})
    }

    return (
    <div>
        {error && <p>{error}</p>}
        {validationErrorClueFile &&  <p>{validationErrorClueFile}</p> }
        Agregar pista
 <form onSubmit={handleAddClue}>
        <label htmlFor="clue"></label>
        <input type="file" accept='.flac,.mp3,.wav' name='clue'  onChange={handleFileChange} required/>
        <label htmlFor="nombre_pista"></label>
        <input type="text" onChange={handleInputChange} name='nombre_pista'/>
        <label htmlFor="version"></label>
        <input type="text" onChange={handleInputChange} name='version'/>
        <button type="submit">Cargar</button>
 </form>
    </div>
  )
}

export default AddClues