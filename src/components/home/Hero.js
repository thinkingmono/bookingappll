import heroImg from '../../assets/img/home/restauranfood.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <section id="hero-banner">
                <div className="container">
                    <div className="hero-call-to-action">
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>We are a family owned
                            Mediterranean restaurant,
                            focused on traditional
                            recipes served with a modern
                            twist</p>
                        {/* <a href="/reservations" role="button" className="button-primary" aria-label="Go to booking page">Reserve a table</a> */}
                        <Link to="/reservations" className="button-primary" aria-label="Go to booking page">Reserve a table</Link>
                    </div>
                    <div className="hero-image">
                        <img src={heroImg} alt="Restaurant's food show" width="375" height="400" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;