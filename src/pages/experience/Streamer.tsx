import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';

import twitchStats from '../../assets/twitch-stats.png';
import charityStream from '../../assets/charity-stream.png';
import coworkerPC from '../../assets/coworker-pc.jpeg';

function Streamer() {
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">Twitch Streamer</h1>
          </div>
          <div id="text-body">
            <p>
              From May 2021 to November 2023, I streamed on Twitch around two to three times per week. 
              Here are my lifetime stats:
            </p>
            <div id="content-img-container">
              <img src={twitchStats} className="project-img"/>
            </div>
            <hr/>
            <h2>Charity Stream</h2>
            <p>
              During the 2022 holiday season, my coworker’s home was lost to a fire. To support him and 
              his family, I organized a charity stream. The response 
              blew away my expectations, with $1,200 being raised in just six hours!
            </p>
            <div id="content-img-container">
              <img src={charityStream} className="project-img"/>
            </div>
            <p>
              With the funds raised, I built him a new PC and gave the remaining cash to his family.
            </p>
            <div id="content-img-container">
              <img src={coworkerPC} className="project-img"/>
            </div>
            <hr/>
            <h2>Reflection</h2>
            <p>
              In November 2023, I made the difficult decision to step away from streaming and focus on my studies, 
              closing this chapter of my life. I’m grateful for the community I built and the memories we shared, 
              and I look forward to the possibility of returning in the future.
            </p>
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