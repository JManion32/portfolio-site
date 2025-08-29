import { useNavigate } from 'react-router-dom';
import PreviewCard from '../components/PreviewCard';
import NavButton from '../components/NavButton';

import rpiSeal from '../assets/rpi-seal.png';
import stewartsLogo from '../assets/stewarts-logo.png';
import lxaLogo from '../assets/lxa-logo.webp';
import priceChopper from '../assets/price-chopper.png';
import hvccGreen from '../assets/hvcc-green.png';
import twitchLogo from '../assets/twitch-logo.png';

function Experience() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page">
        <div className="content">
          <div className="header-container">
              <h1 className="main-page-header exp-header">Experience</h1>
              <button className="contact-button view-resume-desktop" onClick={() => navigate('/experience/Resume')}>
                  View Resume
              </button>
              <button className="contact-button view-resume-mobile" onClick={() => window.location.href = "../files/resume.pdf"}>
                  View Resume
              </button>
          </div>
          <p className="main-page-desc">Click on an experience to learn more!</p> 
          <div className="project-grid">
            <PreviewCard
                img={rpiSeal}
                header="Rensselaer Polytechnic Institute"
                date="August 2024 - May 2026"
                desc="Pursuing a Bachelor's of Science in Computer Science."
                nav="/experience/Rensselaer"
            />
            <PreviewCard
                img={stewartsLogo}
                header="IT Field Technician Intern"
                date="May 2024 - August 2024"
                desc="On-site technician responsible for troubleshooting and maintaining hardware."
                nav="/experience/Stewarts"
            />
            <PreviewCard
                img={lxaLogo}
                header="Lambda Chi Alpha"
                date="August 2024 - Present"
                desc="Secretary, Webmaster, and Brother."
                nav="/experience/LambdaChi"
            />
            <PreviewCard
                img={priceChopper}
                header="Price Chopper"
                date="June 2020 - October 2024"
                desc="Shift Supervisor, Office Teammate, Cashier, and Maintenance."
                nav="/experience/PriceChopper"
            />
            <PreviewCard
                img={hvccGreen}
                header="Hudson Valley CC"
                date="August 2022 - May 2024"
                desc="Associates Degree in Computer Information Systems."
                nav="/experience/HudsonValley"
            />
            <PreviewCard
                img={twitchLogo}
                header="Twitch Streamer"
                date="December 2020 - November 2023"
                desc="Daily Dead by Daylight livestreams averaging 10+ viewers."
                nav="/experience/Streamer"
            />
          </div>
        </div>
        <NavButton
          left="Projects" leftNav="/projects"
          right="Blogs" rightNav="/blogs"
        />
      </div>
    </>
  );
}

export default Experience;