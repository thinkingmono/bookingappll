
const HeroBook = () => {
    return (
        <>
            <section id="hero-reservations">
                <div className="overlay"></div>
                <div className="container">
                    <div className="hero-call-to-action">
                        <h2>Something special</h2>
                        <h3>Making memories</h3>
                        <p>We are a family owned
                            Mediterranean restaurant,
                            focused on traditional
                            recipes served with a modern
                            twist</p>
                        <a href="#reservations" role="button" className="button-primary">Reserve a table</a>
                    </div>
                    <div className="empty-column">
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroBook;