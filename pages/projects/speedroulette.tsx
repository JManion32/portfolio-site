import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SpeedRoulette() {
  const navigate = useNavigate();

  return (
    <>
      <div className="content">
        <h1 className="page-header">Speed Roulette</h1>
      </div>
      <button className="right-guide-button" onClick={() => navigate('/projects/submitty')}>
            Submitty <span className="right-arrow-spacer">{'>>'}</span>
      </button>
    </>
  );
}

export default SpeedRoulette;