import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';

function PriceChopper() {
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="header-row">
            <h1 className="page-header">Price Chopper</h1>
          </div>
          <div id="text-body">

          </div>
        </div>
        <NavButton
          left="Lambda Chi Alpha" leftNav="/experience/lambdachi"
          right="Hudson Valley CC" rightNav="/experience/hudsonvalley"
        />
      </div>
    </>
  );
}

export default PriceChopper;