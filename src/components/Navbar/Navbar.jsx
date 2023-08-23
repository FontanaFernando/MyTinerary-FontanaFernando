import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className='navLogo'>
                <img src="public/death-star.svg" alt="mytinerary-logo" />
                <h1>MyTynerary</h1>
            </div>
            <div className='navMenu'>
                <a href="/">Home</a>
                <a href="/Cities">Cities</a>
                <a href="#">Contact</a>
                <a href="#">About</a>
                <img className='userImg' src="public/user.svg" alt="user-picture" />
            </div>
        </nav>
    )
};

export default Navbar;