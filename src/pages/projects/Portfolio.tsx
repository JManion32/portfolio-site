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
                        <p>
                            This is my most mature project so far. The code, content, and infrastructure have been 
                            refactored numerous times to simplify future development and maintenance. On the user side, you'll find a 
                            smooth dark mode toggle, responsive scaling, fun animations, and interactive
                            buttons, all crafted with care to make for an engaging presentation of my portfolio.
                        </p>
                        <hr />
                        <h2>Tech Stack</h2>
                        <TechStack
                            sections={[
                                {
                                    title: 'Front-end',
                                    items: [
                                        { name: 'React', className: 'react' },
                                        { name: 'TypeScript', className: 'ts' },
                                        { name: 'Vite', className: 'vite' },
                                    ],
                                },
                                {
                                    title: 'Infrastructure & DevOps',
                                    items: [
                                        { name: 'Docker', className: 'docker' },
                                        { name: 'GitHub Actions', className: 'ghactions' },
                                        { name: 'DigitalOcean', className: 'digitalocean' },
                                        { name: 'AWS Route 53', className: 'route53' },
                                        { name: 'Nginx', className: 'nginx' },
                                    ],
                                },
                            ]}
                        />
                        <hr />
                        <h3>Implementation</h3>
                        <p>
                            A major focus of this project has been maintainability. The site is built from reusable 
                            React components that allow content, layouts, and styling to be shared across pages while 
                            minimizing duplication. As the project has grown, components have been continuously refactored 
                            to improve organization and simplify future development.
                        </p>

                        <p>
                            Styling is managed through a collection of reusable CSS classes. Colors, spacing, typography, 
                            and other visual elements are defined centrally to ensure consistency throughout the site. 
                            This approach makes it easy to update the site's appearance without requiring widespread changes 
                            across the codebase.
                        </p>

                        <p>
                            To support a wide range of screen sizes, the site utilizes a dedicated scaling system that 
                            adjusts layouts, spacing, and typography responsively. Rather than treating responsiveness as an 
                            afterthought, scalability was considered throughout development to provide a consistent experience 
                            across desktop and mobile devices.
                        </p>
                        <h3>Infrastructure</h3>
                        <p>
                            The deployment process for this site has undergone several iterations. Early versions 
                            required manually SSHing into the DigitalOcean droplet to pull changes, rebuild containers, and 
                            restart services. Today, a lightweight CI/CD pipeline built with GitHub Actions paired with Docker 
                            automates deployment, making new changes as simple as typing <code>git push</code>.
                        </p>
                        <hr />
                        <h2>Reflection</h2>
                        <p>
                            Building this site has deepened my understanding of web technologies and dev ops
                            while providing the chance to reflect on past experiences. Through this, I have gained
                            greater confidence in who I am and what I bring to the table.
                        </p>
                    </>
                }
            />
        </>
    );
}
