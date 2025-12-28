import { useState } from 'react';
import ReadMoreBtn from '../../components/ReadMoreBtn.tsx'

import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';
import pcStore from '../../assets/price-chopper-store.webp';
import pcRetired from '../../assets/price-chopper-retirement.jpeg';

function PriceChopper() {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">Price Chopper</h1>
          </div>
          <div id="text-body">
            <p>
              This was my first job, held from June 2020 to October 2024. Along the way, I advanced 
              from high school to college, and from cashier to dependable leader.
            </p>
            <div id="content-img-container">
              <img src={pcStore} className="project-img"/>
              <p>
                I spent thousands of hours in this store.
              </p>
            </div>
            <div className={`${readMore ? '' : 'hide-read-more-container'}`}>
              <hr/>
              <h2>Cashier</h2>
              <p>
                I spent the first two years of my Price Chopper journey as a cashier. I showed up, scanned groceries, 
                and of course, got the produce codes down.
              </p>
              <h3>Takeaway: Appreciate the experience.</h3>
              <p>
                Yeah, it was repetitive, and I would have rather been doing something else. But it was a job, not a source 
                of entertainment. If I wanted to enjoy it, I had to create that experience myself. Everyday, I put my best effort 
                forward to be personable, and find things to be happy about. At some point, I no longer had to make an effort, 
                I just enjoyed being there. This takeaway extends far beyond my time at Price Chopper. There is joy to be found in 
                everything, if you're willing to look for it.
              </p>
              <hr/>
              <h2>Supervisor</h2>
              <p>
                When I turned 18, I was given supervisor privileges, providing my first real opportunity to develop leadership skills.
              </p>
              <h3>Takeaway: Lead by example.</h3>
              <p>
                Respect is earned, not given. During my closing shifts, there was a list of tasks to complete in preparation for the next day. 
                It wasn’t easy to motivate cashiers to take on more work after hours of scanning groceries. Instead of simply telling them what to do, I 
                did the tasks alongside them, creating a positive environment and getting the results we needed.
              </p>
              <h3>Takeaway: Level heads prevail.</h3>
              <p>
                I specifically remember a summer shift early in my time as a supervisor when we were short-staffed across the board. 
                We were short on cashiers, and to make matters worse, maintenance called out, leaving me without support inside or outside the 
                store. For several hours, I rotated between pushing carts, running a register, covering breaks, and leading 
                the team. By the end, I was exhausted. To me, it was such a big deal. To my replacement, it was another Tuesday. This 
                really put things into perspective for me. I wasn't there for the smooth sailing, I was there because 
                I was trusted to guide the ship when the waves got rocky.
              </p>
              <p>
                The original title for this takeaway was "It is what it is." Things can, and will go wrong. People don't show up, customers 
                can be rude, the list goes on. The thing is, no amount of complaining or panic will make the situation any better. As the 
                one in charge, it was my responsibility to do my very best with what I had, and that's what leadership means to me.
              </p>
              <hr/>
              <h2>Maintenance</h2>
              <p>
                Throughout my time at Price Chopper, I occasionally took on maintenance shifts. This involved pushing carts, cleaning 
                bathrooms, emptying garbages, and maintaining the bottle return room.
              </p>
              <h3>Takeaway: Taking pride in my work.</h3>
              <p>
                The tasks were straightforward — emptying garbages, 
                cleaning bathrooms, keeping things in order. I could have gone through the motions, done an average job, and left half-full 
                bins or “clean enough” bathrooms for the morning crew. Instead, I found real satisfaction in giving that extra effort, 
                never leaving until the job was finished so I didn't leave someone else hanging. This mindset has carried over to 
                development work too. Sure, I might spend a whole day perfecting a site’s mobile scaling, but in the end, it’s always worth it.
              </p>
              <hr/>
              <h2>Customer Service Teammate</h2>
              <p>
                After 3 1/2 years of experience, I was asked to work in the office. My responsibilities included:
                <ul>
                  <li>Counting / Handling all of the store's money</li>
                  <li>Cashing / Selling lottery tickets</li>
                  <li>Processing Money Transfers through Western Union</li>
                  <li>Processing Money Orders</li>
                  <li>Handling Customer Returns / Complaints</li>
                </ul>
                This was by far my favorite role. I developed relationships with the daily customers, 
                had downtime to do my own thing, and truly felt like I had mastered the Front End department.
              </p>
              <h3>Takeaway: Master the details.</h3>
              <p>
                Mistakes in the office carried far greater consequences than anything 
                that could happen on the sales floor. Even once I had a routine, I made a habit of double, even 
                triple-checking my work to ensure accuracy, and organization. Not only did this enable me succeed, but it  
                made the lives of my team easier.
              </p>
              <hr/>
              <h2>Reflection</h2>
              <p>
                My time at Price Chopper was invaluable in shaping who I am today. Though that extended 
                chapter of my life is now over, I will always cherish the experiences I had there.
              </p>
              <div id="content-img-container">
                <img src={pcRetired} className="project-img"/>
                <p>
                  Me and my coworker on my "retirement" day.
                </p>
              </div>
            </div>
          </div>
          <ReadMoreBtn
            readMore={readMore}
            setReadMore={setReadMore}
          />
        </div>
        <NavButton
          left="Lambda Chi" leftNav="/experience/lambdachi"
          right="Hudson Valley" rightNav="/experience/hudsonvalley"
        />
      </div>
    </>
  );
}

export default PriceChopper;