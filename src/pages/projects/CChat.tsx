import { useState } from 'react';
import ReadMoreBtn from '../../components/ReadMoreBtn.tsx'
import Breadcrumbs from '../../components/Breadcrumb.tsx';
import NavButton from '../../components/NavButton.tsx';
import ComingSoon from '../../components/ComingSoon.tsx';
import TechStack from "../../components/TechStack.tsx";

import githubLight from '../../assets/github-mark.png';
import githubDark from '../../assets/github-mark-white.png';
import cchatLogo from '../../assets/cchat-logo.svg';
import cchatLogin from '../../assets/cchat-login.png';

function CChat() {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">CChat</h1>
            <button 
              className="contact-button project-contact-btn"
              title="Speed Roulette Website"
              onClick={() => window.open('https://cchat.fun/', '_blank')}
              >
              <img src={cchatLogo} className="contact-image"/>
            </button>
            <button 
              className="contact-button project-contact-btn"
              title="Speed Roulette Repository"
              onClick={() => window.open('https://github.com/JManion32/cchat', '_blank')}
              >
              <div className="github-image-wrapper">
                  <img src={githubLight} className="github-image light" />
                  <img src={githubDark} className="github-image dark" />
              </div>
            </button>
          </div>
	        <ComingSoon/>
          <div id="text-body">
            <p>
            	A client–server chat application designed to support real-time messaging between multiple concurrent users. 
              The centralized server manages client connections and routes messages efficiently. CChat features both a 
              native desktop client and a web client, and enables seamless cross-platform communication through a shared protocol.
            </p>
	          <div id="content-img-container">
              <img src={cchatLogin} className="project-img"/>
            </div> 
            <hr/>
            <h2>Tech Stack</h2>
            <TechStack
                sections={[
                {
                    title: "Client (Web)",
                    items: [
                    { name: "Vite", className: "vite" },
                    { name: "React", className: "react" },
                    { name: "TypeScript", className: "ts" }
                    ]
                },
                {
                    title: "Client (GUI)",
                    items: [
                    { name: "QT", className: "qt" }
                    ]
                },
                {
                    title: "Server",
                    items: [
                    { name: "C++", className: "cpp" },
                    ]
                },
                {
                    title: "Infrastructure",
                    items: [
                    { name: "DigitalOcean", className: "digitalocean" },
                    ]
                }
                ]}
            />
            <div className={`${readMore ? '' : 'hide-read-more-container'}`}>
              <hr/>
              <h2>Inception</h2>
              <p>
                CChat 
              </p>
	            <h2>Implementation</h2>
	            <h2>Future Plans</h2>
            </div>
          </div>
          <ReadMoreBtn
            readMore={readMore}
            setReadMore={setReadMore}
          />
        </div>
        <NavButton
          left="Speed Roulette" leftNav="/projects/speedroulette"
          right="Course Website" rightNav="/projects/psoft"
        />
      </div>
    </>
  );
}

export default CChat;
