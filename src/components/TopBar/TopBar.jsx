import {
   TopBarContainer,
   TopBarStyled,
   SocialsStyled,
   SocialButton,
} from "./TopBar.styled";

const TopBar = () => {
   return (
      <TopBarContainer>
         <TopBarStyled>
            <div className="spacer spacer--min-space"></div>
            <SocialsStyled className="top-bar__socials">
               <SocialButton
                  href="https://www.behance.net/davidllopes"
                  target="_blank"
                  rel="noreferrer"
                  title="Behance"
               >
                  <i class="fa-brands fa-behance" aria-hidden="true"></i>
               </SocialButton>
               <SocialButton
                  href="https://www.linkedin.com/in/davidllopes/"
                  target="_blank"
                  title="LinkedIn"
                  rel="noreferrer"
               >
                  <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
               </SocialButton>
               <SocialButton
                  href="https://www.twitter.com/davidl07"
                  target="_blank"
                  rel="noreferrer"
                  title="Twitter"
               >
                  <i className="fa-brands fa-twitter" aria-hidden="true"></i>
               </SocialButton>
               <SocialButton
                  href="https://dribbble.com/davidl07"
                  target="_blank"
                  rel="noreferrer"
                  title="Dribbble"
               >
                  <i class="fa-brands fa-dribbble" aria-hidden="true"></i>
               </SocialButton>
               <SocialButton
                  href="https://www.pinterest.com/davidllopes"
                  target="_blank"
                  rel="noreferrer"
                  title="Pinterest"
               >
                  <i class="fa-brands fa-pinterest" aria-hidden="true"></i>
               </SocialButton>
            </SocialsStyled>
         </TopBarStyled>
      </TopBarContainer>
   );
};

export default TopBar;
