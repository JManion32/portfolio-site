import TextContentPage from '../../components/TextContentPage.tsx';
import NavButton from '../../components/NavButton.tsx';
import TextContentHeader from '../../components/TextContentHeader.tsx';

import oldFoodDrive from '../../assets/old-lxa-food-drive.png';
import newFoodDrive from '../../assets/new-lxa-food-drive.png';
import smashingPumpkin from '../../assets/smashing-pumpkin.png';
import patioPumpkin from '../../assets/patio-pumpkin.png';
import lxaLogo from '../../assets/lxa-logo.webp';
import lxaGroupPhoto from '../../assets/lxa-group-photo.jpg';

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
                        <div id="content-img-container">
                            <img src={lxaGroupPhoto} className="project-img" />
                        </div>
                    </>
                }
                main={
                    <>
                        <hr />
                        <h2>Secretary</h2>
                        <p>As Secretary, I handled administrative operations to keep our chapter running smoothly.</p>
                        <p>
                            One of the more front-facing responsibilities I had was managing weekly house meetings.
                            Before each meeting, I emailed a reminder to the brotherhood, and prepared the slideshow,
                            officer agenda, and meeting minutes. I took attendance at the start, recorded the minutes
                            during the meeting, finalized them afterward, and sent them out promptly. Though this
                            workflow was initially intimidating, I came to value it, seeing it as the opportunity to
                            write the history of our chapter.
                        </p>
                        <p>
                            Other duties included managing the our roster, keeping the Google Calendar up-to-date,
                            updating mailing lists, maintaining mailboxes, and organizing the Google Drive.
                        </p>
                        <hr />
                        <h2>Director of Recruitment Logistics</h2>
                        <p>
                            Organization is the backbone of successful recruitment. Responsibilities included. preparing
                            bid packets for new members, and printing flyers. In addition, I became a member of the
                            recruitment committee, where we discussed ideas and strategies.
                        </p>
                        <hr />
                        <h2>Webmaster</h2>
                        <p>
                            In recent years, the Webmaster role has been neglected, leaving the site outdated and
                            lacking relevant information. I have worked to bring everything up to date, and establish a
                            system to prevent this from happening again. Before I transition out of the role, I will
                            create a document that will give the inheritor everything necessary to succeed.
                        </p>
                        <p>
                            My ongoing priority is repopulating the site with new event posts, chapter news, and
                            brotherhood achievements. Beyond this, I aim to add a gallery page showcasing the thousands
                            of digitized photos from our archives as well as a dedicated history page celebrating our
                            chapter’s legacy. My goal is to preserve our story and make it easily accessible to all
                            brothers—past, present, and future.
                        </p>
                        <hr />
                        <h2>Philanthropy</h2>
                        <p>
                            Philanthropy is closely tied with the history of our chapter. At the center of this
                            tradition is our semesterly food drive.
                        </p>
                        <div id="content-img-container">
                            <img src={oldFoodDrive} className="project-img" />
                            <p>&Lambda;XA Brothers with the donations they collected, circa 1995</p>
                        </div>
                        <div id="content-img-container">
                            <img src={newFoodDrive} className="project-img" />
                            <p>
                                Fall 2024 Food Drive results (an incredible 3,169 pounds of donations!). This photo was
                                taken in the room that the brothers are standing in front of 30 years prior in the
                                previous image, a testament to our longstanding commitment to philanthropy.
                            </p>
                        </div>
                        <p>
                            Another event we hold each fall is Pumpkin Bash, a community fundraiser where we smash
                            pumpkins to support local charities.
                        </p>
                        <div id="content-img-container">
                            <img src={smashingPumpkin} className="project-img" />
                            <p>Me smashing a pumpkin.</p>
                        </div>
                        <div id="content-img-container">
                            <img src={patioPumpkin} className="project-img" />
                            <p>Pumpkin somehow growing on our patio 10 months after Pumpkin Bash.</p>
                        </div>
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
                            and enjoyable experience. I am grateful to be a part of this amazing brotherhood, and
                            excited for what lies ahead.
                        </p>
                    </>
                }
            />
        </>
    );
}
