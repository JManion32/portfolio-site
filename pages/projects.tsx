import { useEffect, useState } from 'react';
import { initDarkMode } from '../utils/darkmode';
import Navbar from '../components/Navbar';

function Projects() {
    useEffect(() => {
        initDarkMode();
    }, []);

  return (
    <>
      <Navbar />
      
    </>
  );
}

export default Projects;