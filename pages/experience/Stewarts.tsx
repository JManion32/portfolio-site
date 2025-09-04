import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';

function Stewarts() {
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">IT Field Technician Intern</h1>
          </div>
          <div id="text-body">
            <p>
              During the summer of 2024, I had an internship as an Information Technology Field Technician for 
              Stewart's Shops, a gas station chain in the Northeast. This role was hardware-focused, 
              with a focus on maintenance and troubleshooting.
            </p>
            <hr/>
            <h2>Overview</h2>
            <p>

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