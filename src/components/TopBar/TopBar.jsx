import { Link } from "react-router-dom";
import {
    TopBarContainer,
    TopBarStyled,
    SocialsStyled,
    SocialButton,
} from "./TopBar.styled";

const TopBar = () => {
    return (
        <TopBarContainer>
            <TopBarStyled className="top-bar__container">
                <div className="spacer spacer--min-space"></div>
                <SocialsStyled className="top-bar__socials">
                    <Link
                        className=""
                        to="/static/docs/CV_David_Lopes.pdf"
                        title="CV David Lopes"
                        target="_blank"
                        download
                    >
                        CV
                    </Link>
                    <SocialButton
                        href="https://www.github.com/davidllopes/"
                        target="_blank"
                        title="GitHub"
                        rel="noreferrer"
                    >
                        <i
                            className="fa-brands fa-github"
                            aria-hidden="true"
                        ></i>
                    </SocialButton>
                    <SocialButton
                        href="https://www.behance.net/davidllopes"
                        target="_blank"
                        rel="noreferrer"
                        title="Behance"
                    >
                        <i
                            className="fa-brands fa-behance"
                            aria-hidden="true"
                        ></i>
                    </SocialButton>
                    <SocialButton
                        href="https://www.linkedin.com/in/davidllopes/"
                        target="_blank"
                        title="LinkedIn"
                        rel="noreferrer"
                    >
                        <i
                            className="fa-brands fa-linkedin"
                            aria-hidden="true"
                        ></i>
                    </SocialButton>
                    <SocialButton
                        href="https://www.twitter.com/davidl07"
                        target="_blank"
                        rel="noreferrer"
                        title="Twitter"
                    >
                        <i
                            className="fa-brands fa-twitter"
                            aria-hidden="true"
                        ></i>
                    </SocialButton>
                    <SocialButton
                        href="https://dribbble.com/davidl07"
                        target="_blank"
                        rel="noreferrer"
                        title="Dribbble"
                    >
                        <i
                            className="fa-brands fa-dribbble"
                            aria-hidden="true"
                        ></i>
                    </SocialButton>
                    <SocialButton
                        href="https://www.pinterest.com/davidllopes"
                        target="_blank"
                        rel="noreferrer"
                        title="Pinterest"
                    >
                        <i
                            className="fa-brands fa-pinterest"
                            aria-hidden="true"
                        ></i>
                    </SocialButton>
                </SocialsStyled>
            </TopBarStyled>
        </TopBarContainer>
    );
};

export default TopBar;
