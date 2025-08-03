import { useEffect, useState } from 'react';
import { initDarkMode } from '../utils/darkMode';
import Navbar from '../components/Navbar';

function Home() {
    useEffect(() => {
        initDarkMode();
    }, []);

  return (
    <>
      <div className="page">
        <Navbar />
        <div className="home-container">
            <h1 className="name-header">Justin Manion</h1>
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
                    className="contact-button"
                    onClick={() => window.location.href = 'mailto:jmanion32@gmail.com'}
                >
                    <img
                        src="../assets/mail_icon.png"
                        className="github-image"
                        alt="mail icon"
                    />
                    Contact Me
                </button>
                <button 
                    className="contact-button"
                    onClick={() => window.open('https://github.com/JManion32', '_blank')}
                >
                    <img src="../assets/github_white.png" className="github-image"/>
                    GitHub
                </button>
                <button 
                    className="contact-button"
                    onClick={() => window.open('https://www.linkedin.com/in/jmanion32/', '_blank')}
                >
                    <img src="../assets/linkedin_logo.png" className="linkedin-image"/>
                    LinkedIn
                </button>
                <button 
                    className="contact-button"
                    onClick={() => window.open('https://www.youtube.com/@JManCodes', '_blank')}
                >
                    <img src="../assets/youtube_logo.png" className="yt-image"/>
                    YouTube
                </button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;
