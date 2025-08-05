import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Experience() {
  const navigate = useNavigate();

  return (
    <>
      <div className="content">
        <h1 className="page-header">Experience</h1>
      </div>
      <button className="left-guide-button" onClick={() => navigate('/projects')}>
          <span className="left-arrow-spacer">{'<<'}</span> Projects
      </button>
      <button className="right-guide-button" onClick={() => navigate('/blogs')}>
            Blogs <span className="right-arrow-spacer">{'>>'}</span>
      </button>
    </>
  );
}

export default Experience;