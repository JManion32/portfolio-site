import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { initDarkMode } from '../utils/darkMode';

const Navbar: React.FC = () => {

  const navigate = useNavigate();

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
            <li>
                <a onClick={() => navigate('/')}>
                    Home
                </a>
            </li>
            <li>
                <a onClick={() => navigate('/projects')}>
                    Projects
                </a>
            </li>
            <li>
                <a onClick={() => navigate('/experience')}>
                    Experience
                </a>
            </li>
            <li>
                <a onClick={() => navigate('/blogs')}>
                    Blogs
                </a>
            </li>
            <li>
                <label className="dark-mode-switch">
                    <input type="checkbox" id="dark-mode-toggle" />
                    <span className="slider">
                    <img
                        id="dark-mode-icon"
                        src="../assets/sun_black.png"
                        data-light="../assets/sun_black.png"
                        data-dark="../assets/moon_white.png"
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
