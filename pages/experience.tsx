import { useEffect, useState } from 'react';
import { initDarkMode } from '../utils/darkmode';
import Navbar from '../components/Navbar';

function Experience() {
    useEffect(() => {
        initDarkMode();
    }, []);

  return (
    <>
      <Navbar />
      <div>
        <h1 className="name-header">Experience</h1>
      </div>
    </>
  );
}

export default Experience;