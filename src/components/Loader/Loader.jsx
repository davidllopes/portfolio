import styled from "styled-components";

const Loader = styled.div`
    opacity: 1;
    transition: opacity 1s ease-in-out;
`;

const LoadingAnim = (props) => {
    return (
        <Loader style={props.style} className="loadingAnim">
            <div className="loader loader1"></div>
            <div className="loader loader2"></div>
            <div className="loader loader3"></div>
            <div className="loader loader4"></div>
        </Loader>
    );
};

export default LoadingAnim;
