import { useNavigate } from 'react-router-dom';
import PreviewCard from '../components/PreviewCard';

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
            <PreviewCard
                img="/assets/rpi-seal.png"
                header="Rensselaer Polytechnic Institute"
                date="August 2024 - May 2026"
                desc="Pursuing a Bachelor's of Science in Computer Science."
                nav="/experience/Rensselaer"
            />
            <PreviewCard
                img="/assets/stewarts-logo.png"
                header="IT Field Technician Intern"
                date="May 2024 - August 2024"
                desc="On-site technician responsible for troubleshooting and maintaining hardware."
                nav="/experience/Stewarts"
            />
            <PreviewCard
                img="/assets/lxa-logo.webp"
                header="Lambda Chi Alpha"
                date="August 2024 - Present"
                desc="Secretary, Webmaster, and Brother."
                nav="/experience/LambdaChi"
            />
            <PreviewCard
                img="/assets/price-chopper.png"
                header="Price Chopper"
                date="June 2020 - October 2024"
                desc="Shift Supervisor, Office Teammate, Cashier, and Maintenance."
                nav="/experience/PriceChopper"
            />
            <PreviewCard
                img="/assets/hvcc-green.png"
                header="Hudson Valley CC"
                date="August 2022 - May 2024"
                desc="Associates Degree in Computer Information Systems."
                nav="/experience/HudsonValley"
            />
            <PreviewCard
                img="/assets/twitch-logo.png"
                header="Twitch Streamer"
                date="December 2020 - November 2023"
                desc="Daily Dead by Daylight livestreams averaging 10+ viewers."
                nav="/experience/Streamer"
            />
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