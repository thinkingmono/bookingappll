import Nav from './Nav';
import logo from '../../assets/img/Logo.svg';
import menu from '../../assets/img/icon _hamburger menu.svg';
import basket from '../../assets/img/basket .svg';

function Header() {
    return (
        <>
            <header>
                <div className="app-header">
                    <img src={logo} alt="Little Lemon Logo" className="logo" />
                    <Nav />
                </div>
                <div className="app-header-mobile">
                    <img src={menu} alt="Hamburguer Mobile Menu" className="" />
                    <img src={logo} alt="Little Lemon's Logo" className="" />
                    <img src={basket} alt="Basket Icon" className="" />
                </div>
            </header>
        </>
    );
}

export default Header;