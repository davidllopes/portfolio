import styled from "styled-components";

const TopBarContainer = styled.div`
   left: 0;
   position: fixed;
   top: 0;
   width: 100%;
`;

const TopBarStyled = styled.div`
   display: flex;
   margin: auto;
   max-width: var(--max-width-l);
   padding: 1rem;
   width: 100%;
`;

const SocialsStyled = styled.div`
   align-self: right;
   display: flex;
   font-size: 1.4rem;
   gap: 0.8rem;
`;

const SocialButton = styled.a`
   color: var(--text-primary);
   font-weight: bold;
   text-decoration: none;
`;

export { TopBarContainer, TopBarStyled, SocialsStyled, SocialButton };
