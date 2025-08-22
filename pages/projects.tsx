import PreviewCard from '../components/PreviewCard';
import NavButton from '../components/NavButton';

import srPreview from '../assets/sr-preview.png';
import submittyDuck from '../assets/submitty_duck.png';
import psoftLogo from '../assets/psoft-logo.png';
import jmLogo from '../assets/jm-dark-circle.png';

function Projects() {
  return (
    <>
      <div className="page">
        <div className="content">
            <h1 className="main-page-header">Projects</h1>
            <p className="main-page-desc">Click on a project to learn more!</p> 
            <div className="project-grid">
                <PreviewCard
                    img= {srPreview}
                    header= "Speed Roulette"
                    desc= "A fast-paced browser game that puts an exciting twist on classic casino roulette."
                    nav= "/projects/speedroulette"
                />
                <PreviewCard
                    img= {submittyDuck}
                    header= "Submitty"
                    desc= "Rensselaer Polytechnic Institute's open source homework submission server for computer science courses."
                    nav= "/projects/submitty"
                />
                <PreviewCard
                    img= {psoftLogo}
                    header= "Course Website"
                    desc= "Course website for Principles of Software, a core computer science class at Rensselaer Polytechnic Institute."
                    nav= "/projects/psoft"
                />
                <PreviewCard
                    img= {jmLogo}
                    header= "Portfolio Site"
                    desc= "Website to showcase my projects, experience, and blogs."
                    nav= "/projects/portfolio"
                />
            </div>
        </div>
        <NavButton
          left="Home" leftNav="/"
          right="Experience" rightNav="/experience"
        />
      </div>
    </>
  );
}

export default Projects;