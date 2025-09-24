import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';
import ComingSoon from '../../components/ComingSoon';

import stewartsLogo from '../../assets/stewarts-logo.png';

function Stewarts() {
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">IT Field Technician Intern</h1>
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
              During the summer of 2024, I had an internship as an Information Technology Field Technician for 
              Stewart's Shops, a gas station chain in the Northeast. This role was hardware-focused, 
              with a focus on maintenance and troubleshooting.
            </p>
            <hr/>
            <h2>Overview</h2>
            <p>
              With over 400 stores across New York, Vermont, and New Hampshire, Stewart's Shops is one of the 
              largest gas station chains in the Northeast. All of the shops are centered around Saratoga, NY (~40 
              minutes north of Albany), where the main office and distribution center is located.
            </p>
            <hr/>
            <h2>Responsibilities</h2>
            <p>

            </p>
            <hr/>
            <h2>Reflection</h2>
            <p>

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