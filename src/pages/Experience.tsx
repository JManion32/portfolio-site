import PreviewPage from '../components/PreviewPage.tsx';
import PreviewCard from '../components/PreviewCard';
import NavButton from '../components/NavButton';

import rpiSeal from '../assets/rpi-seal.png';
import stewartsLogo from '../assets/stewarts-logo.png';
import lxaLogo from '../assets/lxa-logo.webp';
import priceChopper from '../assets/price-chopper.png';
import hvccGreen from '../assets/hvcc-green.png';
import twitchLogo from '../assets/twitch-logo.png';

function Experience() {
    return (
        <>
            <PreviewPage
                header="Experience"
                desc="Click on an experience to learn more!"
                navButton={<NavButton left="Projects" leftNav="/projects" right="Resume" rightNav="/resume" />}
                grid={
                    <>
                        <PreviewCard
                            img={rpiSeal}
                            header="Rensselaer Polytechnic Institute"
                            date="August 2024 - May 2026"
                            desc="Pursuing a Bachelor's of Science in Computer Science."
                            nav="/experience/Rensselaer"
                            rank="1"
                        />
                        <PreviewCard
                            img={stewartsLogo}
                            header="IT Technician Intern"
                            date="May 2024 - August 2024"
                            desc="On-site technician responsible for troubleshooting and maintaining hardware in fast-paced environments."
                            nav="/experience/Stewarts"
                            rank="2"
                        />
                        <PreviewCard
                            img={lxaLogo}
                            header="Lambda Chi Alpha"
                            date="August 2024 - Present"
                            desc="Secretary, Webmaster, and Brother."
                            nav="/experience/LambdaChi"
                            rank="3"
                        />
                        <PreviewCard
                            img={priceChopper}
                            header="Price Chopper"
                            date="June 2020 - October 2024"
                            desc="Shift Supervisor, Office Teammate, Cashier, and Maintenance."
                            nav="/experience/PriceChopper"
                            rank="4"
                        />
                        <PreviewCard
                            img={hvccGreen}
                            header="Hudson Valley Community College"
                            date="August 2022 - May 2024"
                            desc="Associates Degree in Computer Information Systems."
                            nav="/experience/HudsonValley"
                            rank="5"
                        />
                        <PreviewCard
                            img={twitchLogo}
                            header="Twitch Streamer"
                            date="December 2020 - November 2023"
                            desc="Daily livestreams averaging 11 concurrent viewers across 928 hours streamed."
                            nav="/experience/Streamer"
                            rank="6"
                        />
                    </>
                }
            />
        </>
    );
}

export default Experience;
