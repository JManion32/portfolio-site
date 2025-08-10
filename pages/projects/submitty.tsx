import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumb';

function Submitty() {
  const navigate = useNavigate();

  return (
    <>
      <div className="content">
        <Breadcrumbs labelMap={{ projects: 'Projects', submitty: 'Submitty' }} />
        <h1 className="page-header">Submitty</h1>
      </div>
      <button className="left-guide-button" onClick={() => navigate('/projects/speedroulette')}>
          <span className="left-arrow-spacer">{'<<'}</span> Speed Roulette
      </button>
      <button className="right-guide-button" onClick={() => navigate('/projects/psoft')}>
            Course Website <span className="right-arrow-spacer">{'>>'}</span>
      </button>
    </>
  );
}

export default Submitty;