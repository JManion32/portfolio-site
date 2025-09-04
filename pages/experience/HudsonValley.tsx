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
          <p>
            When I enrolled in community college, I was unsure of what I wanted to pursue. Throughout 
            the next two years, I would discover my interest in programming, and would lay a strong foundation 
            for my transfer to university.
          </p>
          <hr/>
          <h2>Freshman Year</h2>
          <p>

          </p>
          <hr/>
          <h2>Sophomore Year</h2>
          <p>

          </p>
          <hr/>
          <h2>Reflection</h2>
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