import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';

import TechStack from "../../components/TechStack";
import ComingSoon from '../../components/ComingSoon';

function CookieCoder() {
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">Cookie Coder</h1>
          </div>
          <ComingSoon/>
          <div id="text-body">
            <p>
                This project is currently in its planning stages. If you have any input, please reach out!
            </p>
            <p>
                Cookie Coder is the site I wish I had when I was first learning to program. It will feature a 
                wide range of languages including Python, Java, C++, JavaScript, PHP, SQL, and more—and take 
                a fresh approach to traditional module-based learning. Instead of rigid lessons, users will 
                progress through interactive, flashcard-style challenges. As they answer questions correctly, 
                they’ll earn “bits,” an in-game currency that tracks progress and ranks players on global leaderboards. 
                The more bits they accumulate, the harder their questions will become.
            </p>
            <hr/>
            <TechStack
                sections={[
                {
                    title: "Front-end",
                    items: [
                    { name: "Vite", className: "vite" },
                    { name: "React", className: "react" },
                    { name: "TypeScript", className: "ts" },
                    { name: "Tailwind CSS", className: "tailwind" }
                    ]
                },
                {
                    title: "Backend",
                    items: [
                    { name: "Go", className: "go" },
                    { name: "Node.js", className: "nodejs" }
                    ]
                },
                {
                    title: "Database & Caching",
                    items: [
                    { name: "PostgreSQL", className: "postgres" },
                    { name: "Redis", className: "redis" }
                    ]
                },
                {
                    title: "Infrastructure & DevOps",
                    items: [
                    { name: "Docker", className: "docker" },
                    { name: "DigitalOcean", className: "digitalocean" },
                    { name: "AWS Route 53", className: "route53" },
                    { name: "Nginx", className: "nginx" },
                    { name: "Certbot", className: "certbot" }
                    ]
                },
                {
                    title: "Tooling / Dev Dependencies",
                    items: [
                    { name: "ESLint", className: "eslint" },
                    { name: "Stylelint", className: "stylelint" },
                    { name: "Prettier", className: "prettier" },
                    { name: "Cypress", className: "cypress" },
                    { name: "GolangCI-Lint", className: "golangci" },
                    { name: "gofmt", className: "gofmt" },
                    { name: "go test", className: "gotest" }
                    ]
                }
                ]}
            />
            <hr/>
            <h2>Core Idea: Learning Code through Repetition</h2>
            <p>
                Learning is continuous, and often occurs over an extended period of time. 
                Think about studying for an exam. Cramming the night before <b>does not work</b>. 
                It is more effective to study the material over a week. In the same way, learning how to 
                code isn't possible from just one online course. You need to build knowledge, and reinforce 
                it through repetition. This is what Cookie Coder aims to do through fluid modularized learning.
            </p>
            <h3>Interactive Flashcard-Style Questions</h3>
            <p>

            </p>
            <h3>Coding Challenges</h3>
            <p>
                
            </p>
            <hr/>
            <h2>Implementation</h2>
            <p>
                There is much to consider with this project. How large do I want to scale the MVP? Should I 
                integrate AI? What will deployment look like? 
            </p>
          </div>
        </div>
        <NavButton
          right="Speed Roulette" rightNav="/projects/speedroulette"
        />
      </div>
    </>
  );
}

export default CookieCoder;