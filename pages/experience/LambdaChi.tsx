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
              As Secretary, I handle the administrative operations that keep our chapter running smoothly. This role 
              has taught me the importance of being consistently good, rather than occasionally great. I strive to 
              stay on top of my duties so I can be there to assist other officers, and enable them to reach their full potential. 
            </p>
            <p>
              One of the more front-facing responsibilities I have is managing our weekly house meetings. 
              Before each meeting, I email a reminder to the brotherhood, then prepare the slideshow, 
              officer agenda, and meeting minutes. I take attendance at the start, record the minutes during the meeting, finalize them 
              afterward, and send them out promptly. This aspect of my role was intimidating at first, but I have come to enjoy it. 
              I see it as my duty to write the history of our chapter, and consider it a great honor to do so.
            </p>
            <p>
              Other duties include managing the fraternity’s official roster, preparing bid packets for new 
              members, and maintaining the Google Calendar, mailing lists, mailboxes, and Google Drive.
            </p>
            <hr/>
            <h2>Webmaster</h2>
            <p>
              In recent years, the Webmaster role has been neglected, leaving the site outdated and lacking relevant information. 
              I have worked to bring everything up to date, and establish a system to prevent this from happening again. Before I transition 
              out of the role, I intend to create a document that will give the inheritor everything necessary to succeed.
            </p>
            <p>
              My ongoing priority is repopulating the site with new event posts, chapter news, and brotherhood 
              achievements. Beyond this, I aim to add a gallery page showcasing thousands of digitized photos from 
              our archives and a dedicated history page celebrating our chapter’s legacy. My goal is to preserve our story 
              and make it easily accessible to all brothers—past, present, and future.
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