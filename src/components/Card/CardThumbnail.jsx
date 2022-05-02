export default function CardThumbnail(props) {
    const thumbnailModifier = props.content.bigThumbnail
        ? " card__thumbnail--big"
        : "";
    const thumb2x = props.content.thumbnail2x
        ? ", " + props.content.imgsPath + props.content.thumbnail2x + " 2x"
        : "";
    if (props.content.thumbnail) {
        return (
            <div className={`card__thumbnail${thumbnailModifier}`}>
                <img
                    srcSet={`${props.content.imgsPath}${props.content.thumbnail}${thumb2x}`}
                    className="img-responsive"
                    alt=""
                />
            </div>
        );
    }
}
