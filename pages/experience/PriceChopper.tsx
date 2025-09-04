import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';
import pcRetired from '../../assets/price-chopper-retirement.jpeg';

function PriceChopper() {
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
              This was my first job, lasting four years and four months. Along the way, I advanced 
              from high school to college, and from cashier to a dependable leader.
            </p>
            <hr/>
            <h2>Cashier</h2>
            <p>
              The first 2 years of my Price Chopper journey was cashiering. I'm not going to bore you with the details here. 
              I showed up, I scanned groceries, and of course, I got the produce codes down.
            </p>
            <h3>Takeaway</h3>
            <p>
              <b>The importance of a positive mindset.</b> Yeah, it was 
              repetitive, and would I rather have been doing something else? Of course. But it was a job, not a source 
              of entertainment. If I wanted to enjoy it, I had to create that experience myself. Everyday, I put my best effort 
              forward to be personable, and find things to be happy about. Sulking around and waiting to go 
              home doesn’t make anything better, you might as well have some fun while you do it.
            </p>
            <hr/>
            <h2>Supervisor</h2>
            <p>
              This is where most of my growth came from.
            </p>

            <h3>Takeaways</h3>
            <p>
              <b>1. Lead by example.</b> Respect is earned, not given. During my closing shifts, there were always plenty of tasks to prepare for the next day, 
              and it wasn’t easy to motivate cashiers to take on more after hours of scanning groceries. Instead of simply telling them what to do, I 
              did the tasks alongside them, creating a positive environment and getting the results we needed.
            </p>
            <p>
              <b>2. It is what it is</b> Things can, and will go wrong. People don't show up, customers can be rude, the store 
              can be busy when you don't have many cashiers, the list goes on. The thing is, no amount of complaining will make 
              the situation any better. As the one in charge of the front end, it was my responsibility to do my very best, with 
              what I had.
            </p>
            <p>
              I specifically remember a summer shift early in my time as a supervisor when we were short-staffed across the board. 
              We didn’t have enough cashiers, and to make matters worse, maintenance called out, leaving me without support inside or outside the 
              store. For several hours, I rotated between pushing carts, running a register, covering breaks, and leading 
              the team. It was exhausting, but it taught me that sometimes leadership means stepping in wherever you’re 
              needed and keeping things moving even when circumstances aren’t ideal.
            </p>
            <hr/>
            <h2>Maintenance</h2>
            <p>
              Throughout my time at Price Chopper, I occasionally helped out with maintenance shifts as needed. This involved pushing carts, cleaning 
              bathrooms, emptying garbages, and maintaining the bottle return room. It may not sound glamorous, but it was a nice change of pace 
              from the usual indoor stuff. Nothing beats pushing carts at 9:00pm on a crisp summer evening. Just you, your thoughts, 
              and a line of carts.
            </p>
            <h3>Takeaway</h3>
            <p>
              <b>Taking pride in my work.</b> The tasks were straightforward — emptying garbages, 
              cleaning bathrooms, keeping things in order. I could have gone through the motions, done an average job, and left half-full 
              bins or “clean enough” bathrooms for the morning crew. Instead, I found real satisfaction in giving that extra effort, maybe 
              staying an extra 15 minutes to finish everything and not leave someone else hanging. This mindset has carried over to 
              development work too. Sure, I might spend a whole day perfecting my site’s mobile scaling, but in the end, it’s always worth it.
            </p>
            <hr/>
            <h2>Customer Service Teammate</h2>
            <p>
              After 3 1/2 years of experience, I was asked to work in the office, where my responsibilities included:
              <ul>
                <li>Counting / Handling all of the store's money</li>
                <li>Cashing / Selling lottery tickets</li>
                <li>Processing Money Transfers through Western Union</li>
                <li>Processing Money Orders</li>
                <li>Handling Customer Returns / Complaints</li>
              </ul>
              This was by far my favorite role. My daily customers were nice, I got to do my own thing, and at this point I really felt 
              like I had mastered all aspects of the sales floor. 
              <h3>Takeaway</h3>
              <p>
                <b>Master the fine details.</b> Mistakes in the office carried far greater consequences than anything 
                that could happen on the sales floor. Even once I had a routine, I made a habit of double- and 
                triple-checking my work to ensure accuracy. The last thing I wanted was to put the wrong coin 
                in the money processor or lose track of $500 while balancing my till at the end of the day.
              </p>
            </p>
            <hr/>
            <h2>Reflection</h2>
            <p>
              My time at Price Chopper was invaluable in shaping who I am today. Though that chapter of my life is over, 
              I will always cherish the experiences I had there.
            </p>
            <div id="content-img-container">
              <img src={pcRetired} className="project-img"/>
              <p>
                Me and my coworker on my last day of work.
              </p>
            </div>
          </div>
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