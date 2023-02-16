import {
   PowerUpImg,
   PowerUpStyled,
   PowerUpTxt,
   PowerUpIcon,
} from "./PowerUp.styled";

const PowerUp = ({ imgSrc, children, icon }) => {
   return (
      <PowerUpStyled className="power-up">
         {imgSrc ? (
            <PowerUpImg
               className="power-up__img"
               src={`static/assets/imgs/skills/${imgSrc}`}
            />
         ) : (
            ``
         )}
         {icon ? (
            <PowerUpIcon>
               <i className={icon}></i>
            </PowerUpIcon>
         ) : (
            ``
         )}
         <PowerUpTxt className="power-up__text">{children}</PowerUpTxt>
      </PowerUpStyled>
   );
};

export default PowerUp;
