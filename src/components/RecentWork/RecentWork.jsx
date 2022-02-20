import Card from "../Card/Card";
import data from "./RecentWork.json";

const RecentWork = () => {
    console.log(data);
    return (
        <section className="section container recent-work">
            <h2 className="section__title">Recent Work</h2>
            {data.workExamples.map((item) => (
                <Card className="recent" content={item} key={item.title}></Card>
            ))}
        </section>
    );
};

export default RecentWork;
