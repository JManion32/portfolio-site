import TextContentPage from '../../components/TextContentPage.tsx';
import NavButton from '../../components/NavButton';
import TextContentHeader from '../../components/TextContentHeader.tsx';
import TextImage from '../../components/TextImage.tsx';

import twitchStats from '../../assets/streamer/twitch-stats.png';
import charityStream from '../../assets/streamer/charity-stream.png';
import coworkerPC from '../../assets/streamer/coworker-pc.jpeg';

function Streamer() {
    return (
        <>
            <TextContentPage
                header={<TextContentHeader title="Twitch Streamer" />}
                navButton={<NavButton left="Hudson Valley" leftNav="/experience/hudsonvalley" />}
                preview={
                    <>
                        <p>From May 2021 to November 2023, I streamed weekly on Twitch. Here are my lifetime stats:</p>
                        <TextImage img={twitchStats} />
                        <hr />
                        <h2>Charity Stream</h2>
                        <p>
                            During the 2022 holiday season, my coworker’s home was lost in a fire. To support him and
                            his family, I organized a charity stream. The response blew away my expectations, with
                            $1,200 being raised in just six hours!
                        </p>
                        <TextImage img={charityStream} />
                        <p>With the funds raised, I built him a new PC and gave the remaining cash to his family.</p>
                        <TextImage img={coworkerPC} />
                        <hr />
                        <p>
                            In November 2023, I made the difficult decision to step away from streaming and focus on my
                            studies, closing this chapter of my life. I’m grateful for the community I built and the
                            memories we shared, and I look forward to the possibility of returning in the future.
                        </p>
                    </>
                }
            />
        </>
    );
}

export default Streamer;
