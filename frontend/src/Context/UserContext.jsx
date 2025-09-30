import { createContext, useEffect, useState } from "react";
const BASE_URL = import.meta.env.BASE_URL

const entityUser = {
    id: null,
    name: null,
    role: null,
    isLogged: false,
    isLoading: true
}

export const UserContext = createContext()


export const UserProvider = ({children}) => {
    const [user, setUser] = useState(entityUser)

    useEffect(() => {
        const checkSessionStatus = async () => {
                if (user.isLogged) {
                setUser(prev => ({ ...prev, isLoading: false }));
                return;
                }
            try {
                const response = await fetch(`${BASE_URL}/user/current`, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })

                if(!response.ok){
                    setUser({ ...entityUser, isLoading: false })
                    return
                }

                const data = await response.json()

                if(data.error){
                    setUser({ ...entityUser, isLoading: false })
                    return
                }

                setUser({
                    id: data._id,
                    name: data.name,
                    role: data.role,
                    isLogged: true,
                    isLoading: false
                })
                return
            } catch (error) {
                setUser({ ...entityUser, isLoading: false })
            }

        }
        checkSessionStatus()
    }, [])

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}