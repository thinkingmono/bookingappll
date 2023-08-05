import ImgBack from '../../assets/img/home/restauranfood.jpg';
import ImgFront from '../../assets/img/reservations/restaurant.jpg';

const About = () => {
    return (
        <>
            <section id="about">
                <div className="container">
                    <div className="banner-call-to-action">
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus at urna condimentum mattis pellentesque.</p>
                        <a href="/reservations" role="button" className="button-primary" aria-label="Go to booking page">Reserve a table</a>
                    </div>
                    <div className="banner-images">
                        <div className="image back"><img src={ImgBack} alt="Restaurant's Special Dishes" /></div>
                        <div className="image front"><img src={ImgFront} alt="Little Lemon Restaurant" /></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;