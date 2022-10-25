import {
   Header,
   HeaderOverlay,
   HeaderInner,
   HeaderContainer,
   HeaderDescription,
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
                  <ul>
                     <li>Lorem ipsum</li>
                     <li>Lorem ipsum</li>
                     <li>Lorem ipsum</li>
                  </ul>
               </HeaderInner>
            </HeaderOverlay>
         </Header>
      </HeaderContainer>
   );
};

export default HeaderComponent;
