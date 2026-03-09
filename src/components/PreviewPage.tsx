type PreviewPageProps = {
    header: string;
    desc: string;
    grid: React.ReactNode;
    navButton: React.ReactNode;
};

export default function PreviewPage({ header, desc, grid, navButton }: PreviewPageProps) {
    return (
        <>
            <div className="page">
                <div className="content">
                    <div className="main-fly-in-bottom">
                        <h1 className="main-page-header">{header}</h1>
                        <p className="main-page-desc">{desc}</p>
                    </div>
                    <div className="project-grid">{grid}</div>
                </div>
                {navButton}
            </div>
        </>
    );
}
