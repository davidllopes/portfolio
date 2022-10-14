import {
   Header,
   HeaderOverlay,
   HeaderInner,
   HeaderContainer,
} from "./Header.styled";

const HeaderComponent = () => {
   return (
      <HeaderContainer>
         <Header className="Header">
            <HeaderOverlay>
               <HeaderInner className="col-8">
                  <h1 className="heading heading--jumbo special-font">
                     Hi, I'm David
                  </h1>
                  <h4 className="subheading">
                     a Creative Developer with a passion for coding,
                     interactivity and visual design
                  </h4>
               </HeaderInner>
               <HeaderInner className="col-4">
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
