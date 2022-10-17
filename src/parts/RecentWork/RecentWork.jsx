import Card from "../../components/Card/Card";
import CardText from "../../components/Card/CardText";
import CardThumbnail from "../../components/Card/CardThumbnail";
import data from "./RecentWork.json";
import "./_recent-work.scss";

const RecentWork = () => {
   console.log(data);
   const list = data.workExamples.map((item) => (
      <Card className="recent" content={item} key={item.title}></Card>
   ));
   return (
      <section className="section recent-work">
         <div className="full-width">
            <h2 className="heading heading--secondary section__title">
               Recent Work
            </h2>
         </div>
         <div className={`card card-recent card--heading`}>
            <div className="container">
               <CardThumbnail content={data.headExample[0]} />
               <CardText content={data.headExample[0]} />
            </div>
         </div>
         {list}
      </section>
   );
};

export default RecentWork;
