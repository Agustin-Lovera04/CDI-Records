import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Login from "../Components/Login/Login";
import Home from "../Components/Home/Home";
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";
import Unauthorized from "../Components/Unauthorized/Unauthorized";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/unauthorized" element={<Unauthorized/>} />
{/*           <Route path="/test" element={
            <ProtectedRoute allowedRoles={'PREMIUM'}>
            <Test/>
            </ProtectedRoute>
            } /> */}
        </Route>

        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
