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
              This was my first real job. I worked here from the time I was a sophomore in high school until I was a 
              junior in college, and I gained a lot of valuable soft skills along the way. Over my 4 years and 4 months 
              tenure, I took on various roles, growing from a high school cashier to a leader coworkers could turn to when things went wrong.
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
              of entertainment. If I wanted to enjoy it, I had to create that experience myself. So I put my best effort 
              forward every day to be personable, and genuinely happy to be there. Sulking around and waiting to go 
              home doesn’t make any job better, you might as well have some fun while you do it.
            </p>
            <hr/>
            <h2>Supervisor</h2>
            <p>
              This is where most of my growth came from.
            </p>

            <h3>Takeaways</h3>
            <p>
              <b>1. Lead by example.</b> 
            </p>
            <p>
              <b>2. It is what it is</b> Things can and will go wrong. People don't show up, customers can be rude, the store 
              can be busy when you don't have many cashiers, the list goes on. The thing is, no amount of complaining will make 
              the situation any better. As the person in charge of the front end, it was my responsibility to do my very best to 
              get us through whatever situation we may be facing.
            </p>
            <p>
              I specifically remember when I was a newer supervisor and I had a shift during the afternoon in summer. It was busy
            </p>
            <hr/>
            <h2>Maintenance</h2>
            <p>
              Throughout my time at Price Chopper, I worked occasional maintenance shifts. This involved pushing carts, cleaning 
              bathrooms, emptying garbages, and maintaining the bottle return room. It may not sound glamorous, but it was a nice change of pace 
              from the usual indoor stuff. Nothing beats pushing carts at 9:00pm on a crisp summer evening. Just you, your thoughts, 
              and a line of carts.
            </p>
            <h3>Takeaway</h3>
            <p>
              <b>Taking pride in my work.</b> The tasks were straightforward — emptying garbages, 
              cleaning bathrooms, keeping things in order. I could have gone through the motions, done an average job, and left half-full 
              bins or “clean enough” bathrooms for the morning crew. Instead, I found real satisfaction in staying an extra 15 minutes to 
              finish everything and not leave someone else hanging. This mindset has carried over to development work too. Sure, I might spend 
              a whole day perfecting my site’s mobile scaling, but in the end, it’s always worth it.
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
                <b>Master the fine details.</b> Mistakes in the office are substantially more consquential than anything you can do on 
                the sales floor. Even after forming a solid routine, it included double and triple checking that I was doing the right thing 
                at all times. The last thing I wanted to do was put a coin in the money processor machine, or lose track of $500 when adding up my till 
                at the end of the day.
              </p>
            </p>
            <hr/>
            <h2>Reflection</h2>
            <p>
              My time at Price Chopper was invaluable in shaping who I am today. Though that chapter of my life is over, 
              I still miss seeing my people every day, and will always cherish the experiences I had there.
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