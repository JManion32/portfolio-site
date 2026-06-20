import NavButton from '../../components/NavButton.tsx';
import TechStack from '../../components/TechStack.tsx';
import TextContentHeader from '../../components/TextContentHeader.tsx';
import TextContentPage from '../../components/TextContentPage.tsx';
import TextImage from '../../components/TextImage.tsx';
import useNavigateTop from '../../hooks/useNavigateTop.ts';

import cchatLogo from '../../assets/cchat/cchat-logo.svg';
import cchatLogin from '../../assets/cchat/cchat-login.png';
import webClient from '../../assets/cchat/web-client.png';
import guiClient from '../../assets/cchat/gui-client.png';

export default function CChat() {
    const navigateTop = useNavigateTop();
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
                        <p>
                            A client–server chat application designed to support real-time messaging between multiple
                            users on different platforms. The server allows both web and GUI clients to communicate
                            under a shared protocol.
                        </p>
                        <TextImage img={cchatLogin} />
                    </>
                }
                main={
                    <>
                        <hr />
                        <h2>Tech Stack</h2>
                        <TechStack
                            sections={[
                                {
                                    title: 'Web Client',
                                    items: [
                                        { name: 'Vite', className: 'vite' },
                                        { name: 'React', className: 'react' },
                                        { name: 'TypeScript', className: 'ts' },
                                    ],
                                },
                                {
                                    title: 'GUI Client',
                                    items: [
                                        { name: 'C++', className: 'cpp' },
                                        { name: 'QT', className: 'qt' },
                                    ],
                                },
                                {
                                    title: 'Server',
                                    items: [{ name: 'C++', className: 'cpp' }],
                                },
                                {
                                    title: 'Infrastructure',
                                    items: [
                                        { name: 'DigitalOcean', className: 'digitalocean' },
                                        { name: 'CMake', className: 'cmake' },
                                    ],
                                },
                            ]}
                        />
                        <hr />
                        <h2>Inception</h2>
                        <p>
                            CChat started as a project for my Software Analysis and Debugging course, where we were
                            tasked with creating a client-server application using C++ and Qt. Through this project,
                            which I originally named <i>Secure Chatroom</i>, I was introduced to network programming and
                            multithreading. After pouring many hours into delivering a complete assignment, I was
                            excited to broaden my vision and continue development without the pressure of a course
                            grade.
                        </p>
                        <h2>Implementation</h2>
                        <p>
                            The project is broken into 4 distinct subfolders: <code>server</code>,{' '}
                            <code>client_gui</code>,<code>client_site</code>, and <code>shared</code>.
                        </p>
                        <h4>Server</h4>
                        <p>
                            The source of truth for the chatroom. All clients are maintained by it, and coordinates all
                            communication between them.
                        </p>
                        <h4>Clients</h4>
                        <p>
                            The original client was the Qt GUI. It can easily communicate with the server since both are
                            implemented in C++. It was not so simple for the web client, since browsers do not expose
                            raw TCP sockets. To resolve, I added <code>gateway.js</code>. This acts as a protocol
                            translator so the server doesn't have to manage different types of clients.
                        </p>
                        <TextImage img={webClient} desc="Web client" />
                        <TextImage img={guiClient} desc="GUI client" />
                        <h4>Shared</h4>
                        <p>
                            This library contains wrappers for raw sockets and threading. This was more important for my
                            original assignment which required a Windows and Linux implementation, but I have since
                            shifted focus to Linux only.
                        </p>
                        <h4>CMake Usage</h4>
                        <p>
                            Since it was developed on Linux the project used Makefiles to handle builds. To allow for
                            portability to other operating systems such as Windows without the need to manage multiple
                            build systems, I refactored to CMake. The implementation is "boring, but correct", with a
                            top-level <code>CMakeLists.txt</code> which orchestrates the builds of the{' '}
                            <code>server</code>,<code>client_gui</code>, and <code>shared</code> targets.
                        </p>
                        <h2>Future Plans</h2>
                        <p>Live chatting between users is just the beginning of my plans for this project.</p>
                        <h4>Improved Infrastructure</h4>
                        <p>
                            I have recently fallen down the rabbit hole of infrastructure and automation for this
                            portfolio site and{' '}
                            <a onClick={() => navigateTop('/projects/speedroulette')}>Speed Roulette</a>. Such a
                            rennaisance has not yet occurred for CChat. My to-do list includes a GitHub Actions CI/CD
                            pipeline, and Docker addition. I'd also like to take a deeper dive into CMake.
                        </p>
                        <h4>More Client Types</h4>
                        <p>
                            The next one I create will be for the terminal. Perhaps after that I could do GUIs in
                            different languages as well.
                        </p>
                        <h4>Commands</h4>
                        <p>
                            The logical next addition to a chatroom is custom commands. These could allow for a more
                            engaging experience for the user.
                        </p>
                        <h4>Games</h4>
                        <p>
                            Real-time games are fun, and luckily for CChat, the hard part (network communication) has
                            already been completed. Game ideas include Wordle, Hangman, Guess the Word, and 20
                            Questions.
                        </p>
                        <h4>Currency System</h4>
                        <p>
                            With fun games to play, users should be rewarded with currency. This currency could be used
                            to buy themes, badges, and other bling to make you stand out in the chat.
                        </p>
                        <h4>Portability</h4>
                        <p>
                            At the end of the day, this is a simple portfolio project. Once I add more features, perhaps
                            it could provide some value for another one of my projects.
                        </p>
                    </>
                }
            />
        </>
    );
}
