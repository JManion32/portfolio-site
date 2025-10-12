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
            <h1 className="text-page-header">IT Technician Intern</h1>
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
              During summer 2024, I worked as an IT Technician Intern for Stewart's Shops, a 
              gas station chain in the Northeast. This role was hardware-focused, with emphasis on maintenance 
              and troubleshooting.
            </p>
            <hr/>
            <h2>Overview</h2>
            <p>
              With over 400 stores across New York, Vermont, and New Hampshire, Stewart's Shops is one 
              of the largest, most popular gas station chains in the Northeast. All of the shops are centered around 
              Saratoga, NY, where the main office and distribution center is located.
            </p>
            <div id="content-img-container">
              <img src={stewartsPlant} className="project-img"/>
              <p>
                Stewart's Distribution Center
              </p>
            </div>
            <p>
              I worked in the Technology Center, which functions as the company’s help desk. With aan 18 person team, 
              there was never a shortage of hardware issues to address both over the phone, and in person.
            </p>
            <hr/>
            <h2>Onsite Responsibilities</h2>
            <p>
              Since I was a temporary employee, I was not set up with a phone, instead 
              spending most of my days on the road. This gave me the unique opportunity to see 
              New York and Vermont throughout the summer. Some days were to Lake Placid, others to Vermont, I was all over the place. 
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
              One of my key responsibilities as an intern was preventative maintenance (also called PMs). This involved addressing potential 
              issues in networking equipment before they occurred. In my three and a half month tenure, I was able to clean 
              40 shops, or about 10% of the entire chain.
            </p>
            <p> 
              For each PM, I was given a checklist of tasks. This included cleaning and repairing POS registers, organizing cables, 
              and replacing faulty hardware. Though the tasks weren't complex, diligence was essential. The networking infrastructure 
              of these shops was fragile, so any careless mistake could lead to a high-stress situation. To mitigate this, I took a 
              business-first approach. Rather than rushing through my tasks, I coordinated verything with shop personnel, ensuring 
              we were all on the same page, and business flowed as usual.
            </p>
            <h3>New System Implementation</h3>
            <p>
              New system.
            </p>
            <h3>Service Calls</h3>
            <p>
              Stewart's strives to address issues before they occur, but hardware is never that simple. This was 
              especially true during the summer, where frequent thunderstorms wreaked havoc on our networking 
              equipment. Sometimes it was just a pinpad, other times an entire register.
            </p>
            <hr/>
            <h2>Office Days</h2>
            <p>
              I spent most of my time on the road, but also had my share of office days. With no phone to answer and an
              office full of busy technicians, it was up to me to create work to do.
            </p>
            <h3>Shipping</h3>
            <p>
              When far away shops required equipment replacements, we would often trade parts via shipments. Each 
              day I processed the returned equipment, assessing any damage, fixing what I could, and documenting the results.
            </p>
            <h3>Battery Backups</h3>
            <p>
              If there's one thing my time in the Stewart's tech center taught me, its how to handle battery backups.
            </p>
            <p>
              All of Stewart's Shops' networking equipment is hooked up to battery backups, and for good reason. 
              Frequent storms throughout the summer leave entire areas without power, potentially halting shop 
              operations in their tracks. With these, shops can function for several hours with no power.
            </p>
            <p>

            </p>
            <p>
              With over 400 shops each equipped with a handful of these backups, they piled up <b>fast</b> in 
              our office. 
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
                A portion of the tech center fleet. This picture was taken after I drove the van on the right to Syracuse and back!
              </p>
            </div>
            <p>
              The last thing we wanted was someone arriving to a job 2+ hours away without the necessary equipment to complete it. 
              This actually happened to me on one occasion. I was an hour and a half away from the tech center in Rutland, VA replacing 
              a printer when I found that the one I had brought was faulty. I went to my vehicle to grab the spare, only to realize that I had already 
              used it the day prior, and forgotten to replace it. Thankfully, it was a slow day in our office and at that shop so the delay 
              had minimal impact, and I was back with the printer 3 hours and 2 border crosses later.
            </p>
            <h3>Misc Work</h3>
            <p>
              Sometimes, there were too many guys out of the office, no returns to process, and no battery backups to fix up. 
              This was the real challenge of my productivity. Tasks I completed on these days include crimping new cables, sorting through 
              boxes of miscellaneous equipment, and on one occasion, attempting to open digital locks that we lost the combinations to.
            </p>
            <hr/>
            <h2>Reflection</h2>
            <p>
                This internship may not have been in line with my aspirations, but it gave me invaluable lessons about collaboration
                and enterprise IT. I spent the summer traveling across the northeast in tech vans, troubleshooting hardware in fast-paced 
                environments, and building relationships with people who made the experience memorable. Stewart's Shops is a fantastic 
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