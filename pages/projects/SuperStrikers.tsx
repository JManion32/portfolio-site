import { useState } from 'react';
import ReadMoreBtn from '../../components/ReadMoreBtn.tsx'
import Breadcrumbs from '../../components/Breadcrumb';
import NavButton from '../../components/NavButton';
import ComingSoon from '../../components/ComingSoon.tsx';

import TechStack from "../../components/TechStack";

function SuperStrikers() {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <div className="page">
        <div className="text-content">
          <Breadcrumbs />
          <div className="text-page-header-row">
            <h1 className="text-page-header">Super Strikers</h1>
          </div>
	  <ComingSoon/>
          <div id="text-body">
            <p>
                More info coming soon!
            </p>
            <hr/>
            <h2>Tech Stack</h2>
            <TechStack
                sections={[
                {
                    title: "Front-end",
                    items: [
                    { name: "Vite", className: "vite" },
                    { name: "React", className: "react" },
                    { name: "TypeScript", className: "ts" }
                    ]
                },
                {
                    title: "Backend & Caching",
                    items: [
                    { name: "C++", className: "cpp" },
                    { name: "Redis", className: "redis" }
                    ]
                },
                {
                    title: "Infrastructure",
                    items: [
                    { name: "DigitalOcean", className: "digitalocean" },
                    ]
                },
                {
                    title: "Tooling / DevOps",
                    items: [
                    { name: "ESLint", className: "eslint" },
                    { name: "Stylelint", className: "stylelint" },
                    { name: "Prettier", className: "prettier" },
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
          left="Course Website" leftNav="/projects/psoft"
          right="Cookie Coder" rightNav="/projects/cookiecoder"
        />
      </div>
    </>
  );
}

export default SuperStrikers;
