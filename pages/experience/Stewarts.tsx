import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';
import ComingSoon from '../../components/ComingSoon';

import stewartsFleet from '../../assets/stewarts-fleet.jpeg';
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
              I worked in the Technology Center, which functioned as the company’s primary help desk. Our 16 person team 
              troubleshooted hardware issues both over the phone and in person, with all requests managed through 
              a ticketing system.
            </p>
            <hr/>
            <h2>Onsite Responsibilities</h2>
            <p>
              Since I was only around for 3 and a half months, I was not set up with a phone, instead 
              spending most of my time onsite. This meant I was able to enjoy the beauty of 
              New York and Vermont throughout the summer. Somedays were to Lake Placid, others to Syracuse. 
              Beyond location, each shop had its own personality, making every trip a memorable experience.
            </p>
            <div id="content-img-container">
              <img src={tupperLunch} className="project-img"/>
              <p>
                Enjoying lunch in the middle of the Adirondacks.
              </p>
            </div>
            <h3>Preventative Maintenance</h3>
            <p>
              One of my key responsibilities as an intern was preventative maintenance (also called PMs). This 
              involved cleaning register and networking equipment at shops to address issues before they occured. 
              In my three and a half month tenure, I was able to clean around 40 shops, or 10% of the entire chain.
            </p>
            <p> 
              The tasks included cleaning, organizing, replacing, and repairing network equipment. I would blow dust out of 
              POS registers, fix broken cables, and replace any out of date equipment. Overall, it was simple, but when working with 
              networking equipment, it was important to be cautious as one mistake could take the store's entire credit line down.
            </p>
            <h3>Service Calls</h3>
            <p>
              While we Stewart's strives to address issues before they occur, hardware will inevitably give out.
            </p>
            <hr/>
            <h2>Office Days</h2>
            <p>
              I spent most of my time on the road, but also had my share of office days. With no phone to answer and an
              office full of busy technicians, it was up to me to create work to do.
            </p>
            <h3>Shipping</h3>
            <p>
              When far away stores required equipment replacements, we would often ship the new hardware directly to them, and have them return 
              the old units to our office for processing. Each day I processed the returned equipment, 
              assessing any damage, fixing what I could, and documenting the results.
            </p>
            <h3>Battery Backups</h3>
            <p>
              All of Stewart's Shops' networking equipment is hooked up to battery backups. This allows the store to function when the power 
              goes out. These are one of the main items we get from returns, and they piled up quick. 
            </p>
            <h3>Organizing Vehicles</h3>
            <p>
              The tech center has a fleet of vehicles, each stocked with networking equipment. This equipment serves as a backup 
              for onsite technicians, incase they need more equipment than they brought. On certain office 
              days, I would take inventory of these vehicles, ensuring they were adequately stocked and well organized.
            </p>
            <div id="content-img-container">
              <img src={stewartsFleet} className="project-img"/>
              <p>
                A portion of the tech center fleet. This picture was taken after I drove the van on the right all day!
              </p>
            </div>
            <p>
              The last thing we wanted was for someone to arrive at a job that was 2+ hours away, and not have the necessary equipment to complete it. 
              This actually happened to me on one occasion. I was an hour and a half away from the tech center in Rutland, VA replacing 
              a printer when I found that the one I had brought was faulty. I went to my vehicle to grab the spare, only to realize that I had already 
              used it the day prior, and forgotten to replace it. Thankfully, it was a slow day so the delay had minimal impact, and I was back with 
              the printer 3 hours later.
            </p>
            <h3>Misc Work</h3>
            <p>
              Sometimes, there were too many guys out of the office, no returns to process, and no battery backups to fix up. 
            </p>
            <hr/>
            <h2>Reflection</h2>
            <p>
                This internship may not have focused on software development, but it gave me invaluable lessons about collaboration
                and enterprise IT. I spent the summer traveling across the northeast in tech vans, troubleshooting hardware in fast-paced 
                environments, and building connections with people who made the experience memorable. Stewart's Shops is a fantastic 
                company, and I am beyond grateful to have spent my summer there.
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