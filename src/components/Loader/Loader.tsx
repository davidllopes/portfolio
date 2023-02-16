import React from "react";
import styled from "styled-components";

export const Loader = styled.div`
    opacity: 1;
    transition: opacity 1s ease-in-out;
`;

export const LoadingAnim = ({ style }: any) => {
    return (
        <Loader style={style} className="loadingAnim">
            <div className="loader loader1"></div>
            <div className="loader loader2"></div>
            <div className="loader loader3"></div>
            <div className="loader loader4"></div>
        </Loader>
    );
};
