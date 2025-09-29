import { Outlet } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Footer from '../Footer/Footer'


const Layout = () => {
  return (
    <div style={{
        display: 'grid',
        gridAutoRows: 'auto 1fr auto',
        minHeight: '100dvh'
    }}>
        <Navbar/>
        <main>
            <Outlet />
        </main>
        <Footer/>
    </div>
  )
}

export default Layout