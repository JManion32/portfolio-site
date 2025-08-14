import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumb';

function Stewarts() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page">
        <div className="content">
          <Breadcrumbs />
          <div className="header-row">
            <h1 className="page-header">IT Field Technician Intern</h1>
          </div>
        </div>
        <footer className="guide-footer">
          <button className="left-guide-button" onClick={() => navigate('/experience/rensselaer')}>
              <span className="left-arrow-spacer">{'<<'}</span> Rensselaer Polytechnic Institute
          </button>
          <button className="right-guide-button" onClick={() => navigate('/experience/lambdachi')}>
                Lambda Chi Alpha <span className="right-arrow-spacer">{'>>'}</span>
          </button>
        </footer>
      </div>
    </>
  );
}

export default Stewarts;