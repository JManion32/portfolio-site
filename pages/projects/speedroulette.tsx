import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumb';

function SpeedRoulette() {
  const navigate = useNavigate();

  return (
    <>
      <div className="content">
        <Breadcrumbs labelMap={{ projects: 'Projects', submitty: 'Submitty' }} />
        <h1 className="page-header">Speed Roulette</h1>
      </div>
      <button className="right-guide-button" onClick={() => navigate('/projects/submitty')}>
            Submitty <span className="right-arrow-spacer">{'>>'}</span>
      </button>
    </>
  );
}

export default SpeedRoulette;