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

export { ModalBox, ModalContainer };
