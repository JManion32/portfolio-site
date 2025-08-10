import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumb';

function Portfolio() {
  const navigate = useNavigate();

  return (
    <>
      <div className="content">
        <Breadcrumbs labelMap={{ projects: 'Projects', submitty: 'Submitty' }} />
        <h1 className="page-header">Portfolio Site</h1>
      </div>
      <button className="left-guide-button" onClick={() => navigate('/projects/psoft')}>
          <span className="left-arrow-spacer">{'<<'}</span> Course Website
      </button>
    </>
  );
}

export default Portfolio;