import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumb';

function SpeedRoulette() {
  const navigate = useNavigate();

  return (
    <>
      <div className="content">
        <Breadcrumbs />
        <div className="header-row">
          <h1 className="page-header">Speed Roulette</h1>
          <button 
            className="contact-button project-contact-btn"
            onClick={() => window.open('https://speedroulette.io/', '_blank')}
            >
            <img src="../../assets/sr-logo.svg" className="contact-image"/>
          </button>
          <button 
            className="contact-button project-contact-btn"
            onClick={() => window.open('https://github.com/JManion32/speed-roulette', '_blank')}
            >
            <div className="github-image-wrapper">
                <img src="../../assets/github-mark.png" className="github-image light" />
                <img src="../../assets/github-mark-white.png" className="github-image dark" />
            </div>
          </button>
        </div>
      </div>
      <button className="right-guide-button" onClick={() => navigate('/projects/submitty')}>
            Submitty <span className="right-arrow-spacer">{'>>'}</span>
      </button>
    </>
  );
}

export default SpeedRoulette;