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