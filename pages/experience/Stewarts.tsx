import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';

function Stewarts() {
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="header-row">
            <h1 className="page-header">IT Field Technician Intern</h1>
          </div>
          <div id="text-body">

          </div>
        </div>
        <NavButton
          left="Rensselaer Polytechnic Institute" leftNav="/experience/rensselaer"
          right="Lambda Chi Alpha" rightNav="/experience/lambdachi"
        />
      </div>
    </>
  );
}

export default Stewarts;