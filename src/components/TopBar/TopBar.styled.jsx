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
   font-size: 1.2rem;
   gap: 0.5rem;
`;

const SocialButton = styled.a`
   color: var(--text-primary);
`;

export { TopBarContainer, TopBarStyled, SocialsStyled, SocialButton };