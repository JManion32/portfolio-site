type TextImageProps = {
    img: string;
    desc?: string;
};

export default function TextImage({ img, desc }: TextImageProps) {
    return (
        <div className="content-img-container">
            <img src={img} />
            <p className={`content-img-container-p ${desc ? '' : 'hide'}`}>{desc}</p>
        </div>
    );
}
