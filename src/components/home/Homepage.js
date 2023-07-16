import Hero from './Hero';
import Specials from './specials/Specials';
import About from './About';

function Homepage() {
    return (
        <>
            <main>
                {/* Hero */}
                <Hero />
                {/* Weeks Specials */}
                <Specials />
                {/* About */}
                <About />
            </main>
        </>
    );
}

export default Homepage;