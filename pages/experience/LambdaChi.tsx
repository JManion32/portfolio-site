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
              One if the most important responsibilities of the secretary is managing the fraternity's roster.
            </p>
            <h3>Calendar</h3>
            <p>
              With so many different events going on throughout the course of the semester, having an up to date calendar is essential for 
              communication and planning. Previously, we had multiple Google Calendars with different functionalities. This worked well, but 
              led to desynchronization when users did not have all of the calendars. I decided to combine everything into one color-coded calendar 
              called LXA Events, featuring everything a brother needs to stay up to date with the happenings of the fraternity. Going back to being 
              consistently good rather than occasionally great, this is an example of it. In order for this calendar to work, I have to check it over 
              on a daily basis.
            </p>
            <h3>Google Drive</h3>
            <p>
              The secretary also functions as the system admin for the fraternity. There isn't much work done there besides keeping the 
              Google Drive organized. With twelve officers, I created a shared officer drive for each officer to work out of, allowing 
              us all to stay on the same page.
            </p>
            <h3>Bid Packets</h3>
            <p>
              When we select a someone to join our fraternity, we provide them with a bid packet that answers any questions they may have. 
              We use a template that has a similar structure each semester. While this template worked well, there was certainly room for improvement. 
              With this as my responsibility I made several enhancements to the packet, including adding a page to highlight our philanthropy, 
              another page to talk about risk management policies, and removed the archaic information form we used to have the new members fill 
              out and replaced it with a QR code to a Google Form. After finalizing the bid packets, I then have to prepare them (usually around 20-30) 
              per semester, get all of the officers to sign them, and make sure they get in the hands of potential members as soon as possible.
            </p>
            <h3>Digitizing Old Photos</h3>
            <p>
              An aspect of the Secretary that is often overlooked is maintaining the chapter's historic records. During winter break, I decided to do 
              just that when I scanned in 1,000+ photos from scrapbooks we have, and organized them neatly on our Google Drive.
            </p>
            <hr/>
            <h2>Webmaster</h2>
            <p>
              I only just became the Webmaster so I don't have much to show, but I do have many ambitious plans that 
              I am excited to execute.
            </p>
            <h3>Improving the Role</h3>
            <p>
              In recent years, the Webmaster role has been neglected. To start, the site is very outdated, 
              and does not have much relevent information on it, at all. I want to get everything up to date, then implement 
              a system to ensure this does not happen again. This system will include preparing a rough outline of plans that 
              can be used at the start of each semester. My final goal before I exit this role is to create an extensive 
              transition document, so anyone picking it up is able to flourish.
            </p>
            <h3>Adding the Digitized Photos</h3>
            <p>
              After digitizing over 1000 photos, we have yet to do anything with them. I want to get most of them 
              onto the website, allowing alumni to relive their time in the fraternity, and everyone to see our 
              history.
            </p>
            <h3>Adding a History Page</h3>
            <p>
              As part of the new member process, you learn a lot about our chapter's extensive, and 
              interesting history. Unfortunately, this history has not been shared with the world, and 
              so I want to make a page to highlight it.
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