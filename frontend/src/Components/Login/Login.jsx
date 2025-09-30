import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../../Context/UserContext";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Login = () => {
    const navigate = useNavigate()
    const {setUser} = useContext(UserContext)
    const [error, setError] = useState(false)
    const handleFormLogin = async (e) => {
        e.preventDefault()
        
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        if(!email || ! password){
            return
        }

        try {
            const response = await fetch(`${BASE_URL}/user/login`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({email, password})
            })

            const data = await response.json()
            
            if(data.error){
                return setError(data.error)
            }

            setUser({
                id: data._id,
                name: data.name,
                role: data.role,
                isLogged: true,
                isLoading: false
            });

            navigate('/home')

        } catch (error) {
            setError(error.message)
        }
    } 
    
    return (
    <div>
        {error && <div>{error}</div> }
        <form onSubmit={handleFormLogin}>
            <label htmlFor="email">Ingrese email
                <input type="email" name="email" id="email"  required/>
            </label>
            <label htmlFor="password">
                <input type="password" name="password" id="password" required/>
            </label>
            <button type="submit">Ingresar</button>
        </form>
    </div>
  )
}

export default Login