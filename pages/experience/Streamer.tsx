import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';

function Streamer() {
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="header-row">
            <h1 className="page-header">Twitch Streamer</h1>
          </div>
          <div id="text-body">

          </div>
        </div>
        <NavButton
          left="Hudson Valley CC" leftNav="/experience/hudsonvalley"
        />
      </div>
    </>
  );
}

export default Streamer;