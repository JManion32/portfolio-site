import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumb';

function PSoft() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page">
        <div className="content">
          <Breadcrumbs />
          <h1 className="page-header">Course Website</h1>
          <p>
            Principles of Software is a core computer science class at RPI, typically taken by students in their sophomore year.
            The course covers core software engineering practices, focusing on requirements, design, implementation, testing, and maintenance. 
            While the course had a lot to offer, its website was lackluster at best. I met with the professor, and got the gig to revamp it 
            during the summer of 2025.
          </p>
        </div>
        <footer className="guide-footer">
          <button className="left-guide-button" onClick={() => navigate('/projects/submitty')}>
              <span className="left-arrow-spacer">{'<<'}</span> Submitty
          </button>
          <button className="right-guide-button" onClick={() => navigate('/projects/portfolio')}>
                Portfolio Site <span className="right-arrow-spacer">{'>>'}</span>
          </button>
        </footer>
      </div>
    </>
  );
}

export default PSoft;