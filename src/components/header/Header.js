import React, { useState } from 'react';
import Nav from './Nav';
import logo from '../../assets/img/Logo.svg';
import menu from '../../assets/img/icon _hamburger menu.svg';
import basket from '../../assets/img/basket .svg';

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <header>
                <div className="app-header">
                    <img src={logo} alt="Little Lemon Logo" className="logo" />
                    <Nav />
                </div>
                <div className="app-header-mobile">
                    <div className='menu-mobile'>
                        <img src={menu} alt="Hamburguer Mobile Menu" className="hamburguer-menu-icon" onClick={() => setShowMenu(!showMenu)}/>
                        {showMenu ? (
                            <div className='side-menu'>
                                <span className='close-btn' onClick={() => setShowMenu(false)}>X</span>
                                <Nav />
                            </div>
                        ) : null}
                    </div>
                    <img src={logo} alt="Little Lemon's Logo" className="logo-mobile" />
                    <img src={basket} alt="Basket Icon" className="basket-mobile" />
                </div>
            </header>
        </>
    );
}

export default Header;