import Breadcrumbs from '../../components/Breadcrumb';
import TechStack from "../../components/TechStack";
import NavButton from '../../components/NavButton';

import srLogo from '../../assets/sr-logo.svg';
import githubLight from '../../assets/github-mark.png';
import githubDark from '../../assets/github-mark-white.png';
import javafxProject from '../../assets/javafx-project.png';
import srStoryboardDark from '../../assets/sr-storyboard-dark-mode.png';
import srHomePageDark from '../../assets/sr-home-dark-mode.png';
import srDeploymentDay from '../../assets/sr-deployment-day.png';
import srGrid from '../../assets/srGrid.png';

function SpeedRoulette() {
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">Speed Roulette</h1>
            <button 
              className="contact-button project-contact-btn"
              onClick={() => window.open('https://speedroulette.io/', '_blank')}
              >
              <img src={srLogo} className="contact-image"/>
            </button>
            <button 
              className="contact-button project-contact-btn"
              onClick={() => window.open('https://github.com/JManion32/speed-roulette', '_blank')}
              >
              <div className="github-image-wrapper">
                  <img src={githubLight} className="github-image light" />
                  <img src={githubDark} className="github-image dark" />
              </div>
            </button>
          </div>
          <div id="text-body">
            <p>
              Inspired by the intensity of speed chess, Speed Roulette puts an interesting twist on the beloved 
              high-stakes casino game. Players start with 20 dollars, 10 possible spins, and just 60 seconds on the 
              clock. When bets are submitted, the winning number is revealed, earnings are paid out, and the clock 
              starts ticking again 2.5 seconds later. Compete for a spot on the daily leaderboard by making quick 
              decisions, taking bold risks, and hitting big payouts.
            </p>
            <hr/>
            <TechStack
              sections={[
                {
                  title: "Frontend",
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
                    { name: "Go", className: "go" }
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
            <h2>Planning</h2>
            <p>The idea of building an online roulette game dates back to 2023 when the only programming language I knew was Java:</p>
            <div id="content-img-container">
              <img src={javafxProject}/>
            </div>
            <p>
              This was a GUI I built using JavaFX and what I had learned at Hudson Valley. It was limited 
              in functionality, and had a bloated codebase (I didn't yet know how to use object oriented programming). 
              I knew I wanted to create something more. Something I was proud of. Something I could enjoy with my friends.
            </p>
              
            <p>
              For awhile, I considered just refining what I had already built. After taking Data Structures at RPI, I refactored the
              codebase to use OOP, bringing the line count down from ~3,000 to ~1,000. At the time, I didn’t recognize that 
              JavaFX wasn’t suitable for building websites. My perspective shifted in January 2025, when joining Submitty gave me my first real exposure to web technologies.
            </p>

            <p>
              The lightbulb went off on February 21st, 2025. I had been seeing a lot of speed chess content in my YouTube feed and I thought, this 
              would be really cool to combine with roulette! Being halfway through my semester and having a limited skillset, I decided to take 
              my time in the planning phase. I created a full storyboard of all pages of the site, figured out my tech stack, and refined the 
              rules of the game. After a few weeks, it was time to push the analysis paralysis aside and dive into the implementation.
            </p>
            <hr/>
            <h2>Implementation</h2>
            <p>With the complete storyboard, it was easy to build out the UI.</p>
            <div id="content-img-container">
              <img src={srStoryboardDark}/>
              <p>Storyboard</p>
              <img src={srHomePageDark}/>
              <p>Implementation</p>
            </div>
            <p>
              Next, I moved to the backend, which introduced more complexity. I began by building the API to handle the core game logic 
              and get it to a playable state. I then integrated Postgres to manage the leaderboard and statistics, and added Redis for caching 
              user tokens and validating balances. Finally, I dockerized the entire system to bring all the components together for smooth deployment.
            </p>
            <hr/>
            <h2>Features</h2>
            <h3>Docker</h3>
            <p>
              Project is fully dockerized, and split into 4 containers:
              <ul>
                <li>Frontend</li>
                <li>Backend</li>
                <li>Postgres (Database)</li>
                <li>Redis (Caching)</li>
              </ul>
            </p>
            <h3>CI Pipeline</h3>
            <p>
              Extensive CI pipeline that includes:
              <ul>
                <li>Linters / Formatters</li>
                <li>Backend Unit Tests</li>
                <li>E2E Cypress Tests</li>
              </ul>
            </p>
            <h3>Dark Mode Toggle</h3>
            <p>
              Found in the top right of every page on the site. All UI components transition in a smooth 0.2s.
            </p>
            <h3>Leaderboard Page</h3>
              <p>
                Daily, Weekly, Monthly, and All-Time leaderboard. Displays:
                <ul>
                  <li>Rank</li>
                  <li>Nickname</li>
                  <li>Final Balance</li>
                  <li>Time and Spins Used</li>
                  <li>Date and time</li>
                </ul>
              </p>
            <h3>Site Statistics Page</h3>
            <p>
              My personal favorite page. Just like the leaderboard, it features Daily, Weekly, Monthly, and All-Time stats. 
              Displays:
              <ul>
                <li>Total Spins</li>
                <li>Games Completed</li>
                <li>Total Won</li>
                <li>7 Hottest / 7 Coldest Numbers</li>
                <li>A graphs for all the winning number stats (Red/Black/Green, Even/Odd/Other, etc)</li>
              </ul>
            </p>
            <hr/>
            <h2>Technical Challenges</h2>
            <h3>New Technologies</h3>
            <p>
              When I started this project, I don't think I knew a single tool in the tech stack I was planning to use. Not one. 
              It was quite overwhelming to say the least, and a mental battle from start to finish. Something that significantly 
              helped me along the way was ChatGPT, though not as you might expect. Whenever I was driving for more that 10 minutes, 
              I utilized the voice feature, and would have conversations with the AI agent about things I was unfamiliar with. These 
              conversations were invaluable for learning, pushing through blockers, and planning what I needed to do next.
            </p>
            <p>
              While challenging at first, learning all of these technologies has given me a well rounded skillset that I have been 
              able to use for Submitty, and other projects.
            </p>
            <h3>Grid layout</h3>
            <p>
              One issue in my original JavaFX GUI was that the user could not place a bet in between table cells (e.g., 7 and 10).
              To address that here, I created a table of the entire roulette board, then overlayed CSS grids on top of it.
            </p>
            <div id="content-img-container">
              <img src={srGrid} className="project-img"/>
            </div>
            <p>
              After overlaying the grid onto the table, the next challenge became handling bets on the backend. I identified 
              patterns in the grid that allowed me to design solid logic, though a few off-by-one errors appeared after deployment. 
              Once those were addressed, the code reached a stable state, and is now the one part of the project I have no plans to revisit. 
              As the saying goes, <i>“If it ain’t broke, don’t fix it.”</i>
            </p>
            <h3>Deployment</h3>
            <p>
              Deployment turned out to be the most time-consuming challenge of the project. Since it was my first time, there 
              was an inevitable learning curve, but the larger issue was choosing the right platform. I initially experimented 
              with AWS, but the challenge of identifying the right services from hundreds of options and then configuring them to work together 
              made it impractical for a personal project. Ultimately, I switched to DigitalOcean, which provided a much 
              simpler experience, especially since my project is dockerized.
            </p>
            <h3>Security</h3>
            <p>
              Although Speed Roulette does not handle any sensitive user data, I wanted to make sure that security was one of my top priorities, especially 
              since I didn't have much experience in that area. Some of the security related features I added include:
            </p>
            <ul id="security-list">
              <li><p>
                <b>Rate Limiting:</b> All pages of my site are rate limited to prevent spam, abuse, and server overload.
              </p></li>
              <li><p>
                <b>User Tokens:</b> Generated each time the user presses start and cached using Redis. Must accompany each request to the backend and expires after 3 minutes.
              </p></li>
              <li><p>
                <b>Data Validation:</b> The backend validates each request to ensure the bet amount is less than or equal to the previous user balance.
              </p></li>
              <li><p>
                <b>Name Filter:</b> Utilized multiple JavaScript libraries to prevent explicit nicknames.
              </p></li>
              <li><p>
                <b>Privacy Policy:</b> Outlines how user data is handled, ensuring transparency and protection for both the site owner and visitors.
              </p></li>
            </ul>
            <p>
              With all the precautions I took, I still left a crucial vulnerability that didn’t reveal itself until a week after deployment, when a user reported they were unable to start a game. 
              I didn’t think much of it at first and simply rebooted the server. The site came back and was stable… for about five minutes. After another reboot, the same problem occurred. 
              I rebooted the server once more, this time running my Docker containers with the live feed while I tested the site to see if I could spot anything. After several minutes, 
              I thought the third reboot might have finally done the trick. That's when I saw a horrific sight on the feed:
            </p>
            <p><b>pkill pkill pkill pkill pkill</b></p>
            <p>
              A malicious script had found its way onto my server and hundreds of commands were just executed! But how? I spent the next 6 hours figuring it out.
            </p>
            <p>
              The root cause turned out to be a simple misconfiguration in my Docker Compose file. The malware, known as <code>Kinsing</code>, exploits vulnerabilities 
              in Linux servers and cloud-native environments, then killing all processes to maximize resources for mining cryptocurrency. It gained access to my Docker files because, 
              although most of my setup was correct, I had forgotten to bind the backend, database, and caching ports to localhost. This left them exposed to the open internet, and 
              rendered my reverse proxy useless. After addressing this, reviewing and tightening a few other configurations, and migrating everything to a 
              fresh DigitalOcean droplet, I haven’t run into any issues since!
            </p>
            <hr/>
            <h2>Reflection</h2>
            <p>
              Although this project was created only this year, I truly believe it was the spark that ignited my real passion for programming. Being 
              the sole architect of a 25,000+ line codebase gave me a unique sense of accomplishment I’d never felt before. Prior to Speed Roulette, 
              most of my work was driven by requirement rather than genuine enjoyment. I’ve enjoyed every step of building it, and that same excitement 
              now carries over into my other projects. I’m excited to keep building and continue leveling up as a developer.
            </p>
            <div id="content-img-container">
              <img src={srDeploymentDay}/>
              <p>Very special thank you to Geoff and Kaitlyn for making my deployment day so special!</p>
            </div>
          </div>
        </div>
        <NavButton
          right="Submitty" rightNav="/projects/submitty"
        />
      </div>
    </>
  );
}

export default SpeedRoulette;