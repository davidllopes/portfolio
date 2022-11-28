import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "../Modal/Modal.jsx";

const Button = ({ action, children, URL, imgsPath, imgs }) => {
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
