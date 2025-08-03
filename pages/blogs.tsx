import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function Blogs() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="content">
        <h1 className="page-header">Blogs</h1>
      </div>
      <button className="left-guide-button" onClick={() => navigate('/experience')}>
          {'<'} Experience
      </button>
    </>
  );
}

export default Blogs;