import { Link } from 'react-router-dom';


function Nav() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/" className="nav-item">Home</Link></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><Link to="/reservations" className="nav-item">Reservations</Link></li>
                    <li><a href="#order-online">Order Online</a></li>
                    <li><Link to="/login" className="nav-item">Login</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;