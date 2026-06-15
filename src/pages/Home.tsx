import { useEffect } from 'react';
import { initDarkMode } from '../utils/darkMode';
import { useNavigate } from 'react-router-dom';

import githubLight from '../assets/github-mark.png';
import githubDark from '../assets/github-mark-white.png';
import gmailLogo from '../assets/gmail-logo.png';
import linkedinLogo from '../assets/linkedin_logo.png';

import buildInfo from '../build-info.json';

function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        initDarkMode();
    }, []);

    return (
        <>
            <div className="home-page">
                <div className="home-container">
                    <h1 className="name-header constant-glow fly-in-left">Justin Manion</h1>
                    <p className="name-desc fly-in-right">
                        Systems-minded computer science student with proven leadership experience and proficiency
                        building data intensive, user-facing applications. Seeking a challenging role that provides
                        opportunities for both technical and professional growth.
                    </p>
                    <div className="full-contact-button-container">
                        <button
                            className="contact-button home-contact-button fly-in-bottom-1"
                            onClick={() => window.open('https://github.com/JManion32', '_blank')}
                        >
                            <div className="github-image-wrapper">
                                <img src={githubLight} className="github-image light" />
                                <img src={githubDark} className="github-image dark" />
                            </div>
                            GitHub
                        </button>
                        <button
                            className="contact-button home-contact-button fly-in-bottom-2"
                            onClick={() => (window.location.href = 'mailto:jmanion32@gmail.com')}
                        >
                            <img src={gmailLogo} className="gmail-image" alt="mail icon" />
                            jmanion32@gmail.com
                        </button>
                        <button
                            className="contact-button home-contact-button fly-in-bottom-3"
                            onClick={() => window.open('https://www.linkedin.com/in/jmanion32/', '_blank')}
                        >
                            <img src={linkedinLogo} className="linkedin-image" />
                            LinkedIn
                        </button>
                    </div>
                    <p className="last-updated-full fly-in-bottom-4">Site Last Updated: {buildInfo.lastUpdated}</p>
                    <div className="mobile-contact-button-container">
                        <button
                            className="contact-button mobile-home-contact-button fly-in-bottom-1"
                            onClick={() => window.open('https://github.com/JManion32', '_blank')}
                        >
                            <div className="github-image-wrapper">
                                <img src={githubLight} className="github-image light" />
                                <img src={githubDark} className="github-image dark" />
                            </div>
                        </button>
                        <button
                            className="contact-button mobile-home-contact-button fly-in-bottom-2"
                            onClick={() => (window.location.href = 'mailto:jmanion32@gmail.com')}
                        >
                            <img src={gmailLogo} className="gmail-image" alt="mail icon" />
                        </button>
                        <button
                            className="contact-button mobile-home-contact-button fly-in-bottom-3"
                            onClick={() => window.open('https://www.linkedin.com/in/jmanion32/', '_blank')}
                        >
                            <img src={linkedinLogo} className="linkedin-image" />
                        </button>
                    </div>
                    <p className="last-updated-mobile fly-in-bottom-4">Site Last Updated: {buildInfo.lastUpdated}</p>
                </div>
                <button className="right-guide-button" onClick={() => navigate('/projects')}>
                    Projects <span className="right-arrow-spacer">{'>>'}</span>
                </button>
            </div>
        </>
    );
}

export default Home;
