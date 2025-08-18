import { useNavigate } from 'react-router-dom';
import PreviewCard from '../components/PreviewCard';

function Projects() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page">
        <div className="content">
            <h1 className="page-header">Projects</h1>
            <p className="projects-desc">Click on a project to learn more!</p> 
            <div className="project-grid">
                <PreviewCard
                    img= "../assets/sr-preview.png"
                    header= "Speed Roulette"
                    desc= "A fast-paced browser game that puts an exciting twist on classic casino roulette."
                    nav= "/projects/speedroulette"
                />
                <PreviewCard
                    img= "../assets/submitty_duck.png"
                    header= "Submitty"
                    desc= "Rensselaer Polytechnic Institute's open source homework submission server for computer science courses."
                    nav= "/projects/submitty"
                />
                <PreviewCard
                    img= "../assets/psoft-logo.png"
                    header= "Course Website"
                    desc= "Course website for Principles of Software, a core computer science class at Rensselaer Polytechnic Institute."
                    nav= "/projects/psoft"
                />
                <PreviewCard
                    img= "../assets/jm-dark-circle.png"
                    header= "Portfolio Site"
                    desc= "Website to showcase my projects, experience, and blogs."
                    nav= "/projects/portfolio"
                />
            </div>
        </div>
        <footer className="guide-footer">
            <button className="left-guide-button" onClick={() => navigate('/')}>
                <span className="left-arrow-spacer">{'<<'}</span> Home
            </button>
            <button className="right-guide-button" onClick={() => navigate('/experience')}>
                    Experience <span className="right-arrow-spacer">{'>>'}</span>
            </button>
        </footer>
      </div>
    </>
  );
}

export default Projects;