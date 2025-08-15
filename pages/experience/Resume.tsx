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
        </div>
      </div>
    </>
  );
}

export default Rensselaer;