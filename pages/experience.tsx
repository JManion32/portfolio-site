import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function Experience() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="content">
        <h1 className="page-header">Experience</h1>
      </div>
      <button className="left-guide-button" onClick={() => navigate('/projects')}>
          {'<'} Projects
      </button>
      <button className="right-guide-button" onClick={() => navigate('/blogs')}>
            Blogs {'>'}
      </button>
    </>
  );
}

export default Experience;