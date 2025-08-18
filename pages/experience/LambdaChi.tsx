import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';

function LambdaChi() {
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="header-row">
            <h1 className="page-header">Lambda Chi Alpha</h1>
          </div>
          <div id="text-body">

          </div>
        </div>
        <NavButton
          left="It Field Technician" leftNav="/experience/stewarts"
          right="Price Chopper" rightNav="/experience/pricechopper"
        />
      </div>
    </>
  );
}

export default LambdaChi;