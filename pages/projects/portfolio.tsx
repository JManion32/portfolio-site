import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';

import githubLight from '../../assets/github-mark.png';
import githubDark from '../../assets/github-mark-white.png';

import TechStack from "../../components/TechStack";
import useNavigateTop from "../../hooks/useNavigateTop";

function Portfolio() {
  const navigateTop = useNavigateTop();
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">Portfolio Site</h1>
            <button 
              className="contact-button project-contact-btn"
              title="Portfolio Repository"
              onClick={() => window.open('https://github.com/JManion32/portfolio-site', '_blank')}
              >
              <div className="github-image-wrapper">
                  <img src={githubLight} className="github-image light" />
                  <img src={githubDark} className="github-image dark" />
              </div>
            </button>
          </div>
          <div id="text-body">
            <p>The site you are on right now, for showcasing my experience. I hope you are enjoying it!</p>
            <hr/>
            <h2>Tech Stack</h2>
            <TechStack
              sections={[
                {
                  title: "Front-end",
                  items: [
                    { name: "Vite", className: "vite" },
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
            <hr/>
            <h2>Design Goals</h2>
            <p>
              There were several objectives I had in mind when designing this site:
            </p>
            <h3>Resume, but better</h3>
            <p>
              A resume is limited to only 1 page of content. Its strength lies in conciseness, 
              but that can also be a limitation. With this site, I wanted to go beyond 
              bullet points and offer a more detailed view of what I’ve been working on. 
              In addition to showcasing my experience, the site also serves as a personal 
              record of my progress. Most of all, it’s something I created for my father, 
              a fellow software engineer, who always likes to see what I’ve been building.
            </p>
            <h3>Responsive / Interactive Experience</h3>
            <p>
              Since this site is static with a focus on text content rather than defining 
              features, I wanted to ensure it was thoughtfully designed. You'll find 
              a smooth dark mode toggle, responsive scaling, fun animations, and 
              interactive buttons, all crafted with care to make the UX both engaging and memorable.
            </p>
            <h3>Show Personality</h3>
            <p>
              This site is an opportunity to be personable rather than bland, or AI generated. 
              It's literally <code>justinmanion.com</code>, and I want it to reflect who I am.
            </p>
            <hr/>
            <h2>Implementation</h2>
            <p>
              After weighing different options for the tech stack, I decided to use the same one 
              as <a onClick={() => navigateTop("/projects/speedroulette")}>Speed Roulette</a>. 
              I almost chose Vue, but decided React would be better for learning purposes. I also went back and forth on whether 
              to use Tailwind or vanilla CSS, and eventually decided to stick with the latter for (in my opinion) a better developer experience.
            </p>
            <p>
              While <a onClick={() => navigateTop("/projects/speedroulette")}>Speed Roulette</a> introduced 
              me to React and large-scale CSS usage, this portfolio site 
              solidified my understanding. I feel more confident in how I structure and use components, and I think I've done a good 
              job of keeping this site as maintainable for future me as possible. For CSS, I thought I was already a pro, but this
              project taught me a whole lot more. I didn't realize how much was possible with CSS variables until I created 
              <code>scaling.css</code> for this project. Its completely changed the way I think about front-end design.
            </p>
            <hr/>
            <h2>Reflection</h2>
            <p>
              Overall, building this site was a worthwhile undertaking that has solidified my knowledge of front-end 
              technologies. Honestly, the hardest part was writing all of these pages! I hope you’ve enjoyed 
              the experience so far!
            </p>
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