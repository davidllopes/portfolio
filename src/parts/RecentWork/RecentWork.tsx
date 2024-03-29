import Card from "../../components/Card/Card";
import CardButton from "../../components/Card/CardButton";
import CardText from "../../components/Card/CardText";
import CardThumbnail from "../../components/Card/CardThumbnail";
import data from "./RecentWork.json";
import "./_recent-work.scss";

const RecentWork = () => {
   const list = data.workCards.map((item) => (
      <Card className="recent" content={item} key={item.title}></Card>
   ));
   return (
      <div>
         <section className="section recent-work">
            <div className="container">
               <h2 className="heading heading--secondary section__title section__title--center">
                  Recent Work
               </h2>
            </div>
            <div className="container crop">
               <div className={`card--heading`}>
                  <div className="">
                     <CardThumbnail content={data.headExample[0]} />
                     <CardText content={data.headExample[0]} />
                     <div className="card__actions">
                        {data.headExample[0].btn && (
                           <CardButton data={data.headExample[0]}></CardButton>
                        )}
                     </div>
                  </div>
               </div>
               <div className="spacer"></div>
            </div>
         </section>
         <section className="section section--alt">
            <div className="spacer spacer--min-space"></div>
            <div className="container">
               <h3 className="heading heading--tertiary section__title">
                  Learning Games
               </h3>
            </div>
            <div className="container columns columns--3cols">{list}</div>
            <div className="spacer"></div>
         </section>
         <section className="section">
            <div className="spacer spacer--min-space"></div>
            <div className="container">
               <h3 className="heading heading--tertiary section__title">
                  More Projects
               </h3>
            </div>
            <div className="container columns columns--2cols">
               <div>
                  <CardThumbnail
                     className="card__thumbnail--cols2"
                     content={data.moreWorkExamples[0]}
                  />
                  <CardText content={data.moreWorkExamples[0]} />
                  <div className="card__actions">
                     {data.moreWorkExamples[0].btn && (
                        <CardButton
                           data={data.moreWorkExamples[0]}
                        ></CardButton>
                     )}
                  </div>
               </div>
               <div>
                  <CardThumbnail
                     className="card__thumbnail--cols2"
                     content={data.moreWorkExamples[1]}
                  />
                  <CardText content={data.moreWorkExamples[1]} />
                  <div className="card__actions">
                     {data.moreWorkExamples[1].btn && (
                        <CardButton
                           data={data.moreWorkExamples[1]}
                        ></CardButton>
                     )}
                  </div>
               </div>
            </div>
            <div className="spacer"></div>
         </section>
      </div>
   );
};

export default RecentWork;
