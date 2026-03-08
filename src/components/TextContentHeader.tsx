import githubLight from '../assets/github-mark.png';
import githubDark from '../assets/github-mark-white.png';
import '../css/text-body-formatting.css';

type TextContentHeaderProps = {
    title: string;
    siteImg?: string;
    siteLink?: string;
    siteLinkTitle?: string;
    ghLink?: string;
};

export default function TextContentHeader({ title, siteImg, siteLink, siteLinkTitle, ghLink }: TextContentHeaderProps) {
    return (
        <div className="text-page-header-row">
            <h1 className="text-page-header">{title}</h1>
            {siteLink && (
                <button
                    className="contact-button project-contact-btn"
                    title={siteLinkTitle ?? `${title} Website`}
                    onClick={() => window.open(siteLink, '_blank')}
                >
                    <img src={siteImg} className="contact-image" />
                </button>
            )}
            {ghLink && (
                <button
                    className="contact-button project-contact-btn"
                    title={title + ' Repository'}
                    onClick={() => window.open(ghLink, '_blank')}
                >
                    <div className="github-image-wrapper">
                        <img src={githubLight} className="github-image light" />
                        <img src={githubDark} className="github-image dark" />
                    </div>
                </button>
            )}
        </div>
    );
}
