import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumb';

function HudsonValley() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="header-row">
            <h1 className="page-header">Hudson Valley Community College</h1>
          </div>
          <div id="text-body">
            
          </div>
        </div>
        <footer className="guide-footer">
          <button className="left-guide-button" onClick={() => navigate('/experience/pricechopper')}>
              <span className="left-arrow-spacer">{'<<'}</span> Price Chopper
          </button>
          <button className="right-guide-button" onClick={() => navigate('/experience/streamer')}>
                Twitch Streamer <span className="right-arrow-spacer">{'>>'}</span>
          </button>
        </footer>
      </div>
    </>
  );
}

export default HudsonValley;