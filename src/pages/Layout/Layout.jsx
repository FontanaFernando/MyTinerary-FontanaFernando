import React from 'react'
import "./layout.css";
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Layout = ({children}) => {
    return (
        <>
        <header>
        <Navbar />
        </header>
        <main>
        {children}
        </main>
        <Footer />
        </>
        )
    }
    
/*     import { Outlet } from 'react-router-dom';
const Layout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
} */

export default Layout