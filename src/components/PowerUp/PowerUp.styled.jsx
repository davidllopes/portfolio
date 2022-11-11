import styled from "styled-components";

const PowerUpStyled = styled.div`
   max-width: 17%;
   text-align: center;
   width: 100%;
`;

const PowerUpImg = styled.img`
   height: clamp(2.5rem, 5vw, 2.8rem);
   width: clamp(2.5rem, 5vw, 2.8rem); ;
`;
const PowerUpIcon = styled.div`
   font-size: clamp(2.5rem, 5vw, 2.8rem);
   width: 100%;
`;
const PowerUpTxt = styled.div`
   padding: 0.7rem 0;
   font-size: 0.9rem;
`;

export { PowerUpStyled, PowerUpImg, PowerUpTxt, PowerUpIcon };
