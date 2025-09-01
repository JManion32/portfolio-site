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
            <TechStack
              sections={[
                {
                  title: "Front-end",
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
              a fellow software engineer, who always enjoys seeing what I’ve been building.
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
              This site is an opportunity to be personable rather than bland, or AI generated. I 
              have been telling myself since the start that this is <code>justinmanion.com</code>, 
              and I am not going to be afraid to let it reflect who I am.
            </p>
            <hr/>
            <h2>Implementation</h2>
            <p>
              After weighing different options for the tech stack, I decided to use the same one 
              as <a onClick={() => navigateTop("/projects/speedroulette")}>Speed Roulette</a>. 
              I almost chose Vue, but decided React would be better for learning purposes. I also went back 
              and forth for about using Tailwind or vanilla CSS, and eventually decided on the latter. 
              This decision paid off as it was much more straightforward to handle the dark mode toggle and the responsive scaling.
            </p>
            <p>
              While <a onClick={() => navigateTop("/projects/speedroulette")}>Speed Roulette</a> introduced 
              me to React and large-scale CSS usage, this portfolio site 
              solidified my understanding. I feel much more confident in how I structure and use components, and I’m 
              confident this site will be easy to maintain going forward. For CSS, I thought I was already a pro, but this
              project taught me a whole lot more. Before, I didn't realize I could create variables for more than just colors, 
              but now I don't know how I lived without it. The variables were especially useful for the dark 
              mode toggle and responsive scaling. I now feel like I have to go back through my other projects and 
              add a <code>scaling.css</code> to them!
            </p>
            <hr/>
            <h2>Reflection</h2>
            <p>
              Overall, building this site was fun and gave me a chance to solidify my knowledge of front-end 
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