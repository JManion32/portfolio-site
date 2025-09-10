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
              Greek life. Despite everything I have heard, I’ve only discovered an exceptional 
              group of men who support each other unconditionally. Through my experiences here, I’ve grown as a person, brother, and leader. Below are some of 
              the responsibilities and opportunities that have shaped my journey.
            </p>
            <hr/>
            <h2>Secretary</h2>
            <p>
              As the Secretary, I have various administrative responsibilities to ensure our chapter operates smoothly. This role 
              has taught me the importance of being consistently good, rather than occasionally great. I strive to 
              stay on top of my duties so I can be there to assist other officers, and enable them to reach their full potential.
            </p>
            <h3>House Meetings Minutes / Attendance</h3>
            <p>
              One of the more front-facing responsibilities is managing communication and records for our meetings. 
              Before each meeting, I email a reminder to the brotherhood, then prepare the slideshow, 
              officer agenda, and meeting minutes. I take attendance at the start, record the minutes during the meeting, finalize them 
              afterward, and send them out as soon as possible. This aspect of my role was intimidating at first, but I have come to enjoy it. 
              I see it as my responsibility to write the history of our chapter, and consider it a great honor to do so.
            </p>
            <h3>Roster Management</h3>
            <p>
              One of my key responsibilities as secretary is managing the fraternity’s roster. Keeping it accurate ensures that 
              both RPI’s governing body for Greek life and our national office remain properly informed. To simplify this 
              process, I created and actively maintain a master sheet that consolidates all the information these organizations 
              need. This makes deadlines easier to meet and streamlines other administrative tasks cas well.
            </p>
            <h3>Calendar</h3>
            <p>
              With so many events happening each semester, an up-to-date calendar is essential for clear communication and 
              planning. In the past, we relied on multiple Google Calendars with different purposes, which often caused 
              desynchronization when not everyone had access to all of them. To solve this, I consolidated everything 
              into a single color-coded calendar, giving brothers one reliable source for all 
              fraternity activities. While it takes daily effort to keep it updated, this centralized hub has made 
              staying informed easier for everyone.
            </p>
            <h3>Digitizing Old Photos</h3>
            <p>
              An aspect of the Secretary role that is often overlooked is maintaining the chapter’s historic records. Over winter break, I  
              embraced this by scanning more than 1,000 photos from old scrapbooks and organizing them on our Google Drive.
            </p>
            <hr/>
            <h2>Webmaster</h2>
            <p>
              I recently became the Webmaster so I don't have much to show besides getting the site up to date, but I do have many ambitious plans on the horizon.
            </p>
            <h3>Improving the Role</h3>
            <p>
              In recent years, the Webmaster role has been neglected, which has left the site outdated and lacking relevant information. My priority is to 
              bring everything up to date and establish a system that ensures the site is consistently maintained moving forward. This process will 
              be detailed in an extensive transition document I plan to create so future webmasters can build on the work and continue to improve the role.
            </p>
            <h3>Adding the Digitized Photos</h3>
            <p>
              After digitizing more than 1,000 photos from the chapter’s archives, the next step is to make them 
              accessible. I want to add a photo gallery page to the site, giving alumni a chance to relive their 
              time in the fraternity and allowing current members to connect with the chapter’s history.
            </p>
            <h3>Adding a History Page</h3>
            <p>
              As part of the new member process, much is taught about the chapter’s rich and interesting history. 
              I plan to create a history page, preserving the chapter’s legacy while making it accessible to alumni, 
              potential members, and the broader community.
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
              Another event we hold each fall is Pumpkin Bash, 
              a community fundraiser where we smash pumpkins to support local charities.
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
              community center. We also hold events such as "Bowls on Sunset" and "Phat Sandos", late-night 
              fundraisers where we cook, package, and deliver food to people on campus, with all proceeds going to charity.
            </p>
            <hr/>
            <h2>Reflection</h2>
            <p>
              Making impactful contributions to something greater than myself has turned the grind of
              college into a unique and enjoyable experience. I am so grateful to be a part of this 
              amazing brotherhood, and excited for the fun that lies ahead.
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