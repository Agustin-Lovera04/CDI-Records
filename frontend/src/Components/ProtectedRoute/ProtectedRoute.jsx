import { useContext } from "react"
import { UserContext } from "../../Context/UserContext"
import { Navigate } from "react-router-dom"


const ProtectedRoute = ({children, allowedRoles}) => {
    const {user} = useContext(UserContext)

    if(user.isLoading){
        return <div>Cargando...</div>
    }

    if(!user.isLogged){
        return <Navigate to='/'/>
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized"/>;
  }

    return children
}

export default ProtectedRoute