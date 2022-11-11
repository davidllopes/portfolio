import CardButton from "./CardButton";
import CardText from "./CardText";
import CardThumbnail from "./CardThumbnail";
import "./_card.scss";

const Card = (props) => {
   const alternativeClass = props.content.altLayout ? " card--alternative" : "";
   const headingClass = props.content.headingLayout ? " card--heading" : "";
   return (
      <div
         className={`card card-${props.className}${alternativeClass}${headingClass} card__container`}
      >
         <CardThumbnail content={props.content} />
         <CardText content={props.content} />

         <div className="card__actions">
            {props.content.btn && (
               <CardButton data={props.content}></CardButton>
            )}
         </div>
      </div>
   );
};

export default Card;
