import styled from "styled-components";

const Header = styled.header`
   background-color: #31e8b8;
   height: 100vh;
   position: relative;
   width: 100%;
`;

const HeaderVideo = styled.video`
   height: 100%;
   left: 0;
   object-fit: cover;
   position: absolute;
   top: 0;
   width: 100%;
   z-index: -1;
`;

const HeaderOverlay = styled.div`
   align-items: center;
   background: rgb(34, 47, 62);
   background: radial-gradient(
      circle,
      rgba(34, 47, 62, 0) 0%,
      rgba(34, 47, 62, 0) 100%
   );
   color: var(--textPrimary);
   display: flex;
   gap: 5%;
   height: 100vh;
   padding: 10%;
   position: relative;
   width: 100%;
`;

const HeaderInner = styled.div`
   width: 100%;
`;

const HeaderContainer = styled.div`
   background-color: var(--light-bg);
`;

const HeaderDescription = styled.div`
   bottom: 10%;
   position: absolute;
   width: 100%;
   max-width: 40%;
`;

const HeaderCardContainer = styled.ul`
   list-type: none;
   max-width: calc(60vmin * (9 / 16));
   min-height: 60vmin;
   perspective: 800px;
   position: relative;
   width: 100%;
`;
const HeaderCard = styled.li`
   border-radius: clamp(1rem, 3vmin, 2rem);
   box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.2);
   height: 100%;
   position: absolute;
   overflow: hidden;
   width: 100%;
`;
const HeaderCardImg = styled.img`
   height: 100%;
   object-fit: cover;
   object-position: top;
   position: absolute;
   width: 100%;
`;

export {
   Header,
   HeaderVideo,
   HeaderOverlay,
   HeaderInner,
   HeaderContainer,
   HeaderDescription,
   HeaderCardContainer,
   HeaderCard,
   HeaderCardImg,
};
