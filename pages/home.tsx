import { useEffect, useState } from 'react';
import { initDarkMode } from '../utils/darkmode';

function Home() {
    useEffect(() => {
        initDarkMode();
    }, []);

  return (
    <>
      <h1>Justin Manion</h1>
      <div className="dark-mode-container">
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
      </div>
    </>
  );
}

export default Home;
