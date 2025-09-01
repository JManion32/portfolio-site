import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';

import oldFoodDrive from '../../assets/old-lxa-food-drive.png';
import newFoodDrive from '../../assets/new-lxa-food-drive.png';
import smashingPumpkin from '../../assets/smashing-pumpkin.png';
import patioPumpkin from '../../assets/patio-pumpkin.png';
import lxaLogo from '../../assets/lxa-logo.webp';

function LambdaChi() {
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">Lambda Chi Alpha</h1>
            <button 
              className="contact-button project-contact-btn"
              title="LXA EHZ Website"
              onClick={() => window.open('https://www.lambdachiehz.com', '_blank')}
              >
              <img src={lxaLogo} className="contact-image"/>
            </button>
          </div>
          <div id="text-body">
            <p>
              If I had to describe my time at &Lambda;ΧΑ in one word, it would be <i>transformative</i>. I never 
              imagined myself joining a fraternity, especially with all the negative stereotypes that surround 
              Greek life. Yet here, I have found nothing of the sort. Instead, I’ve discovered an exceptional 
              group of young men who are always there to support me and challenge me to step outside my comfort 
              zone. Through these experiences, I’ve grown as a person, a brother, and a leader. Below are some of 
              the responsibilities and opportunities that have shaped my journey.
            </p>
            <hr/>
            <h2>Secretary</h2>
            <p>
              As the Secretary, I have various administrative responsibilities to ensure our chapter runs smoothly. What I 
              have learned from this role is the importance of being consistently good, rather than occasionally great. I strive to 
              stay on top of my duties so I can easily be there to support other officers, and enable them to reach their full potential.
            </p>
            <h3>House Meetings Minutes / Attendance</h3>
            <p>
              As Secretary, one of the more front-facing responsibilities is managing communication and records for our meetings. 
              Before each meeting, I email a reminder to the brotherhood, then prepare the necessary materials, including the slideshow, 
              officer agenda, and minutes. I take attendance at the start, record the minutes during the meeting, finalize them 
              afterward, and send them out as soon as possible. While the workload felt overwhelming at first, routine has made it manageable, 
              and even enjoyable. I see it as my responsibility to write the history of our chapter, and I consider it a great honor to do so.
            </p>
            <h3>Roster Management</h3>
            <p>

            </p>
            <h3>Calendar</h3>
            <p>

            </p>
            <h3>Google Drive</h3>
            <p>

            </p>
            <h3>Bid Packets</h3>
            <p>

            </p>
            <h3>Digitizing Old Photos</h3>
            <p>

            </p>
            <hr/>
            <h2>Webmaster</h2>
            <p>

            </p>
            <hr/>
            <h2>Philanthropy</h2>
            <p>
              Philanthropy is closely tied with the extensive history of our chapter. At the center of this 
              tradition is our semesterly food drive, an initiative I’ve been honored to participate in.
            </p>
            <div id="content-img-container">
              <img src={oldFoodDrive} className="project-img"/>
              <p>&Lambda;XA Brothers with the donations they collected, circa 1995</p>
            </div>
            <div id="content-img-container">
              <img src={newFoodDrive} className="project-img"/>
              <p>
                Fall 2024 Food Drive results (an incredible 3,169 pounds of donations!). This photo was taken in 
                the room that the brothers are standing in front of 30 years prior in the previous image, a testament to 
                our longstanding commitment to philanthropy.
              </p>
            </div>
            <p>
              Another event we hold each fall is Pumpkin Bash, where we smash pumpkins while raising money for a charitable cause.
            </p>
            <div id="content-img-container">
              <img src={smashingPumpkin} className="project-img"/>
              <p>
                Me smashing a pumpkin.
              </p>
            </div>
            <div id="content-img-container">
              <img src={patioPumpkin} className="project-img"/>
              <p>
                Pumpkin somehow growing on our patio 10 months after Pumpkin Bash.
              </p>
            </div>
            <p>
              Our chapter participates in a number of other initiatives such as volunteering at Hope 7, a local 
              community center. We also hold an events such as "Bowls on Sunset" and "Phat Sandos", a late-night 
              fundraiser where we cook, package, and deliver food to people on campus, and donate all proceeds to charity.
            </p>
            <hr/>
            <h2>Reflection</h2>
            <p>
              Making impactful contributions to something greater than myself has turned the grind of
              college into a unique and enjoyable experience. I am so grateful to be a part of this 
              amzing brotherhood, and excited for all of the fun moments that lie ahead.
            </p>
          </div>
        </div>
        <NavButton
          left="Field Technician" leftNav="/experience/stewarts"
          right="Price Chopper" rightNav="/experience/pricechopper"
        />
      </div>
    </>
  );
}

export default LambdaChi;