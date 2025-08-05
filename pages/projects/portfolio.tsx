import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Portfolio() {
  const navigate = useNavigate();

  return (
    <>
      <div className="content">
        <h1 className="page-header">Portfolio Site</h1>
      </div>
      <button className="left-guide-button" onClick={() => navigate('/projects/psoft')}>
          {'<'} Course Website
      </button>
    </>
  );
}

export default Portfolio;