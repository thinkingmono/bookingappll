import heroImg from '../../assets/img/home/restauranfood.jpg';

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
                        <a href="/reservations" role="button" className="button-primary">Reserve a table</a>
                    </div>
                    <div className="hero-image">
                        <img src={heroImg} alt="Dish example" width="375" height="400" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;