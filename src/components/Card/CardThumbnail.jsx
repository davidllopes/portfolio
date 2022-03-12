export default function CardThumbnail(props) {
    const bigThumbnail = props.content.bigThumbnail
        ? " card__bigThumbnail"
        : "";
    if (props.content.thumbnail) {
        return (
            <>
                <div className={`card__thumbnail${bigThumbnail}`}>
                    <img
                        srcSet={`${props.content.imgsPath}${props.content.thumbnail}`}
                        className="img-responsive"
                        alt=""
                    />
                </div>
            </>
        );
    }
}
