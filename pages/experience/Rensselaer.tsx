import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';

function Rensselaer() {
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">Rensselaer Polytechnic Institute</h1>
          </div>
          <div id="text-body">
            <p>
              If I had to describe my experience at RPI in one word, it would be transformative. I try to live without regrets and 
              by the motto, "Everything happens for a reason", but sometimes I can't help but wonder where I would be if I 
              came here as a freshman. I'm beyond thankful for the people, experiences, and lessons. As I've already talked about 
              my campus involvment on other pages of the site (see Lambda Chi Alpha and Submitty), I would like to talk here 
              about how each of my semesters and courses went.
            </p>
            <hr/>
            <h2>Fall 2024</h2>
            <p>
              "It will be a big step, but I'm confident in myself and ready to do whatever it takes."
            </p>
            <p>
              Those were my exact words from an old write up ahead of my first semester at RPI. I knew it was going to be a challenge, 
              but after acheiving a 3.94 at community college, how bad could it really be? I was soon to find out...
            </p>
            <p>
              My course load was fair, and I was only taking 16 credits:
            </p>
            <ul>
              <li>Data Structures</li>
              <li>Physics 1</li>
              <li>Multivariable Calculus</li>
              <li>Writing for Technical Communication</li>
            </ul>
            <p>
              
            </p>
            <hr/>
            <h2>Spring 2025</h2>
            <hr/>
            <h2>Fall 2025</h2>
            <p>
              I'm so excited for this semester! I've learned that I can never be too prepared, but I belive I can conquer this one.
            </p>
          </div>
        </div>
        <NavButton
          right="It Field Technician" rightNav="/experience/stewarts"
        />
      </div>
    </>
  );
}

export default Rensselaer;