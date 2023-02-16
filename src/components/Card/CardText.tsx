import { HTMLAttributes } from "react";

const TagList = (props) => {
    return props.tags.map((item) => (
        <span className="tag tag__span" key={item}>
            {item}
        </span>
    ));
};

interface ICard extends HTMLAttributes<HTMLElement> {
    content: any;
}
export default function CardText({ content, className }: ICard) {
    return (
        <div className="card__text">
            <div className="text__container">
                <h4 className="heading heading--quaternary card__text__title">
                    {content.title && content.title}
                </h4>
                <div
                    className={`tags ${className ? "tags__" + className : ""}`}
                >
                    <TagList tags={content.tech} />
                </div>
                <p>{content.description && content.description}</p>
            </div>
        </div>
    );
}
