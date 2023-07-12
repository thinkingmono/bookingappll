import logo from './assets/img/little-lemon-logo-white-nobck.png';
import Nav from './Nav';

function Footer() {
    return (
        <>
            <footer>
                <div><img src={logo} alt="Little Lemon Logo" className="logo"/></div>
                <div>
                    <h3>Navigation</h3>
                    <Nav />
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li><a href="/">Address</a></li>
                        <li><a href="tel:+573000000000">Phone Number</a></li>
                        <li><a href="mailto:info@littlelemon.com">Email</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="/">Address</a></li>
                        <li><a href="tel:+573000000000">Phone Number</a></li>
                        <li><a href="mailto:info@littlelemon.com">Email</a></li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default Footer;