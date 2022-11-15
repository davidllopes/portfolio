import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ModalBox, ModalContainer } from "./Modal.styled";
import { useCallback, useEffect } from "react";

const Modal = (props) => {
   const handleClose = useCallback(() => {
      props.onClose();
   }, [props]);

   const handleUserKeyPress = useCallback(
      (event) => {
         const { key, keyCode } = event;
         if (keyCode === 27 || key === 27 || key === "Escape") {
            handleClose();
         }
      },
      [handleClose]
   );

   useEffect(() => {
      window.addEventListener("keydown", handleUserKeyPress);
      return () => {
         window.removeEventListener("keydown", handleUserKeyPress);
      };
   }, [handleUserKeyPress]);

   return (
      <ModalContainer className="modal-container">
         <ModalBox className="modal">
            <button
               className="button modal__close close__btn"
               onClick={handleClose}
            >
               <FontAwesomeIcon icon={faXmark} />
            </button>
            {props.children}
         </ModalBox>
      </ModalContainer>
   );
};

export default Modal;
