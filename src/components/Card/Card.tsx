import { HTMLAttributes } from "react";
import CardButton from "./CardButton";
import CardText from "./CardText";
import CardThumbnail from "./CardThumbnail";
import "./_card.scss";

interface ICardThumbnail extends HTMLAttributes<HTMLElement> {
    content: any;
}

const Card = ({ content, className }: ICardThumbnail) => {
    const alternativeClass = content.altLayout ? " card--alternative" : "";
    const headingClass = content.headingLayout ? " card--heading" : "";
    return (
        <div
            className={`card card-${className}${alternativeClass}${headingClass} card__container`}
        >
            <CardThumbnail content={content} />
            <CardText content={content} />

            <div className="card__actions">
                {content.btn && <CardButton data={content}></CardButton>}
            </div>
        </div>
    );
};

export default Card;
