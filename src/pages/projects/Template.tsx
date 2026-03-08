import { useState } from 'react';
import ReadMoreBtn from '../../components/ReadMoreBtn.tsx';

import Breadcrumbs from '../../components/Breadcrumb.tsx';
import TechStack from '../../components/TechStack.tsx';
import NavButton from '../../components/NavButton.tsx';
//import useNavigateTop from '../../hooks/useNavigateTop.ts';
import TextContentHeader from '../../components/TextContentHeader.tsx';

import srLogo from '../../assets/sr-logo.svg';

function Template() {
    //const navigateTop = useNavigateTop();
    const [readMore, setReadMore] = useState(false);
    return (
        <>
            <div className="page">
                <div className="text-content">
                    <Breadcrumbs />
                    <TextContentHeader
                        title="Template"
                        siteImg={srLogo}
                        siteLink="https://speedroulette.io/"
                        ghLink="https://github.com/JManion32"
                    />
                    <div id="text-body">
                        <TechStack
                            sections={[
                                {
                                    title: 'Front-end',
                                    items: [{ name: 'Vite', className: 'vite' }],
                                },
                            ]}
                        />
                        <div className={`${readMore ? '' : 'hide-read-more-container'}`}></div>
                    </div>
                    <ReadMoreBtn readMore={readMore} setReadMore={setReadMore} />
                </div>
                <NavButton left="Submitty" leftNav="/projects/submitty" right="CChat" rightNav="/projects/cchat" />
            </div>
        </>
    );
}

export default Template;
