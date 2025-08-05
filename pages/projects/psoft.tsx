import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PSoft() {
  const navigate = useNavigate();

  return (
    <>
      <div className="content">
        <h1 className="page-header">Course Website</h1>
      </div>
      <button className="left-guide-button" onClick={() => navigate('/projects/submitty')}>
          <span className="left-arrow-spacer">{'<<'}</span> Submitty
      </button>
      <button className="right-guide-button" onClick={() => navigate('/projects/portfolio')}>
            Portfolio Site <span className="right-arrow-spacer">{'>>'}</span>
      </button>
    </>
  );
}

export default PSoft;