import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';
import ComingSoon from '../../components/ComingSoon';

function Rensselaer() {
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">Rensselaer Polytechnic Institute</h1>
          </div>
          <ComingSoon/>
          <div id="text-body">
            <p>
              Rensselaer Polytechnic Institute has provided me with hands-on experience, plenty of growth opportunities, 
              and a network of supportive individuals that have enabled me to succeed.
            </p>
            <hr/>
            <h2>Fall 2024</h2>
            <p>
              I knew it was going to be a challenge, but after receiving a 3.94 GPA in community college, 
              how hard could it really be? I was soon to find out...
            </p>
            <h3>Data Structures</h3>
            <p>

            </p>
            <h3>Physics 1</h3>
            <p>

            </p>
            <h3>Multivariable Calculus</h3>
            <p>

            </p>
            <h3>Writing for Technical Communication</h3>
            <p>

            </p>
            <hr/>
            <h2>Spring 2025</h2>
            <p>
              Things weren't looking any easier this semester, but 
            </p>
            <h3>Intro to Algorithms</h3>
            <h3>Principles of Software</h3>
            <h3>Submitty</h3>
            <h3>Linear Algebra</h3>
            <hr/>
            <h2>Fall 2025</h2>
            <p>
              So far, this semester has been great, with each of my courses helping to round out my skill set.
            </p>
            <h3>Database Systems</h3>
            <h3>Programming Languages</h3>
            <h3>Software Analysis and Debugginhg</h3>
            <h3>Submitty</h3>
            <hr/>
            <h2>Reflection</h2>
            <p>
              RPI is awesome.
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