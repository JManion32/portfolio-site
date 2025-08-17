import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Projects() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page">
        <div className="content">
            <h1 className="page-header">Projects</h1>
            <p className="projects-desc">Click on a project to learn more!</p> 
            <div className="project-grid">
                <div onClick={() => navigate('/projects/speedroulette')} className="project-preview-container">
                    <img
                        src="../assets/preview.png"
                        className="project-image"
                        alt="Speed Roulette Logo"
                    />
                    <h2 className="project-preview-header">Speed Roulette</h2>
                    <p className="project-preview-desc">A fast-paced browser game that puts an exciting twist on classic casino roulette.</p>
                </div>
                <div onClick={() => navigate('/projects/submitty')} className="project-preview-container">
                    <img
                        src="../assets/submitty_duck.png"
                        className="project-image"
                        alt="Submitty Logo"
                    />
                    <h2 className="project-preview-header">Submitty</h2>
                    <p className="project-preview-desc">Rensselaer Polytechnic Institute's open source homework submission server for computer science courses.</p>
                </div>
                <div onClick={() => navigate('/projects/psoft')} className="project-preview-container">
                    <img
                        src="../assets/psoft-logo.png"
                        className="project-image"
                        alt="Priciples of Software Image"
                    />
                    <h2 className="project-preview-header">Course Website</h2>
                    <p className="project-preview-desc">Course website for Principles of Software, a core computer science class at Rensselaer Polytechnic Institute.</p>
                </div>
                <div onClick={() => navigate('/projects/portfolio')} className="project-preview-container">
                    <img
                        src="../assets/jm-dark-circle.png"
                        className="project-image"
                        alt="JM logo"
                    />
                    <h2 className="project-preview-header">Portfolio Site</h2>
                    <p className="project-preview-desc">Website to showcase my projects, experience, and blogs.</p>
                </div>
            </div>
        </div>
        <footer className="guide-footer">
            <button className="left-guide-button" onClick={() => navigate('/')}>
                <span className="left-arrow-spacer">{'<<'}</span> Home
            </button>
            <button className="right-guide-button" onClick={() => navigate('/experience')}>
                    Experience <span className="right-arrow-spacer">{'>>'}</span>
            </button>
        </footer>
      </div>
    </>
  );
}

export default Projects;