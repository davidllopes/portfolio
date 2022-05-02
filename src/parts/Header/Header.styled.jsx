import styled from "styled-components";

const Header = styled.header`
    background-color: var(--light-bg);
    clip-path: polygon(0 0, 100% 0%, 100% 80%, 0% 100%);
    height: 80vh;
    position: relative;
    width: 100%;
`;

const HeaderVideo = styled.video`
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
`;

const HeaderOverlay = styled.div`
    background: rgb(34, 47, 62);
    background: radial-gradient(
        circle,
        rgba(34, 47, 62, 0.8) 0%,
        rgba(34, 47, 62, 0.9) 100%
    );
    color: white;
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    text-align: center;
    width: 100%;
`;

const HeaderContainer = styled.div`
    background-color: var(--light-bg);
`;

export { Header, HeaderVideo, HeaderOverlay, HeaderContainer };
