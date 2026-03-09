import NavButton from '../../components/NavButton.tsx';
import TextContentHeader from '../../components/TextContentHeader.tsx';
import TextContentPage from '../../components/TextContentPage.tsx';
import TechStack from '../../components/TechStack.tsx';

export default function Portfolio() {
    return (
        <>
            <TextContentPage
                header={
                    <TextContentHeader title="Portfolio Site" ghLink="https://github.com/JManion32/portfolio-site" />
                }
                navButton={<NavButton left="Cookie Coder" leftNav="/projects/cookiecoder" />}
                preview={
                    <>
                        <p>The site you are on right now, for showcasing my experiences. I hope you're enjoying it!</p>
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
                                    title: 'Infrastructure & DevOps',
                                    items: [
                                        { name: 'DigitalOcean', className: 'digitalocean' },
                                        { name: 'AWS Route 53', className: 'route53' },
                                        { name: 'Nginx', className: 'nginx' },
                                        { name: 'Certbot', className: 'certbot' },
                                    ],
                                },
                            ]}
                        />
                        <hr />
                        <h2>Design Goals</h2>
                        <h3>Resume, but better</h3>
                        <p>
                            A resume is limited to only 1 page of content. With this site, I wanted to go beyond bullet
                            points and offer a more detailed view of what I’ve been working on, and who I am.
                        </p>
                        <h3>Responsive / Interactive Experience</h3>
                        <p>
                            You'll find a smooth dark mode toggle, responsive scaling, fun animations, and interactive
                            buttons, all crafted with care to make the UI seamless and engaging. In the future, I intend
                            to add some features that will make for a memorable user experience. Stay tuned!
                        </p>
                        <h3>Optimal Developer Experience</h3>
                        <p>
                            All reused assets on the site have been broken into components. This centralizes design,
                            making it easy to change in the future. I have also set up a CI/CD pipeline which keeps my
                            codebase consistent, and makes deployment as easy as typing <code>git push</code>.
                        </p>
                        <hr />
                        <h2>Reflection</h2>
                        <p>
                            Building this site deepened my understanding of web technologies and gave me the chance to
                            reflect on past experiences. Through that process, I gained greater confidence in who I am
                            and what I bring to the table.
                        </p>
                    </>
                }
            />
        </>
    );
}
