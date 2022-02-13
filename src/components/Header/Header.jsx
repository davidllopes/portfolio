import styled from "styled-components";

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    text-align: center;
`;

const HeaderComponent = () => {
    return (
        <Header className="Header">
            <div>
                <h1 className="jumbo-title">David Lopes</h1>
                <h2>Web Developer &bull; Designer</h2>
            </div>
        </Header>
    );
};

export default HeaderComponent;
