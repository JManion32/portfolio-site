type TextContentPageProps = {
    breadcrumbs: React.ReactNode;
    header: React.ReactNode;
    main: React.ReactNode;
    readMoreSection?: React.ReactNode;
    readMoreButton?: React.ReactNode;
    navButton: React.ReactNode;
};

function TextContentPage({
    breadcrumbs,
    header,
    main,
    readMoreSection,
    readMoreButton,
    navButton,
}: TextContentPageProps) {
    return (
        <div className="page">
            <div className="text-content">
                {breadcrumbs}
                {header}

                <div id="text-body">
                    {main}
                    {readMoreSection}
                </div>

                {readMoreButton}
            </div>

            {navButton}
        </div>
    );
}

export default TextContentPage;
