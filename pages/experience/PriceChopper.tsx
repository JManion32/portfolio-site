import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';

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