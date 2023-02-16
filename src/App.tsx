import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FooterContainer } from "./parts/Footer/Footer";
import HeaderComponent from "./parts/Header/Header";
import { LoadingAnim } from "./components/Loader/Loader";
import RecentWork from "./parts/RecentWork/RecentWork.jsx";
import About from "./parts/About/About";
import TopBar from "./components/TopBar/TopBar";

const AppContainer = styled.div`
    opacity: 0;
    transition: opacity 1s ease-in-out;
`;
function App() {
    const [loadingFinished, setLoadingFinish] = useState(false);
    const [loaderStyle, setLoaderStyle] = useState({});
    const [AppContStyle, setAppContStyle] = useState({});

    useEffect(() => {
        setTimeout(() => {
            setLoaderStyle({ opacity: 0 });
            setAppContStyle({ opacity: 1 });
        }, 1000);
    }, []);

    const loadingDone = () => {
        setLoadingFinish(true);
    };

    return (
        <div className="App">
            {!loadingFinished ? <LoadingAnim style={loaderStyle} /> : ""}
            <AppContainer style={AppContStyle} onTransitionEnd={loadingDone}>
                <HeaderComponent />
                <RecentWork />
                <About />
                <FooterContainer />
                <TopBar></TopBar>
            </AppContainer>
        </div>
    );
}

export default App;
