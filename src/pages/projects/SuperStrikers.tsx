import { useState } from 'react';
import ReadMoreBtn from '../../components/ReadMoreBtn.tsx';
import Breadcrumbs from '../../components/Breadcrumb.tsx';
import NavButton from '../../components/NavButton.tsx';
import ComingSoon from '../../components/ComingSoon.tsx';
import TechStack from '../../components/TechStack.tsx';
import TextContentHeader from '../../components/TextContentHeader.tsx';

import ssLogo from '../../assets/ss.svg';
import ssLogin from '../../assets/ss-login.png';

function SuperStrikers() {
    const [readMore, setReadMore] = useState(false);
    return (
        <>
            <div className="page">
                <div className="text-content">
                    <Breadcrumbs />
                    <TextContentHeader
                        title="Super Strikers"
                        siteImg={ssLogo}
                        siteLink="https://superstrikers.io"
                        ghLink="https://github.com/JManion32/super-strikers"
                    />
                    <ComingSoon />
                    <div id="text-body">
                        <p>More info coming soon!</p>
                        <div id="content-img-container">
                            <img src={ssLogin} className="project-img" />
                        </div>
                        <hr />
                        <h2>Tech Stack</h2>
                        <TechStack
                            sections={[
                                {
                                    title: 'Front-end',
                                    items: [
                                        { name: 'Vite', className: 'vite' },
                                        { name: 'React', className: 'react' },
                                        { name: 'TypeScript', className: 'ts' },
                                    ],
                                },
                                {
                                    title: 'Backend & Caching',
                                    items: [
                                        { name: 'C++', className: 'cpp' },
                                        { name: 'Redis', className: 'redis' },
                                    ],
                                },
                                {
                                    title: 'Infrastructure',
                                    items: [{ name: 'DigitalOcean', className: 'digitalocean' }],
                                },
                                {
                                    title: 'Tooling / DevOps',
                                    items: [
                                        { name: 'ESLint', className: 'eslint' },
                                        { name: 'Stylelint', className: 'stylelint' },
                                        { name: 'Prettier', className: 'prettier' },
                                    ],
                                },
                            ]}
                        />
                        <div className={`${readMore ? '' : 'hide-read-more-container'}`}>
                            <hr />
                            <h2>About</h2>
                            <h2>Current MVP</h2>
                            <h2>Future</h2>
                        </div>
                    </div>
                    <ReadMoreBtn readMore={readMore} setReadMore={setReadMore} />
                </div>
                <NavButton
                    left="Course Website"
                    leftNav="/projects/psoft"
                    right="Cookie Coder"
                    rightNav="/projects/cookiecoder"
                />
            </div>
        </>
    );
}

export default SuperStrikers;
