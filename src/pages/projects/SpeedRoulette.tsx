import TextContentPage from '../../components/TextContentPage.tsx';

import TechStack from '../../components/TechStack.tsx';
import NavButton from '../../components/NavButton.tsx';
import useNavigateTop from '../../hooks/useNavigateTop.ts';
import TextContentHeader from '../../components/TextContentHeader.tsx';

import srLogo from '../../assets/sr-logo.svg';
import javafxProject from '../../assets/javafx-project.png';
import srStoryboardDark from '../../assets/sr-storyboard-dark-mode.png';
import srHomePageDark from '../../assets/sr-home-dark-mode.png';
import srDeploymentDay from '../../assets/sr-deployment-day.png';
import srGameplay from '../../assets/sr-gameplay.png';
import srGrid from '../../assets/srGrid.png';

export default function SpeedRoulette() {
    const navigateTop = useNavigateTop();

    return (
        <TextContentPage
            header={
                <TextContentHeader
                    title="Speed Roulette"
                    siteImg={srLogo}
                    siteLink="https://speedroulette.io/"
                    ghLink="https://github.com/JManion32/speed-roulette"
                />
            }
            navButton={
                <NavButton left="Submitty" leftNav="/projects/submitty" right="CChat" rightNav="/projects/cchat" />
            }
            preview={
                <>
                    <p>
                        Inspired by the intensity of speed chess, Speed Roulette puts a fast-paced twist on the beloved
                        high-stakes casino game. Players start with 20 dollars, 10 possible spins, and just 60 seconds
                        on the clock. When bets are submitted, the winning number is revealed, earnings are paid out,
                        and the clock is back to ticking just 2.5 seconds later. Compete for a spot on the leaderboard
                        by making quick decisions, taking bold risks, and hitting big payouts!
                    </p>
                    <div id="content-img-container">
                        <img src={srGameplay} className="project-img" />
                    </div>
                    <hr />
                    <h2>Tech Stack</h2>
                    <TechStack
                        sections={[
                            {
                                title: 'Front-end',
                                items: [
                                    { name: 'Vite', className: 'vite' },
                                    { name: 'React', className: 'react' },
                                    { name: 'TypeScript', className: 'ts' },
                                    { name: 'Tailwind CSS', className: 'tailwind' },
                                ],
                            },
                            {
                                title: 'Backend & Storage',
                                items: [
                                    { name: 'Go', className: 'go' },
                                    { name: 'PostgreSQL', className: 'postgres' },
                                    { name: 'Redis', className: 'redis' },
                                ],
                            },
                            {
                                title: 'Infrastructure',
                                items: [
                                    { name: 'Docker', className: 'docker' },
                                    { name: 'DigitalOcean', className: 'digitalocean' },
                                    { name: 'AWS Route 53', className: 'route53' },
                                    { name: 'Nginx', className: 'nginx' },
                                    { name: 'Certbot', className: 'certbot' },
                                ],
                            },
                            {
                                title: 'Tooling / Dev Dependencies',
                                items: [
                                    { name: 'ESLint', className: 'eslint' },
                                    { name: 'Stylelint', className: 'stylelint' },
                                    { name: 'Prettier', className: 'prettier' },
                                    { name: 'Cypress', className: 'cypress' },
                                    { name: 'GolangCI-Lint', className: 'golangci' },
                                    { name: 'gofmt', className: 'gofmt' },
                                    { name: 'go test', className: 'gotest' },
                                ],
                            },
                        ]}
                    />
                </>
            }
            main={
                <>
                    <hr />
                    <h2>Planning</h2>
                    <p>
                        The idea of building an online roulette game dates back to 2023 when the only programming
                        language I knew was Java:
                    </p>
                    <div id="content-img-container">
                        <img src={javafxProject} />
                    </div>
                    <p>
                        This was a GUI I built with JavaFX and the skills I had learned at{' '}
                        <a onClick={() => navigateTop('/experience/HudsonValley')}>Hudson Valley</a>. It was limited in
                        functionality, and ran from a single 3,000 line file.
                    </p>

                    <p>
                        The lightbulb went off on February 21st, 2025. I had been seeing a lot of speed chess content in
                        my YouTube feed and I thought, this would be really cool to combine with roulette! I started by
                        creating a full storyboard in light and dark mode, figuring out the tech stack, and defining the
                        rules of the game. After a few weeks, it was time to push the analysis paralysis aside and dive
                        into the implementation.
                    </p>
                    <hr />
                    <h2>Implementation</h2>
                    <p>With the complete storyboard, it was easy to build out the UI.</p>
                    <div id="content-img-container">
                        <img src={srStoryboardDark} />
                        <p>Storyboard</p>
                        <img src={srHomePageDark} />
                        <p>Implementation</p>
                    </div>
                    <p>
                        Next, I moved to the backend, which introduced more complexity. I started by creating endpoints,
                        and handling the core game logic. I then integrated Postgres to manage the leaderboard and
                        statistics, and Redis for caching user tokens and validating balances. Finally, I dockerized the
                        entire system to bring all the components together for smooth deployment and developer
                        experience.
                    </p>
                    <hr />
                    <h2>Features</h2>
                    <h3>Docker</h3>
                    <p>
                        Project is fully dockerized, and split into 4 containers:
                        <ul>
                            <li>Front-end</li>
                            <li>Backend</li>
                            <li>Postgres (Database)</li>
                            <li>Redis (Caching)</li>
                        </ul>
                    </p>
                    <h3>Continuous Integration Pipeline</h3>
                    <p>
                        Extensive CI pipeline that includes:
                        <ul>
                            <li>Linters / Formatters</li>
                            <li>Build Tests</li>
                            <li>Go Unit Tests</li>
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
                        My personal favorite page. Just like the leaderboard, it features Daily, Weekly, Monthly, and
                        All-Time stats. Displays:
                        <ul>
                            <li>Total Spins</li>
                            <li>Games Completed</li>
                            <li>Total Won</li>
                            <li>7 Hottest / 7 Coldest Numbers</li>
                            <li>
                                Visualization of all the winning number stats (Red/Black/Green, Even/Odd/Other, etc.)
                            </li>
                        </ul>
                    </p>
                    <hr />
                    <h2>Technical Challenges</h2>
                    <h3>New Technologies</h3>
                    <p>
                        When I started this project, I don't think I knew a single tool in the tech stack I was planning
                        to use. Not one. Something that helped me along the way was ChatGPT, though not as you might
                        expect. Whenever I was doing a task with low cognitive load, I utilized the voice feature, and
                        would have conversations with the AI agent about things I was unfamiliar with. These
                        conversations helped me reason through blockers, and learn even when I wasn't at my desk.
                    </p>
                    <h3>Grid layout</h3>
                    <p>
                        My original JavaFX GUI did not allow the user to place a bet between table cells (e.g., 7 and
                        10). To address that here, I created a table of the roulette board, then overlayed CSS grids on
                        top of it.
                    </p>
                    <div id="content-img-container">
                        <img src={srGrid} className="project-img" />
                    </div>
                    <p>
                        After overlaying the grid onto the table, the next challenge was handling bets on the backend. I
                        identified patterns in the grid that allowed me to design solid logic, though a few off-by-one
                        errors appeared when setting up unit tests. These have since been addressed, and I have no plans
                        to revisit this code. As the saying goes, <i>“If it ain’t broke, don’t fix it.”</i>
                    </p>
                    <h3>Security</h3>
                    <p>Although Speed Roulette does not handle any sensitive user data, security was a top priority.</p>
                    <ul id="security-list">
                        <li>
                            <p>
                                <b>Rate Limiting:</b> All endpoints are rate limited to prevent spam, abuse, and server
                                overload.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>User Tokens:</b> Generated each time the user clicks start and cached using Redis.
                                Must accompany each request to the backend and is renewed after each game. Expires after
                                three minutes.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>Data Validation:</b> The backend validates each request to ensure the bet amount is
                                less than or equal to the previous user balance.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>Name Filter:</b> Utilized multiple JavaScript libraries to filter nicknames.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>Privacy Policy:</b> Outlines how user data is handled, ensuring transparency and
                                protection for both the site owner and visitors.
                            </p>
                        </li>
                    </ul>
                    <p>
                        Despite these precautions, there was a crucial vulnerability that didn’t reveal itself until a
                        week after deployment, when a user reported they were unable to start a game. I rebooted the
                        server, and the site came back online… for about five minutes. After another reboot, the same
                        problem occurred. I rebooted the once more, this time running my Docker containers with the live
                        feed while I tested the site to see if I could trigger anything. After several minutes, I
                        thought it may have resolved, until I looked at the feed:
                    </p>
                    <p>
                        <b>pkill pkill pkill pkill pkill</b>
                    </p>
                    <p>
                        A malicious script had found its way onto my server and hundreds of commands were just executed!
                        But how?
                    </p>
                    <p>
                        The root cause was a misconfigured Docker Compose file. The malware, which seems to be common,
                        exploits vulnerabilities in Linux servers and cloud-native environments, and attempts to kill
                        all processes to maximize resources for minin cryptocurrency. It gained access to my Docker
                        files because I had forgotten to bind the backend, database, and caching ports to localhost.
                        This left them exposed to the open internet, and rendered my reverse proxy useless. After
                        addressing this, reviewing and tightening a few other configurations, and migrating everything
                        to a fresh DigitalOcean droplet, order has been restored!
                    </p>
                    <hr />
                    <h2>Reflection</h2>
                    <p>
                        This project was the spark that ignited my true passion for programming. I learned, I built, and
                        I deployed a fun project that turned a simple idea into a real application people could use.
                    </p>
                    <div id="content-img-container">
                        <img src={srDeploymentDay} />
                        <p>Very special thank you to Geoff and Kaitlyn for making my deployment day so special!</p>
                    </div>
                </>
            }
        />
    );
}
