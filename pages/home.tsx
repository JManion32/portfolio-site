import { useEffect } from 'react';
import { initDarkMode } from '../utils/darkMode';
import { useNavigate } from 'react-router-dom';

import githubLight from '../assets/github-mark.png';
import githubDark from '../assets/github-mark-white.png';
import gmailLogo from '../assets/gmail-logo.png';
import linkedinLogo from '../assets/linkedin_logo.png';

function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        initDarkMode();
    }, []);

  return (
    <>
      <div className="home-page">
        <div className="home-container">
            <h1 className="name-header constant-glow">Justin Manion</h1>
            <p className="name-desc">
                Dedicated computer science student with a passion for evaluating, designing, 
                and developing software. Proficient in modern web development concepts, with 
                hands-on experience building applications that span frontend interfaces, backend 
                logic, and relational databases. Strong leadership background complemented by 
                coachability, collaboration, and a continuous drive to learn. Seeking a challenging 
                role that provides opportunities for both technical and professional growth.
            </p>
            <div className="contact-button-container">
                <button 
                    className="contact-button home-contact-button"
                    onClick={() => window.open('https://github.com/JManion32', '_blank')}
                >
                <div className="github-image-wrapper">
                    <img src={githubLight} className="github-image light" />
                    <img src={githubDark} className="github-image dark" />
                </div>
                    GitHub
                </button>
                <button
                    className="contact-button home-contact-button"
                    onClick={() => window.location.href = 'mailto:jmanion32@gmail.com'}
                >
                    <img
                        src={gmailLogo}
                        className="gmail-image"
                        alt="mail icon"
                    />
                    jmanion32@gmail.com
                </button>
                <button 
                    className="contact-button home-contact-button"
                    onClick={() => window.open('https://www.linkedin.com/in/jmanion32/', '_blank')}
                >
                    <img src={linkedinLogo} className="linkedin-image"/>
                    LinkedIn
                </button>
                {/*
                <button 
                    className="contact-button home-contact-button"
                    onClick={() => window.open('https://www.youtube.com/@JManCodes', '_blank')}
                >
                    <img src="../assets/youtube_logo.png" className="yt-image"/>
                    YouTube
                </button>
                */}
            </div>
                <div className="contact-button-container">
                    <button 
                        className="contact-button mobile-home-contact-button"
                        onClick={() => window.open('https://github.com/JManion32', '_blank')}
                    >
                    <div className="github-image-wrapper">
                        <img src={githubLight} className="github-image light" />
                        <img src={githubDark} className="github-image dark" />
                    </div>
                    </button>
                    <button
                        className="contact-button mobile-home-contact-button"
                        onClick={() => window.location.href = 'mailto:jmanion32@gmail.com'}
                    >
                        <img
                            src={gmailLogo}
                            className="gmail-image"
                            alt="mail icon"
                        />
                    </button>
                    <button 
                        className="contact-button mobile-home-contact-button"
                        onClick={() => window.open('https://www.linkedin.com/in/jmanion32/', '_blank')}
                    >
                        <img src={linkedinLogo} className="linkedin-image"/>
                    </button>
                    {/*
                    <button 
                        className="contact-button mobile-home-contact-button"
                        onClick={() => window.open('https://www.youtube.com/@JManCodes', '_blank')}
                    >
                        <img src="../assets/youtube_logo.png" className="yt-image"/>
                    </button>
                    */}
            </div>
        </div>
        <button className="right-guide-button" onClick={() => navigate('/projects')}>
            Projects <span className="right-arrow-spacer">{'>>'}</span>
        </button>
      </div>
    </>
  );
}

export default Home;
