import logo from './assets/img/Logo.svg';

function Footer() {
    return (
        <>
            <footer>
                <div><img src={logo} alt="Little Lemon Logo" /></div>
                <div>
                    <h3>Navigation</h3>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/Menu">Menu</a></li>
                            <li><a href="/Reservations">Reservations</a></li>
                            <li><a href="/Order Online">Order Online</a></li>
                            <li><a href="/Login">Login</a></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h3>Contact</h3>
                    <nav>
                        <ul>
                            <li><a href="/">Address</a></li>
                            <li><a href="tel:+573000000000">Phone Number</a></li>
                            <li><a href="mailto:info@littlelemon.com">Email</a></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <nav>
                        <ul>
                            <li><a href="/">Address</a></li>
                            <li><a href="tel:+573000000000">Phone Number</a></li>
                            <li><a href="mailto:info@littlelemon.com">Email</a></li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </>
    );
}

export default Footer;