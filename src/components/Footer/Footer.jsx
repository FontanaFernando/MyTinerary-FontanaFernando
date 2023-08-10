import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='footerLogo'>
                <img src="public/death-star.svg" alt="mytinerary-logo" />
                <p>direccion papapapapa</p>
            </div>
            <div className='footerMedia'>
                <a  href="https://www.facebook.com/" target='blank'><img src="public/meta.svg" alt="Facebook" /></a>
                <a href="https://www.instagram.com/" target='blank'><img src="public/instagram.svg" alt="Instagram" /></a>
                <a href="https://www.twitter.com/?lang=es" target='blank'><img src="public/twitter.svg" alt="Twitter" /></a>
            </div>
        </footer>
    )
}

export default Footer