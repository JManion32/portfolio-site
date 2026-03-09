import Breadcrumbs from '../../components/Breadcrumb.tsx';
//import TechStack from '../../components/TechStack.tsx';
import NavButton from '../../components/NavButton.tsx';
//import useNavigateTop from '../../hooks/useNavigateTop.ts';
import TextContentHeader from '../../components/TextContentHeader.tsx';
import TextContentPage from '../../components/TextContentPage.tsx';

import srLogo from '../../assets/sr-logo.svg';

export default function Template() {
    //const navigateTop = useNavigateTop();

    return (
        <TextContentPage
            breadcrumbs={<Breadcrumbs />}
            header={
                <TextContentHeader
                    title="Speed Roulette"
                    siteImg={srLogo}
                    siteLink="https://speedroulette.io/"
                    ghLink="https://github.com/JManion32/speed-roulette"
                />
            }
            navButton={
                <NavButton left="Submitty" leftNav="/projects/submitty" right="CChat" rightNav="/projects/cchat" />
            }
            preview={<></>}
            main={<></>}
        />
    );
}
