import CardText from "./CardText";
import CardThumbnail from "./CardThumbnail";
import "./Card.scss";

const Card = (props) => {
    const altLayout = props.content.altLayout;
    const alternative = altLayout ? " card--alternative" : "";
    return (
        <div className={`card ${props.className}__card${alternative}`}>
            <CardThumbnail content={props.content} />
            <div className="gutter"></div>
            <CardText content={props.content} />
        </div>
    );
};

export default Card;
