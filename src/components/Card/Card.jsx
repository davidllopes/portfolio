const Card = (props) => {
    return (
        <div className={`card ${props.className}__card`}>
            <h2>{props.content.title ? props.content.title : ""}</h2>
            <p>{props.content.description ? props.content.description : ""}</p>
            <div className={`tags ${props.className}__tags`}>
                {props.content.tech.map((item) => (
                    <span className="tags-span__tag" key={item}>
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Card;
