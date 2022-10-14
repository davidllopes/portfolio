import Card from "../../components/Card/Card";
import data from "./RecentWork.json";
import "./_recent-work.scss";

const RecentWork = () => {
   console.log(data);
   const list = data.workExamples.map((item) => (
      <Card className="recent" content={item} key={item.title}></Card>
   ));
   return (
      <section className="section recent-work">
         <Card className="recent" content={data.workExamples[0]}></Card>
         <div className="full-width">
            <h2 className="heading heading--secondary section__title">
               Recent Work
            </h2>
         </div>
         {list}
      </section>
   );
};

export default RecentWork;
