import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Experience() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page">
        <div className="content">
          <div className="header-container">
              <h1 className="page-header exp-header">Experience</h1>
              <button className="contact-button view-resume" onClick={() => navigate('/experience/Resume')}>
                  View Resume
              </button>
          </div>
          <p className="projects-desc">Click on an experience to learn more!</p> 
          <div className="project-grid">
              <div onClick={() => navigate('/experience/Rensselaer')} className="project-preview-container">
                  <img
                      src="../assets/rpi-seal.png"
                      className="project-image"
                      alt="Rensselar Polytechnic Institute Seal"
                  />
                  <h2 className="project-preview-header">Rensselaer Polytechnic Institute</h2>
                  <p className="experience-date">August 2024 - May 2026</p>
                  <p className="project-preview-desc">Pursuing a Bachelor's of Science in Computer Science.</p>
              </div>
              <div onClick={() => navigate('/experience/Stewarts')} className="project-preview-container">
                  <img
                      src="../assets/stewarts-logo.png"
                      className="project-image"
                      alt="Stewart's Shops Logo"
                  />
                  <h2 className="project-preview-header">IT Field Technician Intern</h2>
                  <p className="experience-date">May 2024 - August 2024</p>
                  <p className="project-preview-desc">On-site technician responsible for troubleshooting and maintaining hardware.</p>
              </div>
              <div onClick={() => navigate('/experience/LambdaChi')} className="project-preview-container">
                  <img
                      src="../assets/lxa-logo.webp"
                      className="project-image"
                      alt="LXA Cross and Crescent Symbol"
                  />
                  <h2 className="project-preview-header">Lambda Chi Alpha</h2>
                  <p className="experience-date">August 2024 - Present</p>
                  <p className="project-preview-desc">Secretary, Webmaster, and Brother.</p>
              </div>
              <div onClick={() => navigate('/experience/PriceChopper')} className="project-preview-container">
                  <img
                      src="../assets/price-chopper.png"
                      className="project-image"
                      alt="Price Chopper Logo"
                  />
                  <h2 className="project-preview-header">Price Chopper</h2>
                  <p className="experience-date">June 2020 - October 2024</p>
                  <p className="project-preview-desc">Shift Supervisor, Office Teammate, Cashier, and Maintenance.</p>
              </div>
              <div onClick={() => navigate('/experience/HudsonValley')} className="project-preview-container">
                  <img
                      src="../assets/hvcc-green.jpg"
                      className="project-image"
                      alt="Hudson Valley Community College Logo"
                  />
                  <h2 className="project-preview-header">Hudson Valley Community College</h2>
                  <p className="experience-date">August 2022 - May 2024</p>
                  <p className="project-preview-desc">Associates Degree in Computer Information Systems.</p>
              </div>
              <div onClick={() => navigate('/experience/Streamer')} className="project-preview-container">
                  <img
                      src="../assets/twitch-logo.png"
                      className="project-image"
                      alt="Twitch Logo"
                  />
                  <h2 className="project-preview-header">Twitch Streamer</h2>
                  <p className="experience-date">December 2020 - November 2023</p>
                  <p className="project-preview-desc">Daily Dead by Daylight livestreams averaging 10+ viewers.</p>
              </div>
            </div>
        </div>
        <footer className="guide-footer">
          <button className="left-guide-button" onClick={() => navigate('/projects')}>
               <span className="left-arrow-spacer">{'<<'}</span> Projects
          </button>
          <button className="right-guide-button" onClick={() => navigate('/blogs')}>
                Blogs <span className="right-arrow-spacer">{'>>'}</span>
          </button>
        </footer>
      </div>
    </>
  );
}

export default Experience;