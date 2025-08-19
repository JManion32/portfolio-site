import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';

function LambdaChi() {
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">Lambda Chi Alpha</h1>
          </div>
          <div id="text-body">

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