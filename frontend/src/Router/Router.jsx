import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
import Login from '../Components/Login/Login'
import Home from '../Components/Home/Home'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/home' element={<Home/>}/>
            </Route>

            <Route path='/' element={<Login/>}/>
        </Routes>

    </BrowserRouter>
)
}

export default Router