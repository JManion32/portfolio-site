import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';

import githubLight from '../../assets/github-mark.png';
import githubDark from '../../assets/github-mark-white.png';

import TechStack from "../../components/TechStack";

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
                  <img src={githubLight} className="github-image light" />
                  <img src={githubDark} className="github-image dark" />
              </div>
            </button>
          </div>
          <div id="text-body">
            <p>The site you are on right now, for showcasing my work. I hope you are enjoying it!</p>
            <hr/>
            <TechStack
              sections={[
                {
                  title: "Frontend",
                  items: [
                    { name: "Vite", className: "vite" },
                    { name: "Twig", className: "twig" },
                    { name: "React", className: "react" },
                    { name: "TypeScript", className: "ts" }
                  ]
                },
                {
                  title: "Infrastructure & DevOps",
                  items: [
                    { name: "DigitalOcean", className: "digitalocean" },
                    { name: "AWS Route 53", className: "route53" },
                    { name: "Nginx", className: "nginx" },
                    { name: "Certbot", className: "certbot" }
                  ]
                },
                {
                  title: "Tooling",
                  items: [
                    { name: "ESLint", className: "eslint" },
                    { name: "Stylelint", className: "stylelint" },
                    { name: "Prettier", className: "prettier" },
                  ]
                }
              ]}
            />
            <p>
              Pretty much the same as <a href="">Speed Roulette</a>, without the backend stuff.
            </p>
            <hr/>
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