import NavButton from '../../components/NavButton.tsx';
import ComingSoon from '../../components/ComingSoon.tsx';
import TechStack from '../../components/TechStack.tsx';
import TextContentHeader from '../../components/TextContentHeader.tsx';
import TextContentPage from '../../components/TextContentPage.tsx';

import ssLogo from '../../assets/ss.svg';
import ssLogin from '../../assets/ss-login.png';

export default function SuperStrikers() {
    return (
        <>
            <TextContentPage
                header={
                    <TextContentHeader
                        title="Super Strikers"
                        siteImg={ssLogo}
                        siteLink="https://superstrikers.io"
                        ghLink="https://github.com/JManion32/super-strikers"
                    />
                }
                navButton={
                    <NavButton
                        left="Course Website"
                        leftNav="/projects/psoft"
                        right="Cookie Coder"
                        rightNav="/projects/cookiecoder"
                    />
                }
                preview={
                    <>
                        <ComingSoon />
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
                    </>
                }
                main={
                    <>
                        <hr />
                        <h2>About</h2>
                        <h2>Current MVP</h2>
                        <h2>Future</h2>
                    </>
                }
            />
        </>
    );
}
