import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "../Modal/Modal.jsx";

const CardButton = ({ data }) => {
   const [modalIsOpen, setModalOpen] = useState(false);
   const action = data.btn.action;

   const handleClick = () => {
      if (action === "URL") {
         window.open(data.URL, "_blank");
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
            {data.btn.text}
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
                  src={`${data.imgsPath + data.imgs[0]}`}
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

export default CardButton;
