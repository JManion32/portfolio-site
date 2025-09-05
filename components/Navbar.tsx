import React from 'react';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { initDarkMode } from '../utils/darkMode';

import jmLogo from '../assets/jm-dark-circle.png';
import sunBlack from '../assets/sun_black.png';
import moonWhite from '../assets/moon_white.png';

const Navbar: React.FC = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

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
        <ul className="nav-links">
            <li id="home-button">
                <img
                    src={jmLogo}
                    onClick={() => navigate('/')}
                    className="jm-logo"
                />
            </li>
            <li>
                <a onClick={() => navigate('/projects')}
                    className={`nav-link-text ${isActive('/projects') ? 'active-page' : ''}`}>
                    Projects
                </a>
            </li>
            <li>
                <a onClick={() => navigate('/experience')}
                    className={`nav-link-text ${isActive('/experience') ? 'active-page' : ''}`}>
                    Experience
                </a>
            </li>
            <li id="last-link">
                <a onClick={() => navigate('/resume')}
                    className={`nav-link-text ${isActive('/blogs') ? 'active-page' : ''}`}>
                    Resume
                </a>
            </li>
            <li id="dark-mode-item">
                <label className="dark-mode-switch">
                    <input type="checkbox" id="dark-mode-toggle"/>
                    <span className="slider">
                    <img
                        id="dark-mode-icon"
                        src={sunBlack}
                        data-light={sunBlack}
                        data-dark={moonWhite}
                        alt="mode icon"
                    />
                    </span>
                </label>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;
