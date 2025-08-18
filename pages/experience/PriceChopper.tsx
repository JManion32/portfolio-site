import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumb';

function PriceChopper() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="header-row">
            <h1 className="page-header">Price Chopper</h1>
          </div>
          <div id="text-body">

          </div>
        </div>
        <footer className="guide-footer">
          <button className="left-guide-button" onClick={() => navigate('/experience/lambdachi')}>
              <span className="left-arrow-spacer">{'<<'}</span> Lambda Chi Alpha
          </button>
          <button className="right-guide-button" onClick={() => navigate('/experience/hudsonvalley')}>
                Hudson Valley CC <span className="right-arrow-spacer">{'>>'}</span>
          </button>
        </footer>
      </div>
    </>
  );
}

export default PriceChopper;