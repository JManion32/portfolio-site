import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumb';

function Streamer() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page">
        <div className="content">
          <Breadcrumbs />
          <div className="header-row">
            <h1 className="page-header">Twitch Streamer</h1>
          </div>
        </div>
        <footer className="guide-footer">
          <button className="left-guide-button" onClick={() => navigate('/experience/hudsonvalley')}>
              <span className="left-arrow-spacer">{'<<'}</span> Hudson Valley CC
          </button>
        </footer>
      </div>
    </>
  );
}

export default Streamer;