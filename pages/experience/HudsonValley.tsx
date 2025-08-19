import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';

function HudsonValley() {
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">Hudson Valley Community College</h1>
          </div>
          <div id="text-body">

          </div>
        </div>
        <NavButton
          left="Price Chopper" leftNav="/experience/pricechopper"
          right="Streamer" rightNav="/experience/streamer"
        />
      </div>
    </>
  );
}

export default HudsonValley;