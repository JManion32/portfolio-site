import PreviewCard from '../components/PreviewCard';
import NavButton from '../components/NavButton';

import rpiSeal from '../assets/rpi-seal.png';
import stewartsLogo from '../assets/stewarts-logo.png';
import lxaLogo from '../assets/lxa-logo.webp';
import priceChopper from '../assets/price-chopper.png';
import hvccGreen from '../assets/hvcc-green.png';
import twitchLogo from '../assets/twitch-logo.png';

function Experience() {

  return (
    <>
      <div className="page">
        <div className="content">
          <div className="main-fly-in-bottom">
            <div className="header-container">
              <h1 className="main-page-header exp-header">Experience</h1>
            </div>
            <p className="main-page-desc">Click on an experience to learn more!</p> 
          </div>
          <div className="project-grid">
            <PreviewCard
                img={rpiSeal}
                header="Rensselaer Polytechnic Institute"
                date="August 2024 - May 2026"
                desc="Pursuing a Bachelor's of Science in Computer Science."
                nav="/experience/Rensselaer"
                animation= "main-fly-in-bottom-1"
            />
            <PreviewCard
                img={stewartsLogo}
                header="IT Technician Intern"
                date="May 2024 - August 2024"
                desc="On-site technician responsible for troubleshooting and maintaining hardware in fast-paced environments."
                nav="/experience/Stewarts"
                animation= "main-fly-in-bottom-2"
            />
            <PreviewCard
                img={lxaLogo}
                header="Lambda Chi Alpha"
                date="August 2024 - Present"
                desc="Secretary, Webmaster, and Brother."
                nav="/experience/LambdaChi"
                animation= "main-fly-in-bottom-3"
            />
            <PreviewCard
                img={priceChopper}
                header="Price Chopper"
                date="June 2020 - October 2024"
                desc="Shift Supervisor, Office Teammate, Cashier, and Maintenance."
                nav="/experience/PriceChopper"
                animation= "main-fly-in-bottom-4"
            />
            <PreviewCard
                img={hvccGreen}
                header="Hudson Valley CC"
                date="August 2022 - May 2024"
                desc="Associates Degree in Computer Information Systems."
                nav="/experience/HudsonValley"
                animation= "main-fly-in-bottom-5"
            />
            <PreviewCard
                img={twitchLogo}
                header="Twitch Streamer"
                date="December 2020 - November 2023"
                desc="Daily livestreams averaging 10+ concurrent viewers."
                nav="/experience/Streamer"
                animation= "main-fly-in-bottom-6"
            />
          </div>
        </div>
        <NavButton
          left="Projects" leftNav="/projects"
          right="Resume" rightNav="/resume"
        />
      </div>
    </>
  );
}

export default Experience;