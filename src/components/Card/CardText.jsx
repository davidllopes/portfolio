import CardButton from "./CardButton";

const TagList = (props) => {
    return props.tags.map((item) => (
        <span className="tags-span__tag" key={item}>
            {item}
        </span>
    ));
};

export default function CardText(props) {
    return (
        <div className="card__text">
            <div className="text__container">
                <h3 className="card__title">
                    {props.content.title && props.content.title}
                </h3>
                <div className={`tags ${props.className}__tags`}>
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
