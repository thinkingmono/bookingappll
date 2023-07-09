import logo from './assets/img/Logo.svg';
import Nav from './Nav';

function Header() {
    return (
        <>
            <header>
                <img src={logo} alt="Little Lemon Logo" />
                <Nav />
            </header>
        </>
    );
}

export default Header;