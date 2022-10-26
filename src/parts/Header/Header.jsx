import {
   Header,
   HeaderOverlay,
   HeaderInner,
   HeaderContainer,
   HeaderDescription,
   HeaderCardContainer,
   HeaderCard,
   HeaderCardImg,
} from "./Header.styled";

const HeaderComponent = () => {
   return (
      <HeaderContainer>
         <Header className="Header">
            <HeaderOverlay>
               <HeaderDescription>
                  <h4 className="subheading">
                     a Creative Developer with a passion for coding,
                     interactivity and visual design
                  </h4>
               </HeaderDescription>
               <HeaderInner className="col-8">
                  <h1 className="heading heading--jumbo special-font">
                     Hi, I'm David
                  </h1>
               </HeaderInner>
               <HeaderInner className="col-4 hidden-phone">
                  <HeaderCardContainer className="header-card__container">
                     <HeaderCard
                        className="header-card__card"
                        style={{
                           transform:
                              "rotateY(-5deg) translateX(-30%) translateZ(-8rem)",
                        }}
                     >
                        <HeaderCardImg
                           src="static/assets/imgs/header/header-img-1.png"
                           alt=""
                        />
                     </HeaderCard>
                     <HeaderCard
                        className="header-card__card"
                        style={{
                           transform: "rotateY(-5deg) translateZ(-4rem)",
                        }}
                     >
                        <HeaderCardImg
                           src="static/assets/imgs/header/header-img-2.png"
                           alt=""
                        />
                     </HeaderCard>
                     <HeaderCard
                        className="header-card__card"
                        style={{ transform: "rotateY(-5deg) translateX(30%)" }}
                     >
                        <HeaderCardImg
                           src="static/assets/imgs/header/header-img-3.png"
                           alt=""
                        />
                     </HeaderCard>
                  </HeaderCardContainer>
               </HeaderInner>
            </HeaderOverlay>
         </Header>
      </HeaderContainer>
   );
};

export default HeaderComponent;
