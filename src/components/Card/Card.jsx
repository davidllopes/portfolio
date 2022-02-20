import CardButton from "./CardButton";

const Card = (props) => {
    console.log(props.content.img);
    return (
        <div className={`card ${props.className}__card`}>
            {props.content.thumbnail ? (
                <>
                    <div className="card__thumbnail">
                        <img
                            src={`${props.content.imgsPath}${props.content.thumbnail}`}
                            className="img-responsive"
                            alt=""
                        />
                    </div>
                    <div className="gutter"></div>
                </>
            ) : (
                ""
            )}
            <div className="card__text">
                <div className="text__container">
                    <h3 className="card__title">
                        {props.content.title ? props.content.title : ""}
                    </h3>
                    <div className={`tags ${props.className}__tags`}>
                        {props.content.tech.map((item) => (
                            <span className="tags-span__tag" key={item}>
                                {item}
                            </span>
                        ))}
                    </div>
                    <p>
                        {props.content.description
                            ? props.content.description
                            : ""}
                    </p>
                    <div className="card__actions">
                        {props.content.btn ? (
                            <CardButton data={props.content.btn}></CardButton>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
