import Card from "../Card/Card";
import data from "./RecentWork.json";

const RecentWork = () => {
    console.log(data);
    return (
        <section className="section container recent-work">
            {data.workExamples.map((item) => (
                <Card className="recent" content={item} key={item.title}></Card>
            ))}
        </section>
    );
};

export default RecentWork;
