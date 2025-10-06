import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Login from "../Components/Login/Login";
import Home from "../Components/Home/Home";
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";
import Unauthorized from "../Components/Unauthorized/Unauthorized";
import Albumes from "../Components/Albumes/Albumes";
import AddClues from "../Components/AddClues/AddClues";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/home"
            element={
              <ProtectedRoute allowedRoles={['ARTISTA', 'ADMIN', 'MANAGER']}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
          path="/home/albumes"
          element={
            <ProtectedRoute allowedRoles={['ARTISTA', 'ADMIN', 'MANAGER']}>
              <Albumes/>
            </ProtectedRoute>
          }
          />

          <Route path="/home/clues/stage2/:id_album/:artistas" element ={
            <ProtectedRoute allowedRoles={['ARTISTA', 'ADMIN', 'MANAGER']}>
              <AddClues/>
            </ProtectedRoute>
          } />
          <Route path="/unauthorized" element={<Unauthorized/>} />
        </Route>

        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
