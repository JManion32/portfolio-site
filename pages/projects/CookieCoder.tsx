import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';

import TechStack from "../../components/TechStack";
import ComingSoon from '../../components/ComingSoon';
import useNavigateTop from "../../hooks/useNavigateTop";

function CookieCoder() {
  const navigateTop = useNavigateTop();
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
                Cookie Coder is the site I wish I had when I was first learning to program. It 
                will feature a wide range of languages including Python, Java, C++, JavaScript, 
                PHP, SQL, and more, and take a fresh approach to traditional module-based learning. 
                Instead of rigid lessons, users will progress through interactive, flashcard-style 
                problem sets. As they answer questions correctly, they’ll earn “bits,” an in-game 
                currency that tracks progress and ranks players on global leaderboards. The more 
                bits they accumulate, the larger their question pool grows.
            </p>
            <hr/>
            <h2>Tentative Tech Stack</h2>
            <p>
              Pretty much the same as <a onClick={() => navigateTop("/projects/speedroulette")}>Speed Roulette</a> without 
              Tailwind CSS, and with the addition of Node.js. Go's use in this project is for the workers.
            </p>
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
                    title: "Infrastructure",
                    items: [
                    { name: "Docker", className: "docker" },
                    { name: "AWS", className: "route53" },
                    { name: "Nginx", className: "nginx" },
                    { name: "Certbot", className: "certbot" }
                    ]
                },
                {
                    title: "Tooling / DevOps",
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
                Learning is continuous, occurring as a culmination of multiple instances. Think about studying 
                for an exam. Cramming all the material the night before <b>does not work</b>. It is far more effective 
                to study multiple times over a week. In the same way, learning a programming language isn't 
                possible from just a single online course. You need to build a foundation of knowledge, then 
                reinforce it through repetition. This is what Cookie Coder aims to do through <i>fluid</i> modular learning.
            </p>
            <h3>Interactive Flashcard-Style Questions</h3>
            <p>
                The standard gamplay. These questions will be simple, enabling the user to rapid-fire cycle through them. 
                For each programming language, the user will start with 300 of these questions, and accumulate more, higher level 
                ones as they advance in the game. Rather than having set modules, questions will be from the entire pool, and 
                pulled based on percentages.
            </p>
            <h3>Coding Challenges</h3>
            <p>
                Users 
            </p>
            <hr/>
            <h2>Inspirations:</h2>
            <p>This site combines different aspects from many of my favorite applications to create a unique learning experience.</p>
            <div className="display-grid">
              <div className="display-grid-cell">
                <h3>Quizlet</h3>
                <p>Similar tycoon-style gameplay, and its the namesake!</p>
              </div>
              <div className="display-grid-cell">
                <h3>Make it Rain!</h3>
                <p>Similar tycoon-style gameplay, and its the namesake!</p>
              </div>
              <div className="display-grid-cell">
                <h3>Gimkit</h3>
                <p>Similar tycoon-style gameplay, and its the namesake!</p>
              </div>
              <div className="display-grid-cell">
                <h3>Duolingo</h3>
                <p>Similar tycoon-style gameplay, and its the namesake!</p>
              </div>
              <div className="display-grid-cell">
                <h3>SoloLearn</h3>
                <p>
                  I used this module-based site frequently when learning how to code. It features 
                  interactive flashcard-style questions as well coding challenges.
                </p>
              </div>
              <div className="display-grid-cell">
                <h3>Submitty</h3>
                <p>
                  This site always inspires my projects in one way or another. I'm going to use the multi-language 
                  backend where one is for general stuff and the other is for workers like Submitty does.
                </p>
              </div>
              <div className="display-grid-cell">
                <h3>Geometry Dash</h3>
                <p>Scrolling between languages to play will be similar to scrolling between levels in this game.</p>
              </div>
              <div className="display-grid-cell">
                <h3>Cookie Clicker</h3>
                <p>Similar tycoon-style gameplay, and its the namesake!</p>
              </div>
            </div>
            <hr/>
            <h2>Implementation</h2>
            <p>
                There is much to consider with this project. How large do I want to scale the MVP? Should I 
                integrate AI? What will deployment look like? 
            </p>
            <hr/>
            <p>
              Once again, if you have any input, please reach out. Stay tuned, I will be updating 
              this page as I progress the project!
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