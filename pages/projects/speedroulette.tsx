import Breadcrumbs from '../../components/Breadcrumb';
import TechStack from "../../components/TechStack";
import NavButton from '../../components/NavButton';

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
              <img src="../../assets/sr-logo.svg" className="contact-image"/>
            </button>
            <button 
              className="contact-button project-contact-btn"
              onClick={() => window.open('https://github.com/JManion32/speed-roulette', '_blank')}
              >
              <div className="github-image-wrapper">
                  <img src="../../assets/github-mark.png" className="github-image light" />
                  <img src="../../assets/github-mark-white.png" className="github-image dark" />
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
            <div className="content-img-container">
              <img src="../../assets/javafx-roulette.png" className="content-img"/>
            </div>
            <p>
              This was just a GUI I built using my knowledge from Programming and Data Logic 2 at Hudson Valley. It was limited 
              in functionality, and had a very bloated codebase (I didn't yet know how to utilize OOP). I knew I wanted to create 
              something more. Something I was proud of. Something I could enjoy with my friends.
            </p>
              
            <p>
              For awhile, I considered just refining what I had already built. After taking Data Structures at RPI, I refactored the
              codebase and brought the line count down from ~3,000 to ~1,000. At this point, I still didn't know enough about development 
              to understand that I could not make a website using JavaFX. It wasn't until I joined Submitty in January 2025 that I 
              was exposed to web technologies.
            </p>

            <p>
              The lightbulb went off on February 21st, 2025. I had been getting a lot of speed chess content in my YouTube feed and I thought, this 
              would be really cool to combine with roulette! Being halfway through my semester and having a limited skillset, I decided to take 
              my time in the planning phase. I created a full storyboard of all pages of the site, figured out my tech stack, and refined the 
              rules of the game. After a few weeks, I go sick of the analysis paralysis and dove into the implementation.
            </p>
            <hr/>
            <h2>Implementation</h2>
            <p>With the complete storyboard, it was easy to build out the UI.</p>
            <div className="content-img-container">
              <img src="../../assets/sr-storyboard-dark-mode.png" className="content-img"/>
              <img src="../../assets/sr-home-dark-mode.png" className="content-img"/>
            </div>
            <p>
              I then moved to the backend, which would be a bit more complex.
            </p>
            <hr/>
            <h2>Technical Challenges</h2>

            <h3>1. New Technologies</h3>
            <p>
              When I started this project, I don't think I knew a single tool in the tech stack I was planning to use. Not one. 
              It was quite overwhelming to say the least, and a mental battle from start to finish.
            </p>
            <h3>2. Grid layout</h3>
            <p>
              One issue in my original JavaFX GUI was that the user could not place a bet in between table cells (e.g., 7 and 10).
              To address that here, I created a table of the entire roulette board, and then overlayed CSS grids on top of it. This 
              took many hours to perfect, but the final product was well worth it.

            </p>
            <h3>3. Deployment</h3>
            <p>
              Out of all the blockers I had to work through on this project, deployment was by far the most time consuming. 
              Of course, this was my first time deploying anything so there was an inevitable learning curve, but that wasn't 
              the primary issue. I was using AWS, which, for a new developer's personal project, is not a good fit.
            </p>
            <h3>4. Security</h3>
            <p>
              Although I am not handling any sensitive user data, I wanted to make sure that security was one of my priorities, especially 
              since I didn't have much experience in that area. Some of the security related features I made include:
            </p>
            <ul id="security-list">
              <li><p>
                <b>Rate Limiting:</b> All pages of my site are rate limited to prevent spam, abuse, and server overload.
              </p></li>
              <li><p>
                <b>User Tokens:</b> Generated each time the user presses start. Accompanies each request to the backend and expires after 3 minutes.
              </p></li>
              <li><p>
                <b>Data Validation:</b> The backend validates each request to ensure the bet amount is less than or equal to the previous user balance.
              </p></li>
              <li><p>
                <b>Name Filter:</b> Utilized multiple JavaScript libraries to prevent bad words from using explicit language in their nicknames.
              </p></li>
              <li><p>
                <b>Privacy Policy:</b> Outlines how user data is handled, ensuring transparency and protection for both the site owner and visitors.
              </p></li>
            </ul>
            <p>
              With all the precautions I took, I still left a crucial vulnerability that didn't reveal itself until a week after deployment, when one 
              of my users was unable to start a game. I didn't think much of it, so I rebooted the server. The site was back and working better than ever... 
              For 5 minutes. After another reboot, same problem I had to dig deeper. I decided to reboot my server once more, then run my Docker containers with the live feed while 
              I messed around with the site to see if I could spot anything. After several minutes of testing, I thought the the third reboot might have done the charm, until I saw 
              a horrific site on my live feed:
            </p>
            <p><b>pkill pkill pkill pkill pkill</b></p>
            <p>
              A malicious script had found its way onto my server! But how? Well, thats how I spent the next 6 hours of my life figuring out. 
            </p>
            <hr/>
            <h2>Reflection</h2>
            <p>
              Although this project was created only this year, I strongly believe it was the spark that ignited my real passion for programming. 
              Before Speed Roulette, most of my work was done out of requirement, rather than genuine enjoyment. I have enjoyed every step of the 
              process, and this feeling is now shared through my other projects as well. Being the sole architect of a 25,000+ line code base gives me 
              a unique sense of accomplishment I've never quite felt before. I'm so excited to build more projects, and continue to level up as a developer.
            </p>
            <div className="content-img-container">
              <img src="../../assets/sr-deployment-day.png" className="project-img"/>
              <p className="content-img-desc">Very special thank you to Geoff and Kaitlyn for making my deployment day so special!</p>
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