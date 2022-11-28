import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal.jsx";

const Button = ({ children, action, URL, imgsPath, imgs }) => {
   return action === "Link" ? (
      <Link className="button card__button btn--primary" to={URL}>
         {children}
         <span>
            <span> </span>
            <FontAwesomeIcon icon={faSquareArrowUpRight} />
         </span>
      </Link>
   ) : action === "Download" ? (
      <Link
         className="button card__button btn--primary"
         to={URL}
         target="_blank"
         download
      >
         {children}
         <span>
            <span> </span>
            <FontAwesomeIcon icon={faSquareArrowUpRight} />
         </span>
      </Link>
   ) : (
      <ButtonCustom action={action} URL={URL} imgsPath={imgsPath} imgs={imgs}>
         {children}
      </ButtonCustom>
   );
};

const ButtonCustom = ({ action, children, URL, imgsPath, imgs }) => {
   const [modalIsOpen, setModalOpen] = useState(false);

   const handleClick = () => {
      if (action === "URL") {
         window.open(URL, "_blank");
      } else {
         setModalOpen(true);
      }
   };

   const handleClose = () => {
      setModalOpen(false);
   };

   return (
      <>
         <button
            className="button card__button btn--primary"
            onClick={handleClick}
         >
            {children}
            {action === "URL" && (
               <span>
                  <span> </span>
                  <FontAwesomeIcon icon={faSquareArrowUpRight} />
               </span>
            )}
         </button>
         {modalIsOpen ? (
            <Modal onClose={handleClose}>
               <img
                  src={`${imgsPath + imgs[0]}`}
                  className="img-responsive modal__img"
                  alt=""
               />
            </Modal>
         ) : (
            ""
         )}
      </>
   );
};

export default Button;
