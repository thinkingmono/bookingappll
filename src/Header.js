import logo from './assets/img/Logo.svg';
import Nav from './Nav';
import './App.css';

function Header() {
    return (
        <>
            <header>
                <div className="app-header">
                    <img src={logo} alt="Little Lemon Logo" className="logo" />
                    <Nav />
                </div>
            </header>
        </>
    );
}

export default Header;