import useNavigateTop from '../hooks/useNavigateTop';

type Props = {
    img: string;
    header: string;
    date?: string | null;
    desc: string;
    nav: string;
    rank: string;
};

export default function PreviewCard({ img, header, date, desc, nav, rank }: Props) {
    const navigateTop = useNavigateTop();
    return (
        <div onClick={() => navigateTop(nav)} className={`project-preview-container main-fly-in-bottom-${rank}`}>
            <img src={img} className="project-image" alt={`${header} preview`} />
            <h2 className="project-preview-header">{header}</h2>
            <p className="experience-date">{date}</p>
            <p className="project-preview-desc">{desc}</p>
        </div>
    );
}
