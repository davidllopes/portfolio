import { useState } from "react";
import Modal from "../Modal/Modal.jsx";

const CardButton = (props) => {
    const [modalIsOpen, setModalOpen] = useState(false);

    const handleClick = () => {
        if (props.data.action === "modal") {
            setModalOpen(true);
        }
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <button className="button card__button" onClick={handleClick}>
                {props.data.text}
            </button>
            {modalIsOpen ? (
                <Modal onClose={handleClose}>
                    <div></div>
                </Modal>
            ) : (
                ""
            )}
        </div>
    );
};

export default CardButton;
