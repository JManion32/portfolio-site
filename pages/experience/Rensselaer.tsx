import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumb';

function Rensselaer() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="header-row">
            <h1 className="page-header">Rensselaer Polytechnic Institute</h1>
          </div>
          <p>
            If I had to describe my experience at RPI in one word, it would be transformative. I try to live without regrets and 
            by the motto, "Everything happens for a reason", but sometimes I can't help but wonder where I would be if I 
            came here as a freshman. I'm beyond thankful for the people, experiences, and lessons. As I've already talked about 
            my campus involvment on other pages of the site (see Lambda Chi Alpha and Submitty), I would like to talk here 
            about how each of my semesters and courses went.
          </p>
          <h2>Fall 2024</h2>
          <p>

          </p>
          <h2>Spring 2025</h2>
          <h2>Fall 2025</h2>
          <p>
            I'm so excited for this semester!.
          </p>
        </div>
        <footer className="guide-footer">
          <button className="right-guide-button" onClick={() => navigate('/experience/stewarts')}>
                IT Field Technician <span className="right-arrow-spacer">{'>>'}</span>
          </button>
        </footer>
      </div>
    </>
  );
}

export default Rensselaer;