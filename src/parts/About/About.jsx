import PowerUp from "../../components/PowerUp/PowerUp";
import data from "./powerUps.json";

const About = () => {
   const webArray = data.web.map((item) => (
      <PowerUp imgSrc={item.img} icon={item.icon} key={item.name}>
         {item.name}
      </PowerUp>
   ));
   const designArray = data.design.map((item) => (
      <PowerUp imgSrc={item.img} icon={item.icon} key={item.name}>
         {item.name}
      </PowerUp>
   ));
   const otherArray = data.other.map((item) => (
      <PowerUp imgSrc={item.img} icon={item.icon} key={item.name}>
         {item.name}
      </PowerUp>
   ));

   return (
      <>
         <section className="section section--alt">
            <div className="spacer"></div>
            <div className="container">
               <h2 className="heading heading--secondary heading--small-margin">
                  Power ups
               </h2>
               <h4 className="heading heading--quaternary">Knowledge/Skills</h4>
            </div>
            <div className="spacer"></div>
            <div className="container columns">
               <div className="col-6">
                  <h3 className="heading heading--tertiary sub-section__title">
                     Web
                  </h3>
                  <div className="container--flex-wrap">{webArray}</div>
               </div>
               <div className="col-6">
                  <h3 className="heading heading--tertiary sub-section__title">
                     Design
                  </h3>
                  <div className="container--flex-wrap">{designArray}</div>
               </div>
            </div>
            <div className="spacer"></div>
            <div className="container columns">
               <div className="col-6">
                  <h3 className="heading heading--tertiary sub-section__title">
                     Other
                  </h3>
                  <div className="container--flex-wrap">{otherArray}</div>
               </div>
            </div>
            <div className="spacer"></div>
         </section>

         <section className="section">
            <div className="container">
               <h2 className="heading heading--secondary section__title">
                  About me
               </h2>
            </div>

            <div className="container text-cols text-cols--2cols">
               <p>
                  I started my career as a multimedia designer creating engaging
                  interactive content for an eLearning company more than 10
                  years ago.
               </p>
               <p>
                  In more recent years, I've gained strong leadership skills
                  while leading a team of 4 developers, did hiring and
                  upskilling. Constantly improved the team’s skills,
                  implementing new technologies and work practices, such as
                  Sass, React, and BEM methodology, and promoted constant
                  innovation.
               </p>
               <p>
                  Drove the team’s visibility in the organisation by working
                  closely with other departments. Played a significant role in
                  promoting diversity and inclusion, and mental health within
                  the company.
               </p>
               <br />
               <br />
               <p>
                  I'm skilled in various web development languages such as HTML,
                  CSS/Sass, JS, jQuery, React, PHP, SQL.
               </p>
               <p>
                  I’ve always had a passion for creativity and technology. As a
                  leader, I like to focus on the growth and development of my
                  team, diversity and inclusion in the workplace, promoting
                  mental health and contribute to a great company culture.
               </p>
               <p>
                  My front-end development skills, attention to detail and
                  strong aesthetics are my superpowers.
               </p>
               <p>Based in London, UK.</p>
               <div className="spacer"></div>
            </div>
         </section>
      </>
   );
};

export default About;
