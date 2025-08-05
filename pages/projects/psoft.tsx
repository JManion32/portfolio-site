import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';

function PSoft() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="content">
        <h1 className="page-header">Course Website</h1>
      </div>
      <button className="left-guide-button" onClick={() => navigate('/projects/submitty')}>
          {'<'} Submitty
      </button>
      <button className="right-guide-button" onClick={() => navigate('/projects/portfolio')}>
            Portfolio Site {'>'}
      </button>
    </>
  );
}

export default PSoft;