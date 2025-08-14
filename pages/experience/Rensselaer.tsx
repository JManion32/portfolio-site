import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumb';

function Rensselaer() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page">
        <div className="content">
          <Breadcrumbs />
          <div className="header-row">
            <h1 className="page-header">Rensselaer Polytechnic Institute</h1>
          </div>
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