import { HTMLAttributes } from "react";

interface ICardThumbnail extends HTMLAttributes<HTMLElement> {
    content: any;
}

const CardThumbnail = ({ content, className }: ICardThumbnail) => {
    const thumbnailModifier = content.bigThumbnail
        ? " card__thumbnail--big"
        : "";
    const thumb2x = content.thumbnail2x
        ? ", " + content.imgsPath + content.thumbnail2x + " 2x"
        : "";
    if (content.thumbnail) {
        return (
            <div
                className={`card__thumbnail ${thumbnailModifier} ${
                    className ? className : ""
                }`}
            >
                <img
                    srcSet={`${content.imgsPath}${content.thumbnail}${thumb2x}`}
                    className="img-responsive"
                    alt=""
                />
            </div>
        );
    }
};

export default CardThumbnail;
