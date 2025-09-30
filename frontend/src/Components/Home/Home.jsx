import { useContext, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      Contenido Principal {user.name}
      rol {user.role}
    </div>
  );
};

export default Home;
