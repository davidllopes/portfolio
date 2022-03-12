import Card from "../../components/Card/Card";
import data from "./RecentWork.json";

const RecentWork = () => {
    console.log(data);
    const list = data.workExamples.map((item) => (
        <Card className="recent" content={item} key={item.title}></Card>
    ));
    return (
        <section className="section container recent-work">
            <h2 className="section__title">Recent Work</h2>
            {list}
        </section>
    );
};

export default RecentWork;
