import CardButton from "./CardButton";

const TagList = (props) => {
   return props.tags.map((item) => (
      <span className="tag tag__span" key={item}>
         {item}
      </span>
   ));
};

export default function CardText(props) {
   return (
      <div className="card__text">
         <div className="text__container">
            <h4 className="heading heading--quaternary card__text__title">
               {props.content.title && props.content.title}
            </h4>
            <div
               className={`tags ${
                  props.className ? "tags__" + props.className : ""
               }`}
            >
               <TagList tags={props.content.tech} />
            </div>
            <p>{props.content.description && props.content.description}</p>
            <div className="card__actions">
               {props.content.btn && (
                  <CardButton data={props.content.btn}></CardButton>
               )}
            </div>
         </div>
      </div>
   );
}
