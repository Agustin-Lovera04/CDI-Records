import { useContext, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
import MetricsArtist from "../MetricsArtist/MetricsArtist";
import { BASE_URL } from "../utils";


const Home = () => {
  const { user } = useContext(UserContext);
  
  useEffect(()=> {
    const getMetricsArtist = async () => {
      try {
      const response = await fetch(`${BASE_URL}/user/${user.id}`)  // Revisar como hace las consultas por usuerio, con que va compararndo para encontrar 


    } catch (error) {
      setError('Error interno - Contacte a un administrador: admin@cdirecords.com')   
    }
  }

  getMetricsArtist()
  },[])

  return (
    <div>
      Contenido Principal {user.name} <br />
      rol {user.role}
      <hr />
      <MetricsArtist />
    </div>
  );
};

export default Home;
