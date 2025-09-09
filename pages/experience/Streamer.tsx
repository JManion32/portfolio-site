import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';
import ComingSoon from '../../components/ComingSoon';

function Streamer() {
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">Twitch Streamer</h1>
          </div>
          <ComingSoon/>
          <div id="text-body">

          </div>
        </div>
        <NavButton
          left="Hudson Valley" leftNav="/experience/hudsonvalley"
        />
      </div>
    </>
  );
}

export default Streamer;