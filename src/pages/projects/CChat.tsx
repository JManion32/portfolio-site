import NavButton from '../../components/NavButton.tsx';
import ComingSoon from '../../components/ComingSoon.tsx';
import TechStack from '../../components/TechStack.tsx';
import TextContentHeader from '../../components/TextContentHeader.tsx';
import TextContentPage from '../../components/TextContentPage.tsx';
import cchatLogo from '../../assets/cchat-logo.svg';
import cchatLogin from '../../assets/cchat-login.png';

export default function CChat() {
    return (
        <>
            <TextContentPage
                header={
                    <TextContentHeader
                        title="CChat"
                        siteImg={cchatLogo}
                        siteLink="https://cchat.fun/"
                        ghLink="https://github.com/JManion32/cchat"
                    />
                }
                navButton={
                    <NavButton
                        left="Speed Roulette"
                        leftNav="/projects/speedroulette"
                        right="Course Website"
                        rightNav="/projects/psoft"
                    />
                }
                preview={
                    <>
                        <ComingSoon />
                        <p>
                            A client–server chat application designed to support real-time messaging between multiple
                            concurrent users. The centralized server manages client connections and routes messages
                            efficiently. CChat features both a native desktop client and a web client, and enables
                            seamless cross-platform communication through a shared protocol.
                        </p>
                        <div id="content-img-container">
                            <img src={cchatLogin} className="project-img" />
                        </div>
                        <hr />
                        <h2>Tech Stack</h2>
                        <TechStack
                            sections={[
                                {
                                    title: 'Client (Web)',
                                    items: [
                                        { name: 'Vite', className: 'vite' },
                                        { name: 'React', className: 'react' },
                                        { name: 'TypeScript', className: 'ts' },
                                    ],
                                },
                                {
                                    title: 'Client (GUI)',
                                    items: [{ name: 'QT', className: 'qt' }],
                                },
                                {
                                    title: 'Server',
                                    items: [{ name: 'C++', className: 'cpp' }],
                                },
                                {
                                    title: 'Infrastructure',
                                    items: [{ name: 'DigitalOcean', className: 'digitalocean' }],
                                },
                            ]}
                        />
                    </>
                }
                main={
                    <>
                        <hr />
                        <h2>Inception</h2>
                        <p>CChat</p>
                        <h2>Implementation</h2>
                        <h2>Future Plans</h2>
                    </>
                }
            />
        </>
    );
}
