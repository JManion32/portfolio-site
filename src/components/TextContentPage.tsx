import { useState } from 'react';
import ReadMoreBtn from './ReadMoreBtn.tsx';
import Breadcrumbs from './Breadcrumb.tsx';

type TextContentPageProps = {
    header: React.ReactNode;
    preview: React.ReactNode;
    main?: React.ReactNode;
    navButton: React.ReactNode;
};

function TextContentPage({ header, preview, main, navButton }: TextContentPageProps) {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className="page">
            <div className="text-content">
                <Breadcrumbs />
                {header}

                <div id="text-body">
                    {preview}
                    <div className={readMore ? '' : 'hide-read-more-container'}>{main}</div>
                </div>

                {main && <ReadMoreBtn readMore={readMore} setReadMore={setReadMore} />}
            </div>

            {navButton}
        </div>
    );
}

export default TextContentPage;
