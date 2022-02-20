import styled from "styled-components";

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const Modal = (props) => {
    const handleClose = () => {
        props.onClose();
    };

    return (
        <ModalContainer className="modal-container">
            <div>{props.children}</div>
        </ModalContainer>
    );
};

export default Modal;
