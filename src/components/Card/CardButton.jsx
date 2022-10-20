import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "../Modal/Modal.jsx";

const CardButton = (props) => {
   const [modalIsOpen, setModalOpen] = useState(false);
   const action = props.data.action;

   const handleClick = () => {
      if (action === "URL") {
         window.open(props.data.URL, "_blank");
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
            {props.data.text}
            {action === "URL" && (
               <span>
                  <span> </span>
                  <FontAwesomeIcon icon={faSquareArrowUpRight} />
               </span>
            )}
         </button>
         {modalIsOpen ? (
            <Modal onClose={handleClose}>
               <div></div>
            </Modal>
         ) : (
            ""
         )}
      </>
   );
};

export default CardButton;
