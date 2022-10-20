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
      <div>
         <section className="section recent-work">
            <div className="container">
               <h2 className="heading heading--secondary section__title">
                  Recent Work
               </h2>
               <div className={`card--heading`}>
                  <div className="">
                     <CardThumbnail content={data.headExample[0]} />
                     <CardText content={data.headExample[0]} />
                  </div>
               </div>
               <div className="spacer"></div>
            </div>
         </section>
         <section className="section section--alt">
            <div className="spacer"></div>
            <div className="container columns columns--3cols">{list}</div>
            <div className="spacer"></div>
         </section>
      </div>
   );
};

export default RecentWork;
