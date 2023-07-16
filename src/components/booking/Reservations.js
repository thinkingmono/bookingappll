import HeroBook from './HeroBook';
import BookForm from './BookForm';
import CallToAction from './CallToAction';

function Reservations() {
    return (
        <>
            <main>
                {/* Hero banner reservation */}
                <HeroBook />
                {/* Reservation Form */}
                <BookForm />
                {/* Weekly Specials */}
                <CallToAction />
            </main>
        </>
    );
}

export default Reservations;