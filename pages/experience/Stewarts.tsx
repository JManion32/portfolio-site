import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';
import ComingSoon from '../../components/ComingSoon';

import stewartsLogo from '../../assets/stewarts-logo.png';
import stewartsPlant from '../../assets/stewarts-plant.png';
import tupperLunch from '../../assets/tupper-lake-lunch.png';

function Stewarts() {
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">IT Field Technician Intern</h1>
            <button 
              className="contact-button project-contact-btn"
              title="About Stewart's Shops"
              onClick={() => window.open('https://www.stewartsshops.com/who-we-are/', '_blank')}
              >
              <img src={stewartsLogo} className="contact-image" style={{ borderRadius: "0.25rem" }} />
            </button>
          </div>
          <ComingSoon/>
          <div id="text-body">
            <p>
              During the summer of 2024, I worked as an IT Field Technician for Stewart's Shops, a large 
              gas station chain in the Northeast. This role was hardware-focused, with emphasis on maintenance 
              and troubleshooting.
            </p>
            <hr/>
            <h2>Overview</h2>
            <p>
              With over 400 stores across New York, Vermont, and New Hampshire, Stewart's Shops is one 
              of the largest gas station chains in the Northeast. All of the shops are centered around 
              Saratoga, NY (~40 minutes north of Albany), where the main office and distribution 
              center is located.
            </p>
            <div id="content-img-container">
              <img src={stewartsPlant} className="project-img"/>
              <p>
                Stewart's Distribution Center
              </p>
            </div>
            <p>
              My department, the technology center was essentially the company help desk. We troubleshooted 
              hardware both over the phone, as well as in person. It was all organized into a ticket 
              system. We actively maintained over 400 stores between New York and Vermont, so there 
              was a lot of work to do between our 16 person team.
            </p>
            <hr/>
            <h2>Onsite Responsibilities</h2>
            <p>
              Since I was only around for 3 and a half months, I was not set up with a phone, instead 
              spending most of my days onsite. This was fun because I got to enjoy the beauty of 
              New York and Vermont throughout the summer.
            </p>
            <div id="content-img-container">
              <img src={tupperLunch} className="project-img"/>
              <p>
                Enjoying lunch in the middle of the Adirondacks.
              </p>
            </div>
            <h3>Preventative Maintenance</h3>
            <p>
              One of my key responsibilities as the intern was preventative maintenance (also called PMs). This 
              involved cleaning register and networking equipment at shops. It required communication, and there 
              was always the risk of me taking something out, which is where the troubleshooting came into play. 
              In my three and a half month tenure, I was able to clean around 40 shops, or 10% of the entire chain.
            </p>
            <h3>Service Calls</h3>
            <p>
              While preventative maintenance was ideal, things inevitably go wrong. From delivering new equipment to 
              replacing entire registers, there was a lot to do.
            </p>
            <hr/>
            <h2>Office Days</h2>
            <p>
              I spent most of my time on the road, but also had my share of office days. With no phone and a busy office, it 
              was up to me to create work to do.
            </p>
            <h3>Shipping</h3>
            <p>
              When a store needed equipment replaced, we would sometimes ship it to them. They would then send it back to our 
              office for us to process. 
            </p>
            <h3>Battery Backups</h3>
            <p>
              
            </p>
            <h3>Organizing Vehicles</h3>
            <p>

            </p>
            <h3>Misc Work</h3>
            <p>

            </p>
            <hr/>
            <h2>Reflection</h2>
            <p>
                This internship may not have focused on software development, but it gave me ialuable lessons about collaboration
                and enterprise IT. I spent the summer traveling across the northeast in a tech van, solving problems alongside 
                a supportive team, and building connections with people who made the experience memorable. Stewart’s provided 
                an outstanding opportunity, and their offer to welcome me back in the future spoke volumes about the impact I 
                made during my time there.
            </p>
          </div>
        </div>
        <NavButton
          left="Rensselaer" leftNav="/experience/rensselaer"
          right="Lambda Chi" rightNav="/experience/lambdachi"
        />
      </div>
    </>
  );
}

export default Stewarts;