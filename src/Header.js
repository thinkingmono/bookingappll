import Nav from './Nav';
import './App.css';
import logo from './assets/img/Logo.svg';
import menu from './assets/img/icon _hamburger menu.svg';
import basket from './assets/img/basket .svg';

function Header() {
    return (
        <>
            <header>
                <div className="app-header">
                    <img src={logo} alt="Little Lemon Logo" className="logo" />
                    <Nav />
                </div>
                <div className="app-header-mobile">
                    <img src={menu} alt="" className="" />
                    <img src={logo} alt="" className="" />
                    <img src={basket} alt="" className="" />
                </div>
            </header>
        </>
    );
}

export default Header;