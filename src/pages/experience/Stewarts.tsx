import TextContentPage from '../../components/TextContentPage.tsx';
import NavButton from '../../components/NavButton.tsx';
import TextContentHeader from '../../components/TextContentHeader.tsx';

import stewartsFleet from '../../assets/stewarts-fleet.jpeg';
import stewartsLogo from '../../assets/stewarts-logo.png';
import stewartsStation from '../../assets/stewarts-gas-station.webp';
import stewartsPlant from '../../assets/stewarts-plant.png';
import apcBackup from '../../assets/apc-backup.avif';
import tupperLunch from '../../assets/tupper-lake-lunch.png';

export default function Stewarts() {
    return (
        <>
            <TextContentPage
                header={
                    <TextContentHeader
                        title="IT Internship"
                        siteImg={stewartsLogo}
                        siteLinkTitle="Stewart's Shops Website"
                        siteLink="https://www.stewartsshops.com/who-we-are/"
                    />
                }
                navButton={
                    <NavButton
                        left="Rensselaer"
                        leftNav="/experience/rensselaer"
                        right="Lambda Chi"
                        rightNav="/experience/lambdachi"
                    />
                }
                preview={
                    <>
                        {' '}
                        <p>
                            During Summer 2024, I was an Information Technology Intern for Stewart's Shops. This role was
                            hardware-focused, with emphasis on maintenance and troubleshooting.
                        </p>
                        <hr />
                        <h2>Overview</h2>
                        <p>
                            With over 400 shops across New York, Vermont, and New Hampshire, Stewart's Shops is one of
                            the largest, most popular gas station chains in the Northeast. All of the shops are centered
                            around Saratoga NY, where the main office and distribution center is located.
                        </p>
                        <div id="content-img-container">
                            <img src={stewartsStation} className="project-img" />
                            <p>Stewart's Shop</p>
                        </div>
                        <div id="content-img-container">
                            <img src={stewartsPlant} className="project-img" />
                            <p>Stewart's Distribution Center</p>
                        </div>
                        <p>
                            I worked in the Technology Center, which functions as the company’s help desk. With an 18
                            person team covering 400+ shops, there was never a shortage of hardware issues to address 
                            both over the phone, and onsite.
                        </p>
                    </>
                }
                main={
                    <>
                        <hr />
                        <h2>Onsite Responsibilities</h2>
                        <p>
                            Since I was a temporary employee, I spent most days on the road. This gave me the unique opportunity 
                            to enjoy the beauty of the Northeast in the summer. Some days were to Lake Placid, others to Vermont, 
                            Syracuse, Cooperstown, even my home town, I was all over the place. Beyond location, each shop had its own personality,
                            making every trip a memorable experience.
                        </p>
                        <div id="content-img-container">
                            <img src={tupperLunch} className="project-img" />
                            <p>Enjoying lunch in the middle of the Adirondacks.</p>
                        </div>
                        <h3>Preventative Maintenance</h3>
                        <p>
                            One of my key responsibilities was preventative maintenance (also called PMs). This involved
                            addressing issues with networking equipment before they occurred. In my time there, I completed 
                            40 of these PMs, or about 10% of all shops.
                        </p>
                        <p>
                            For each PM, there was a checklist of tasks to complete. This list included cleaning and
                            repairing POS registers and the ATM, organizing cables, and replacing any faulty hardware.
                            Though the tasks weren't complex, diligence was essential. The networking infrastructure of
                            these shops is fragile, so any careless mistake could lead to a high-stress situation. To
                            mitigate this, I took a business-first approach. Rather than focusing on efficiency, I
                            proactively communicated with shop personnel so we were all on the same page, ensuring my
                            work never disrupted their operations.
                        </p>
                        <h3>New System Implementation</h3>
                        <p>
                            Throughout the summer, the tech center was in the process of preparing shops for a new
                            register POS system. This implementation would require the addition of two new switches to
                            the shop's networking cage.
                        </p>
                        <p>
                            To prepare for this, there was an ongoing project where 2-3 technicians would go to shops, and
                            do a "cleanup". This was essentially a more thorough PM, with emphasis on the networking
                            cage. This cage was the brain of the shop's infrastructure. Unplugging the wrong cable 
                            could lead to a sales-disrupting outage. Communication with shop personnel was essential 
                            to keep both teams on the same page.
                        </p>
                        <p>
                            Through this project, we prepared many shops for the new system, each time leaving the networking 
                            infrastructure better than when we entered.
                        </p>
                        <hr />
                        <h2>Office Days</h2>
                        <p>
                            Though most days were on the road, I had my share of office time. With a room full of busy 
                            technicians, it was up to me to create work to do.
                        </p>
                        <h3>Shipping</h3>
                        <p>
                            When distant shops required equipment replacements, we often traded parts via shipments.
                            Each day I processed the returned equipment, assessing any damage, fixing what I could, and
                            documenting the results.
                        </p>
                        <h3>Battery Backups</h3>
                        <p>
                            Most of Stewart's Shops' networking equipment is hooked up to battery backups, and for good
                            reason. Frequent storms throughout the summer leave entire areas without power, potentially
                            halting shop operations in their tracks. Enter battery backups, which allow shops to
                            function for several hours with no power.
                        </p>
                        <div id="content-img-container">
                            <img src={apcBackup} className="project-img" />
                            <p>Battery Backup</p>
                        </div>
                        <p>
                            With over 400 shops each equipped with a handful of these backups, they piled up <i>fast</i>{' '}
                            in our office. For each one, I cleaned it,
                            <b>thoroughly</b> tested the receptacles, replaced the battery, and labelled it with the
                            date. I must've processed over 100 during the summer, all of which are out on the field now.
                            Its cool to think that when I walk into a Stewart's Shop, there's a decent chance its being
                            supported by one of my battery backups.
                        </p>
                        <h3>Organizing Vehicles</h3>
                        <p>
                            The tech center has a fleet of vehicles, each stocked with networking equipment. This
                            equipment serves as a backup for onsite technicians, incase they need more than what they
                            brought. On certain office days, I would take inventory of these vehicles, ensuring they
                            were adequately stocked and well organized.
                        </p>
                        <div id="content-img-container">
                            <img src={stewartsFleet} className="project-img" />
                            <p>
                                A portion of the tech center fleet. This picture was taken after I drove the van on the
                                right to Syracuse and back!
                            </p>
                        </div>
                        <h3>Misc Work</h3>
                        <p>
                            Sometimes, there were too many technicians out of the office, no returns to process, and no battery
                            backups to fix up. This was the real challenge of my productivity. On these days, I crimped
                            new cables, sorted through boxes of miscellaneous equipment, and on one occasion, attempted
                            to open digital locks that we lost the combinations to (I was unsuccessful).
                        </p>
                        <hr />
                        <h2>Reflection</h2>
                        <p>
                            This internship may not have been in line with my aspirations, but it gave me invaluable
                            lessons about collaboration and enterprise IT. I spent the summer traveling across the
                            Northeast in tech vans, troubleshooting hardware in fast-paced environments, and building
                            relationships with people who made the experience memorable. Stewart's Shops is a fantastic
                            company, and I am beyond grateful to have spent my summer there.
                        </p>
                    </>
                }
            />
        </>
    );
}
