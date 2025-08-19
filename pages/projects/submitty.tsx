import Breadcrumbs from '../../components/Breadcrumb';
import TechStack from "../../components/TechStack";
import NavButton from '../../components/NavButton';

function Submitty() {
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">Submitty</h1>
            <button 
              className="contact-button project-contact-btn"
              onClick={() => window.open('https://submitty.org/index/overview', '_blank')}
              >
              <img src="../../assets/submitty_duck.png" className="contact-image"/>
            </button>
            <button 
              className="contact-button project-contact-btn"
              onClick={() => window.open('https://github.com/Submitty/Submitty', '_blank')}
              >
              <div className="github-image-wrapper">
                  <img src="../../assets/github-mark.png" className="github-image light" />
                  <img src="../../assets/github-mark-white.png" className="github-image dark" />
              </div>
            </button>
          </div>
          <div id="text-body">
            <p>
              Submitty is an open source course management, assignment submission, exam and grading 
              system from the Rensselaer Center for Open Source Software (RCOS), Department of Computer 
              Science at Rensselaer Polytechnic Institute.
            </p>
            <hr/>
            <TechStack
              sections={[
                {
                  title: "Frontend",
                  items: [
                    { name: "Vite", className: "vite" },
                    { name: "Twig", className: "twig" },
                    { name: "Vue", className: "vue" },
                    { name: "JavaScript", className: "javascript" },
                    { name: "TypeScript", className: "ts" }
                  ]
                },
                {
                  title: "Backend",
                  items: [
                    { name: "PHP", className: "php" },
                    { name: "Python", className: "python" }
                  ]
                },
                {
                  title: "Infrastructure & DevOps",
                  items: [
                    { name: "Docker", className: "docker" },
                    { name: "PostgreSQL", className: "postgres" }
                  ]
                },
                {
                  title: "Tooling",
                  items: [
                    { name: "ESLint", className: "eslint" },
                    { name: "Stylelint", className: "stylelint" },
                    { name: "Prettier", className: "prettier" },
                    { name: "Cypress", className: "cypress" }
                  ]
                }
              ]}
            />
            <hr/>
          </div>
        </div>
        <NavButton
          left="Speed Roulette" leftNav="/projects/speedroulette"
          right="Course Website" rightNav="/projects/psoft"
        />
      </div>
    </>
  );
}

export default Submitty;