import TextContentPage from '../../components/TextContentPage.tsx';
import NavButton from '../../components/NavButton.tsx';
import TextContentHeader from '../../components/TextContentHeader.tsx';
import TextImage from '../../components/TextImage.tsx';

import oldFoodDrive from '../../assets/lxa/old-lxa-food-drive.png';
import newFoodDrive from '../../assets/lxa/new-lxa-food-drive.png';
import smashingPumpkin from '../../assets/lxa/smashing-pumpkin.png';
import patioPumpkin from '../../assets/lxa/patio-pumpkin.png';
import lxaLogo from '../../assets/lxa/lxa-logo.webp';
import lxaGroupPhoto from '../../assets/lxa/lxa-group-photo.jpg';

export default function LambdaChi() {
    return (
        <>
            <TextContentPage
                header={
                    <TextContentHeader
                        title="Lambda Chi Alpha"
                        siteImg={lxaLogo}
                        siteLink="https://www.lambdachiehz.com"
                    />
                }
                navButton={
                    <NavButton
                        left="IT Technician"
                        leftNav="/experience/stewarts"
                        right="Price Chopper"
                        rightNav="/experience/pricechopper"
                    />
                }
                preview={
                    <>
                        <p>
                            If I had to describe my time at &Lambda;ΧΑ in one word, it would be <i>transformative</i>.
                            Through my experiences here, I’ve grown as a person, friend, and leader.
                        </p>
                        <TextImage img={lxaGroupPhoto} />
                    </>
                }
                main={
                    <>
                        <hr />
                        <h2>Secretary</h2>
                        <p>As Secretary, I handled administrative operations to keep our chapter running smoothly.</p>
                        <p>
                            One of my core responsibilities was managing weekly house meetings. Before each meeting, I
                            emailed a reminder to the brotherhood, and prepared the slideshow, officer agenda, and
                            meeting minutes. I took attendance at the start, recorded the minutes during the meeting,
                            finalized them afterward, and sent them out promptly. Though this workflow was initially
                            intimidating, I came to value it, seeing it as the opportunity to write the history of our
                            chapter.
                        </p>
                        <p>
                            Other duties included managing the our roster, keeping the Google Calendar up-to-date,
                            updating mailing lists, maintaining mailboxes, and organizing the Google Drive.
                        </p>
                        <hr />
                        <h2>Director of Recruitment Logistics</h2>
                        <p>
                            Organization is the backbone of successful recruitment. Responsibilities included preparing
                            bid packets for new members, and printing flyers. I also served as a member of the
                            recruitment committee, where we discussed ideas and strategies.
                        </p>
                        <hr />
                        <h2>Webmaster</h2>
                        <p>
                            When I picked up the Webmaster role, it had been neglected for several years. Our site was
                            out of date, we lacked a steady flow of content, and the position was just generally
                            overlooked.
                        </p>
                        <p>
                            As the Webmaster, I revitalized the site, wrote weekly posts about chapter events,
                            overhauled various pages, and created an extensive transition document to make it easier for
                            my predecessors to maintain the site.
                        </p>
                        <hr />
                        <h2>Philanthropy</h2>
                        <p>
                            Philanthropy is closely tied with the history of our chapter. At the center of this
                            tradition is our semesterly food drive.
                        </p>
                        <TextImage
                            img={oldFoodDrive}
                            desc="&Lambda;XA Brothers with the donations they collected, circa 1995"
                        />
                        <TextImage
                            img={newFoodDrive}
                            desc="Fall 2024 Food Drive results (an incredible 3,169 pounds of donations!). This photo was
                                taken in the room that the brothers are standing in front of 30 years prior in the
                                previous image, a testament to our longstanding commitment to philanthropy."
                        />
                        <p>
                            Another event we hold each fall is Pumpkin Bash, a community fundraiser where we smash
                            pumpkins to support local charities.
                        </p>
                        <TextImage img={smashingPumpkin} desc="Me smashing a pumpkin." />
                        <TextImage
                            img={patioPumpkin}
                            desc="Pumpkin somehow growing on our patio 10 months after Pumpkin Bash."
                        />
                        <p>
                            Our chapter participates in a number of other initiatives such as volunteering at Hope 7, a
                            local community center. We also hold events such as "Bowls on Sunset" and "Phat Sandos",
                            late-night fundraisers where we cook, package, and deliver food to people on campus, with
                            all proceeds going to charity.
                        </p>
                        <hr />
                        <h2>Reflection</h2>
                        <p>
                            Being a part of something greater than myself has turned the grind of college into a unique
                            and enjoyable experience. I am grateful to have experienced this amazing brotherhood, and
                            excited for what lies ahead for us beyond RPI.
                        </p>
                    </>
                }
            />
        </>
    );
}
