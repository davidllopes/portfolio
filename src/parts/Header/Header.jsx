import Header from "./Header.styled";

const HeaderComponent = () => {
    return (
        <Header className="Header">
            <div>
                <h1 className="jumbo-title">David Lopes</h1>
                <h4 className="sub-title">Web Developer &bull; Designer</h4>
            </div>
        </Header>
    );
};

export default HeaderComponent;
