import { useEffect, useState } from "react";
import styled from "styled-components";
import FooterContainer from "./components/Footer/Footer";
import HeaderComponent from "./components/Header/Header";
import LoadingAnim from "./components/Loader/Loader";
import RecentWork from "./components/RecentWork/RecentWork.jsx";

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
            setLoadingFinish(true);
        }, 1000);
    }, []);

    return (
        <div className="App">
            {!loadingFinished ? <LoadingAnim style={loaderStyle} /> : ""}
            <AppContainer style={AppContStyle}>
                <HeaderComponent />
                <RecentWork />
                <FooterContainer />
            </AppContainer>
        </div>
    );
}

export default App;
