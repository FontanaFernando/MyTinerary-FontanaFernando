import React from 'react'
import "./layout.css";
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom';
    
const Layout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <div className='footer'>
            <Footer />
            </div>
        </>
    )
}

export default Layout