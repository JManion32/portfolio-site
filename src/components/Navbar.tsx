import React from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { initDarkMode } from '../utils/darkMode';
import DarkModeToggle from './DarkModeToggle.tsx';

import jmLogo from '../assets/jm-dark-circle.png';

const Navbar: React.FC = () => {
    useEffect(() => {
        initDarkMode();
    }, []);

    useEffect(() => {
        const img = document.getElementById('dark-mode-icon');
        if (img) {
            img.classList.remove('no-transition');
        }
    }, []);

    return (
        <nav className="navbar">
            <div className="nav-links">
                <NavLink to={'/'}>
                    <img src={jmLogo} className="jm-logo" />
                </NavLink>
                <NavLink
                    to={'/projects'}
                    className={({ isActive }) => `nav-link-text ${isActive ? 'active-page' : ''}`}
                >
                    Projects
                </NavLink>
                <NavLink
                    to={'/experience'}
                    className={({ isActive }) => `nav-link-text ${isActive ? 'active-page' : ''}`}
                >
                    Experience
                </NavLink>
                <NavLink to={'/resume'} className={({ isActive }) => `nav-link-text ${isActive ? 'active-page' : ''}`}>
                    Resume
                </NavLink>
                <DarkModeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
