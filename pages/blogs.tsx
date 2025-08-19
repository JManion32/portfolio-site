import { useNavigate } from 'react-router-dom';
import NavButton from '../components/NavButton';

function Blogs() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page">
        <div className="content">
          <h1 className="main-page-header">Blogs</h1>
          <p className="main-page-desc">Coming soon!</p>
        </div>
        <footer className="guide-footer">
          <button className="left-guide-button" onClick={() => navigate('/experience')}>
              <span className="left-arrow-spacer">{'<<'}</span> Experience
          </button>
        </footer>
        <NavButton
          left="Experience" rightNav="/experience"
        />
      </div>
    </>
  );
}

export default Blogs;