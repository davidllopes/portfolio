import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ModalContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const ModalBox = styled.div`
    background: white;
    border-radius: 10px;
    max-width: var(--max-width-d);
    min-height: 300px;
    width: 100%;
`;

const Modal = (props) => {
    const handleClose = () => {
        props.onClose();
    };

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
