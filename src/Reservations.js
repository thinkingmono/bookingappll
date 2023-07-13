import Restaurant from './assets/img/reservations/restaurant.jpg';
import Chef from './assets/img/reservations/restaurant chef B.jpg';

function Reservations() {
    return (
        <>
            <main>
                {/* Hero banner reservation */}
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
                            <a href="/reservations" role="button" className="button-primary">Reserve a table</a>
                        </div>
                        <div className="empty-column">
                        </div>
                    </div>
                </section>
                {/* Reservation Form */}
                <section id="reservations">
                    <h2>Make your reservation</h2>
                    <div className="container">
                        <div className="form">
                            <form>
                                {/* Reservation Info */}
                                <h3>Reservation</h3>
                                <label htmlFor="date-time">Date/Time *
                                    <input type="datetime-local" id="date-time" name="date-time" required />
                                </label>
                                <label htmlFor="diners-qty">
                                    <input type="number" id="diners-qty" name="diners-qty" min="1" max="10" placeholder="Diners Quantity *" required />
                                </label>
                                <label htmlFor="ocassion">Occasion (Optional)
                                    <select id="ocassion" name="ocassion" defaultValue={""}>
                                        <option value=""></option>
                                        <option value="Birthday">Birthday</option>
                                        <option value="Engagement">Engagement</option>
                                        <option value="Anniversary">Anniversary</option>
                                    </select>
                                </label>
                                <h4>Seating Options *</h4>
                                <div className="radio-group">
                                    <label htmlFor="standard">Standard</label>
                                    <input type="radio" id="standard" name="seating-options" value="Standard" defaultChecked />
                                    <label htmlFor="outside">Outside</label>
                                    <input type="radio" id="outside" name="seating-options" value="Outside" />
                                </div>
                                {/* Personal Info */}
                                <h3>Personal Information</h3>
                                <label htmlFor="name">
                                    <input type="text" id="name" name="name" placeholder="Name *" required />
                                </label>
                                <label htmlFor="email">
                                    <input type="email" id="email" name="email" placeholder="Email *" required />
                                </label>
                                <label htmlFor="phone">
                                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Phone (Optional)" />
                                </label>
                                <div className="checkbox-terms">
                                    <input type="checkbox" id="terms-cond" name="terms-cond" required />
                                    <label htmlFor="terms-cond">I agree to terms and conditions *</label>
                                </div>
                                <input type="submit" value="Reserve table" />
                            </form>
                        </div>
                        <div className="images">
                            <div className="img up"></div>
                            <div className="img down"></div>
                            {/* <img src={Restaurant} alt="Preview Restaurant" width="400" />
                            <img src={Chef} alt="Chef spicying food" width="400" /> */}
                        </div>
                    </div>
                </section>
                {/* Weekly Specials */}
                <section id="weekly-specials">
                    <div className="container">
                        <div className="banner-images">
                            <div className="row">
                                <div className="image first"></div>
                                <div className="image second"></div>
                            </div>
                            <div className="row">
                                <div className="image third"></div>
                                <div className="image fourth"></div>
                            </div>
                        </div>
                        <div className="banner-call-to-action">
                            <h2>Weekly Specials</h2>
                            <h3>Chef's recommendation</h3>
                            <p>This week enjoy our Grilled Fish with fine spices and a glass of wine. Come and spend a wonderful evening with your love ones.</p>
                            <a href="/specials" role="button" className="button-primary">See the specials</a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Reservations;