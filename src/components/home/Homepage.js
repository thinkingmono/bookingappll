import Hero from './Hero';
import Specials from './specials/Specials';
import About from './About';
import Testimonials from './testimonials/Testimonials';

function Homepage() {
    return (
        <>
            <main>
                {/* Hero */}
                <Hero />
                {/* Weeks Specials */}
                <Specials />
                {/*Testimonials*/}
                <Testimonials />
                {/* About */}
                <About />
            </main>
        </>
    );
}

export default Homepage;