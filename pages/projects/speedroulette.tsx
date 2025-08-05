import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';

function SpeedRoulette() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="content">
        <h1 className="page-header">Speed Roulette</h1>
      </div>
      <button className="right-guide-button" onClick={() => navigate('/projects/submitty')}>
            Submitty {'>'}
      </button>
    </>
  );
}

export default SpeedRoulette;