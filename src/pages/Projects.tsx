import PreviewPage from '../components/PreviewPage.tsx';
import PreviewCard from '../components/PreviewCard';
import NavButton from '../components/NavButton';

import submittyDuck from '../assets/submitty_duck.png';
import srPreview from '../assets/sr-preview.png';
import chatLogo from '../assets/cchat-logo.svg';
import psoftLogo from '../assets/psoft-logo.png';
import ssLogo from '../assets/ss.svg';
import cookieCoder from '../assets/cookie_coder_logo.svg';
import jmLogo from '../assets/jm-dark-circle.png';

function Projects() {
    return (
        <>
            <PreviewPage
                header="Projects"
                desc="Click on a project to learn more!"
                navButton={<NavButton left="Home" leftNav="/" right="Experience" rightNav="/experience" />}
                grid={
                    <>
                        <PreviewCard
                            img={submittyDuck}
                            header="Submitty"
                            desc="Rensselaer Polytechnic Institute's open source homework submission server for computer science courses."
                            nav="/projects/submitty"
                            rank="1"
                        />
                        <PreviewCard
                            img={srPreview}
                            header="Speed Roulette"
                            desc="A fast-paced browser game that puts an exciting twist on classic casino roulette."
                            nav="/projects/speedroulette"
                            rank="2"
                        />
                        <PreviewCard
                            img={chatLogo}
                            header="CChat"
                            desc="A real-time, cross-platform chat application that supports web and GUI clients."
                            nav="/projects/cchat"
                            rank="3"
                        />
                        <PreviewCard
                            img={psoftLogo}
                            header="Course Website"
                            desc="Course website for Principles of Software, a core computer science class at Rensselaer Polytechnic Institute."
                            nav="/projects/psoft"
                            rank="4"
                        />
                        <PreviewCard
                            img={ssLogo}
                            header="Super Strikers"
                            desc="A 2D, fast-paced, multiplayer browser game that combines soccer and air hockey."
                            nav="/projects/superstrikers"
                            rank="5"
                        />
                        <PreviewCard
                            img={cookieCoder}
                            header="Cookie Coder"
                            desc="Combining coding lessons with tycoon-style gameplay to facilitate learning through repetition."
                            nav="/projects/cookiecoder"
                            rank="6"
                        />
                        <PreviewCard
                            img={jmLogo}
                            header="Portfolio Site"
                            desc="Website to showcase my projects and experience."
                            nav="/projects/portfolio"
                            rank="7"
                        />
                    </>
                }
            />
        </>
    );
}

export default Projects;
