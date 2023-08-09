import { Link } from 'react-router-dom';


function Nav() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/" className="nav-item">Home</Link></li>
                    <li><a href="/#about" className="nav-item">About</a></li>
                    <li><a href="/#week-specials" className="nav-item">Menu</a></li>
                    <li><Link to="/reservations" className="nav-item">Reservations</Link></li>
                    <li><Link to="/order-online" className="nav-item">Order Online</Link></li>
                    <li><Link to="/login" className="nav-item">Login</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;