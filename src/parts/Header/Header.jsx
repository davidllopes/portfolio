import {
    Header,
    HeaderOverlay,
    HeaderVideo,
    HeaderContainer,
} from "./Header.styled";

const HeaderComponent = () => {
    return (
        <HeaderContainer>
            <Header className="Header">
                <HeaderVideo
                    autoPlay={true}
                    muted
                    loop
                    className="header__video"
                >
                    <source
                        src="static/assets/videos/mountains_-_72914.mp4"
                        type="video/mp4"
                    />
                </HeaderVideo>
                <HeaderOverlay>
                    <div>
                        <h1 className="heading heading--jumbo">David Lopes</h1>
                        <h4 className="subheading">
                            Web Developer &bull; Designer
                        </h4>
                    </div>
                </HeaderOverlay>
            </Header>
        </HeaderContainer>
    );
};

export default HeaderComponent;
