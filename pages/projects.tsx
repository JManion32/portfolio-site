import PreviewCard from '../components/PreviewCard';
import NavButton from '../components/NavButton';

import submittyDuck from '../assets/submitty_duck.png';
import srPreview from '../assets/sr-preview.png';
import chatLogo from '../assets/secure_chat_logo.svg';
import psoftLogo from '../assets/psoft-logo.png';
import ssLogo from '../assets/ss.svg';
import cookieCoder from '../assets/cookie_coder_logo.svg';
import jmLogo from '../assets/jm-dark-circle.png';

function Projects() {
  return (
    <>
      <div className="page">
        <div className="content">
            <div className="main-fly-in-bottom">
              <h1 className="main-page-header">Projects</h1>
              <p className="main-page-desc">Click on a project to learn more!</p> 
            </div>
            <div className="project-grid">
                <PreviewCard
                    img= {submittyDuck}
                    header= "Submitty"
                    desc= "Rensselaer Polytechnic Institute's open source homework submission server for computer science courses."
                    nav= "/projects/submitty"
                    animation= "main-fly-in-bottom-1"
                />
                <PreviewCard
                    img= {srPreview}
                    header= "Speed Roulette"
                    desc= "A fast-paced browser game that puts an exciting twist on classic casino roulette."
                    nav= "/projects/speedroulette"
                    animation= "main-fly-in-bottom-2"
                />
                <PreviewCard
                    img= {chatLogo}
                    header= "Secure Chatroom"
                    desc= "Encrypted chatroom supporting multiple users, real-time updates, and a reward system."
                    nav= "/projects/securechatroom"
                    animation= "main-fly-in-bottom-3"
                />
                <PreviewCard
                    img= {psoftLogo}
                    header= "Course Website"
                    desc= "Course website for Principles of Software, a core computer science class at Rensselaer Polytechnic Institute."
                    nav= "/projects/psoft"
                    animation= "main-fly-in-bottom-4"
                />
                <PreviewCard
                    img= {ssLogo}
                    header= "Super Strikers"
                    desc= "A 2D, fast-paced, multiplayer browser game that combines soccer and air hockey. Play against real opponents, outscoring them to win."
                    nav= "/projects/superstrikers"
                    animation= "main-fly-in-bottom-5"
                />
                <PreviewCard
                    img= {cookieCoder}
                    header= "Cookie Coder"
                    desc= "Combining coding lessons with tycoon-style gameplay to facilitate learning through repetition."
                    nav= "/projects/cookiecoder"
                    animation= "main-fly-in-bottom-6"
                />
                <PreviewCard
                    img= {jmLogo}
                    header= "Portfolio Site"
                    desc= "Website to showcase my projects and experience."
                    nav= "/projects/portfolio"
                    animation= "main-fly-in-bottom-7"
                />
            </div>
        </div>
        <NavButton
          left="Home" leftNav="/"
          right="Experience" rightNav="/experience"
        />
      </div>
    </>
  );
}

export default Projects;