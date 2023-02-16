import Footer from "./Footer.styled";

export const FooterContainer = () => {
    return (
        <Footer>
            <p>&copy; {new Date().getFullYear()} David Lopes</p>
            <p>&nbsp; </p>
            <p>
                Made with ❤️ and <a href="https://reactjs.org/">React</a>
            </p>
        </Footer>
    );
};
