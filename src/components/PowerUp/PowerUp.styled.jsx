import styled from "styled-components";

const PowerUpStyled = styled.div`
   align-items: center;
   display: inline-flex;
   flex-direction: column;
   max-width: 18%;
   text-align: center;
   width: 100%;
`;

const PowerUpImg = styled.img`
   height: clamp(2rem, 5vmin, 2.8rem);
   width: clamp(2rem, 5vmin, 2.8rem); ;
`;
const PowerUpIcon = styled.div`
   font-size: clamp(2rem, 5vmin, 2.8rem);
   max-width: clamp(2rem, 5vmin, 2.8rem);
   width: 100%;
`;
const PowerUpTxt = styled.div`
   padding: 0.7rem 0;
   font-size: 0.9rem;
`;

export { PowerUpStyled, PowerUpImg, PowerUpTxt, PowerUpIcon };
