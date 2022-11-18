import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
    return (
        <header>
            <Logo/>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' end style={({ isActive }) => ({ textDecoration : isActive? "underline" : 'none' })}>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to='/a-propos' style={({ isActive }) => ({ textDecoration : isActive? "underline" : 'none'})}>A Propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;