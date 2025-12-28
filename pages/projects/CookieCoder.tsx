/*
import { useState } from 'react';
import ReadMoreBtn from '../../components/ReadMoreBtn.tsx'

const [readMore, setReadMore] = useState(false);

<div className={`${readMore ? '' : 'hide-read-more-container'}`}>

<ReadMoreBtn
  readMore={readMore}
  setReadMore={setReadMore}
/>
*/


import { useState } from 'react';
import ReadMoreBtn from '../../components/ReadMoreBtn.tsx'

import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';

import TechStack from "../../components/TechStack";
import useNavigateTop from "../../hooks/useNavigateTop";

import quizletLogo from '../../assets/quizlet-logo.webp';
import makeItRain from '../../assets/make-it-rain.jpg';
import gimkit from '../../assets/gimkit-logo.jpg';
import duolingo from '../../assets/duolingo-logo.webp';
import sololearn from '../../assets/sololearn-logo.png';
import submittyDuck from '../../assets/submitty_duck.png';
import geometryDash from '../../assets/geometry-dash.png';
import cookieClicker from '../../assets/clicker-cookie.webp';

function CookieCoder() {
  const navigateTop = useNavigateTop();
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">Cookie Coder</h1>
          </div>
          <div id="text-body">
            <p>
                This project is currently in its planning stages. If you have any input, please reach out!
            </p>
            <p>
                Cookie Coder is the site I wish I had when I first started learning to code. It will 
                support a wide range of languages—Python, Java, C++, JavaScript, PHP, SQL, and more—and 
                take a fresh approach to traditional module-based learning. Instead of rigid lessons, 
                users will work through a massive pool of interactive, flashcard-style questions. Each 
                correct answer earns “bits,” an in-game currency that tracks progress and ranks players 
                on global leaderboards. The more bits a user collects, the larger their question pool 
                grows, and the more difficult they become.
            </p>
            <hr/>
            <h2>Tentative Tech Stack</h2>
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
                    title: "Backend & Storage",
                    items: [
                    { name: "Go", className: "go" },
                    { name: "Node.js", className: "nodejs" },
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
                Learning is continuous, occurring over time. Think about studying 
                for an exam. Cramming all the material the night before <b>does not work</b>. It is far more effective 
                to study multiple times over a week. In the same way, learning a programming language isn't 
                possible from just a single online course. A foundation of knowledge needs to be established, and 
                reinforced with repetition. This is what Cookie Coder aims to do through <i>fluid</i> modular learning.
            </p>
            <div className={`${readMore ? '' : 'hide-read-more-container'}`}>
              <h3>Interactive Flashcard-Style Questions</h3>
              <p>
                  The standard gamplay. These questions will be simple (multiple choice, true/false, fill in the blank, etc), 
                  enabling the user to rapid-fire cycle through them. 
                  For each programming language, the user will start with 300 of these questions and accumulate more, higher level 
                  ones as they advance in the game. Rather than having set modules, questions will be pulled from a pool, and 
                  their frequency will be determined by how many bits the user has.
              </p>
              <h3>Coding Challenges</h3>
              <p>
                  After accumulating bits, the user will be able to risk them on coding challenges. They will face an open-ended question 
                  and have to write code that passes all test cases before the timer runs out. Each correct answer will double their winnings, 
                  but if they fail, they lose it all!
              </p>
              <hr/>
              <h2>Inspirations:</h2>
              <p>This site will combine many of my favorite applications to create a unique learning experience.</p>
              <div className="display-grid">
                <div className="display-grid-cell">
                  <img
                    src={quizletLogo}
                  />
                  <h3>Quizlet</h3>
                  <p>
                    The cornerstone of my studies. The reptition it offers has prepared me 
                    for countless exams throughout college.
                  </p>
                </div>
                <div className="display-grid-cell">
                  <img
                    src={makeItRain}
                  />
                  <h3>Make it Rain!</h3>
                  <p>
                    Features repetitive tycoon gameplay, as well as a risk component where 
                    users have to solve puzzles to multiply their earnings. Growing up, I spent hundreds 
                    of hours playing this.
                  </p>
                </div>
                <div className="display-grid-cell">
                  <img
                    src={gimkit}
                  />
                  <h3>Gimkit</h3>
                  <p>
                    If you haven't heard of this site, I would describe it as competitive flashcards. 
                    We used to play this a lot in high school, and its interactive tycoon gameplay 
                    made learning fun and effective.
                  </p>
                </div>
                <div className="display-grid-cell">
                  <img
                    src={duolingo}
                  />
                  <h3>Duolingo</h3>
                  <p>Proof that modular learning with repetition is effective and marketable.</p>
                </div>
                <div className="display-grid-cell">
                  <img
                    src={sololearn}
                  />
                  <h3>SoloLearn</h3>
                  <p>
                    This was my go-to website when I was learning how to code. It features 
                    interactive flashcard-style questions as well as coding challenges.
                  </p>
                </div>
                <div className="display-grid-cell">
                  <img
                    src={submittyDuck}
                  />
                  <h3>Submitty</h3>
                  <p>
                    This always inspires my projects in one way or another. I plan to adopt a similar multi-language backend architecture 
                    where one language is for general application logic and the other is dedicated to worker processes.
                  </p>
                </div>
                <div className="display-grid-cell">
                  <img
                    src={geometryDash}
                  />
                  <h3>Geometry Dash</h3>
                  <p>I like the menu where the user chooses between levels. I imagine Cookie Coder's menu will be similar.</p>
                </div>
                <div className="display-grid-cell">
                  <img
                    src={cookieClicker}
                  />
                  <h3>Cookie Clicker</h3>
                  <p>An internet classic. Features tycoon gameplay, and its the namesake!</p>
                </div>
              </div>
              <hr/>
              <h2>Implementation</h2>
              <p>
                  There is much to consider with this project. How large do I want to scale the MVP? Should I 
                  integrate AI? What will deployment look like? For now, I am going to stick to the core question 
                  structure, tycoon gameplay, and leaderboard integration. With this, I can gauge interest, and decide 
                  where to go next.
              </p>
              <p>
                As for the technologies I plan to use, they are similar to <a onClick={() => navigateTop("/projects/speedroulette")}>Speed Roulette</a>, 
                but with a few exceptions. I'm no longer a fan of Tailwind and Bootstrap, so I am going to just use vanilla CSS. I’ve also decided to use 
                two backend languages: Node.js for handling general application logic and Go for performance-critical worker processes. Lastly, I'm saying 
                goodbye to Digital Ocean in favor of AWS since this will be a more complex application, and I need the experience.
              </p>
              <hr/>
              <p>
                Once again, if you have any input, please reach out. Stay tuned, I will be updating 
                this page as I progress the project!
              </p>
            </div>
          </div>
          <ReadMoreBtn
            readMore={readMore}
            setReadMore={setReadMore}
          />
        </div>
        <NavButton
          right="Speed Roulette" rightNav="/projects/speedroulette"
        />
      </div>
    </>
  );
}

export default CookieCoder;