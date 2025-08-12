import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Experience() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page">
        <div className="content">
          <h1 className="page-header">Experience</h1>
          <h2>Rensselaer Polytechnic Institute</h2>
          <h2>IT Field Technician Intern</h2>
          <h2>Lambda Chi Alpha</h2>
          <h2>Price Chopper</h2>
          <h2>Hudson Valley Community College</h2>
          <h2>Twitch Streamer</h2>
        </div>
        <footer className="guide-footer">
          <button className="left-guide-button" onClick={() => navigate('/projects')}>
               <span className="left-arrow-spacer">{'<<'}</span> Projects
          </button>
          <button className="right-guide-button" onClick={() => navigate('/blogs')}>
                Blogs <span className="right-arrow-spacer">{'>>'}</span>
          </button>
        </footer>
      </div>
    </>
  );
}

export default Experience;