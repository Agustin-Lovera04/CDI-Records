import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Login from "../Components/Login/Login";
import Home from "../Components/Home/Home";
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";
import Unauthorized from "../Components/Unauthorized/Unauthorized";
import CrearAlbumes from "../Components/CrearAlbumes/CrearAlbumes";
import AddClues from "../Components/AddClues/AddClues";
import Stage3 from "../Components/Stage3/Stage3";
import Stage4 from "../Components/Stage4/Stage4";
import Albumes from "../Components/Albumes/Albumes";

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
          <Route
          path="/home/crear-albumes"
          element={
            <ProtectedRoute allowedRoles={['ARTISTA', 'ADMIN', 'MANAGER']}>
              <CrearAlbumes/>
            </ProtectedRoute>
          }
          />

          <Route path="/home/clues/stage2/:id_album/:artistas" element ={
            <ProtectedRoute allowedRoles={['ARTISTA', 'ADMIN', 'MANAGER']}>
              <AddClues/>
            </ProtectedRoute>
          } />

            <Route path="/home/crear-albumes/stage3/:id_album/:artistas" element ={
            <ProtectedRoute allowedRoles={['ARTISTA', 'ADMIN', 'MANAGER']}>
              <Stage3/>
            </ProtectedRoute>
          } />

            <Route path="/home/crear-albumes/stage4/:id_album/:artistas" element ={
            <ProtectedRoute allowedRoles={['ARTISTA', 'ADMIN', 'MANAGER']}>
              <Stage4/>
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
