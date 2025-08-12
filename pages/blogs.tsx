import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Blogs() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page">
        <div className="content">
          <h1 className="page-header">Blogs</h1>
          <p className="coming-soon">Coming soon!</p>
        </div>
        <footer className="guide-footer">
          <button className="left-guide-button" onClick={() => navigate('/experience')}>
              <span className="left-arrow-spacer">{'<<'}</span> Experience
          </button>
        </footer>
      </div>
    </>
  );
}

export default Blogs;