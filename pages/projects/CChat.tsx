import { useState } from 'react';
import ReadMoreBtn from '../../components/ReadMoreBtn.tsx'
import Breadcrumbs from '../../components/Breadcrumb.tsx';
import NavButton from '../../components/NavButton.tsx';
import ComingSoon from '../../components/ComingSoon.tsx';

import TechStack from "../../components/TechStack.tsx";

function CChat() {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">CChat</h1>
          </div>
	  <ComingSoon/>
          <div id="text-body">
            <p>
                Client - server architecture with 
            </p>
            <hr/>
            <h2>Tech Stack</h2>
            <TechStack
                sections={[
                {
                    title: "Client (Web)",
                    items: [
                    { name: "Vite", className: "vite" },
                    { name: "React", className: "react" },
                    { name: "TypeScript", className: "ts" }
                    ]
                },
                {
                    title: "Client (GUI)",
                    items: [
                    { name: "QT", className: "qt" }
                    ]
                },
                {
                    title: "Server",
                    items: [
                    { name: "C++", className: "cpp" },
                    ]
                },
                {
                    title: "Infrastructure",
                    items: [
                    { name: "DigitalOcean", className: "digitalocean" },
                    ]
                }
                ]}
            />
            <div className={`${readMore ? '' : 'hide-read-more-container'}`}>
              <hr/>
              <h2>The rest</h2>
            </div>
          </div>
          <ReadMoreBtn
            readMore={readMore}
            setReadMore={setReadMore}
          />
        </div>
        <NavButton
          left="Speed Roulette" leftNav="/projects/speedroulette"
          right="Course Website" rightNav="/projects/psoft"
        />
      </div>
    </>
  );
}

export default CChat;
