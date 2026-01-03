import { useState } from 'react';
import ReadMoreBtn from '../../components/ReadMoreBtn.tsx'
import Breadcrumbs from '../../components/Breadcrumb.tsx';
import NavButton from '../../components/NavButton.tsx';

import TechStack from "../../components/TechStack.tsx";

function SecureChatroom() {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">Secure Chatroom</h1>
          </div>
          <div id="text-body">
            <p>
                More info coming soon!
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
                    title: "Client (Executable)",
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

export default SecureChatroom;