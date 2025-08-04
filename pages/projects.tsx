import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function Projects() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="content">
        <h1 className="page-header">Projects</h1>
        <button
            className="project-button"
        >
            <img
                src="../assets/preview.png"
                className="project-image"
                alt="mail icon"
            />
            Speed Roulette
        </button>
        <button
            className="project-button"
        >
            <img
                src="../assets/favicon.ico"
                className="project-image"
                alt="mail icon"
            />
            Submitty
        </button>
        <button
            className="project-button"
        >
            <img
                src="../assets/psoft-logo.png"
                className="project-image"
                alt="mail icon"
            />
            Course Website
        </button>
        <button
            className="project-button"
        >
            <img
                src="../assets/jm-dark-circle.png"
                className="project-image"
                alt="mail icon"
            />
            Portfolio Website
        </button>  
      </div>
      <button className="left-guide-button" onClick={() => navigate('/')}>
          {'<'} Home
      </button>
      <button className="right-guide-button" onClick={() => navigate('/experience')}>
            Experience {'>'}
      </button>
    </>
  );
}

export default Projects;