import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user.isLoading && !user.isLogged) {
      navigate("/");
    }
  }, [user, navigate]);

  if (user.isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      Contenido Principal {user.name}
    </div>
  );
};

export default Home;
