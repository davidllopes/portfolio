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
   z-index: 50;
`;

const ModalBox = styled.div`
   background: white;
   border-radius: 10px;
   max-width: var(--max-width-l);
   min-height: 300px;
   padding: 2rem;
   width: 100%;
`;

export { ModalBox, ModalContainer };
