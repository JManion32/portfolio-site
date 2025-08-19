import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';

function Portfolio() {
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">Portfolio Site</h1>
            <button 
              className="contact-button project-contact-btn"
              onClick={() => window.open('https://github.com/JManion32/portfolio-site', '_blank')}
              >
              <div className="github-image-wrapper">
                  <img src="../../assets/github-mark.png" className="github-image light" />
                  <img src="../../assets/github-mark-white.png" className="github-image dark" />
              </div>
            </button>
          </div>
          <div id="text-body">
            <p>Showcasing my work and experience!</p>
          </div>
        </div>
        <NavButton
          left="Course Website" leftNav="/projects/psoft"
        />
      </div>
    </>
  );
}

export default Portfolio;