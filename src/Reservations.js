import Restaurant from './assets/img/reservations/restaurant.jpg';
import Chef from './assets/img/reservations/restaurant chef B.jpg';
import Coworkers from './assets/img/reservations/Mario and Adrian A.jpg';
import Coworkers2 from './assets/img/reservations/Mario and Adrian b.jpg';
import Wine from './assets/img/reservations/wine.jpg';
import Salad from './assets/img/reservations/salad.jpg';
import Salmon from './assets/img/reservations/salmon.jpg';
import Bruchetta from './assets/img/home/bruchetta.png';

function Reservations() {
    return (
        <>
            <h1>Reservations</h1>
            <main>
                {/* Hero banner reservation */}
                <section>
                    <div>
                        <div>
                            <h2>Something special</h2>
                            <h3>Meking memories</h3>
                            <p>We are a family owned
                                Mediterranean restaurant,
                                focused on traditional
                                recipes served with a modern
                                twist</p>
                            <a href="/booking" role="button">Reserve a table</a>
                        </div>
                        <div>
                        </div>
                    </div>
                </section>
                {/* Reservation Form */}
                <section>
                    <h2>Make your reservation</h2>
                    <div>
                        <form>
                            {/* Reservation Info */}
                            <h3>Reservation</h3>
                            <label for="date-time">Date/Time *
                                <input type="datetime-local" for="date-time" id="date-time" name="date-time" required />
                            </label>
                            <label for="diners-qty">Diners Qty *
                                <input type="number" for="diners-qty" id="diners-qty" name="diners-qty" min="1" max="10" required />
                            </label>
                            <label for="ocassion">Occasion (Optional)
                                <select id="ocassion" name="ocassion">
                                    <option value="Birthday">Birthday</option>
                                    <option value="Engagement">Engagement</option>
                                    <option value="Anniversary">Anniversary</option>
                                </select>
                            </label>
                            <h4>Seating Options *</h4>
                            <label for="standard">Standard</label>
                            <input type="radio" for="standard" id="standard" name="seating-options" value="Standard" checked />
                            <label for="outside">Outside</label>
                            <input type="radio" for="outside" id="outside" name="seating-options" value="Outside" />
                            {/* Personal Info */}
                            <h3>Personal Information</h3>
                            <label for="name">Name *
                                <input type="text" for="name" id="name" name="name" required />
                            </label>
                            <label for="email">Email *
                                <input type="email" for="email" id="email" name="email" required />
                            </label>
                            <label for="phone">Phone (Optional)
                                <input type="tel" for="phone" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                            </label>
                            <input type="checkbox" for="terms-cond" id="terms-cond" name="terms-cond" required />
                            <label for="terms-cond">I agree to terms and conditions *</label>
                            <input type="submit" value="Book" />
                        </form>
                    </div>
                    <div>
                        <img src={Restaurant} alt="Preview Restaurant" width="400" />
                        <img src={Chef} alt="Chef spicying food" width="400" />
                    </div>
                </section>
                {/* Weekly Specials */}
                <section>
                    <div>
                        <div>
                            <h2>Weekly Specials</h2>
                            <h3>Chef's recommendation</h3>
                            <p>This week enjoy our Grilled Fish with fine spices and a glass of wine. Come and spend a wonderful evening with your love ones.</p>
                            <a href="/specials" role="button">See the specials</a>
                        </div>
                        <div>
                            <img src={Salmon} alt="Dish Salmon" width="250" height="250" />
                            <img src={Wine} alt="Glass of wine" width="250" height="250" />
                            <img src={Salad} alt="Dish of salad" width="250" height="250" />
                            <img src={Bruchetta} alt="Dish of bruchetta" width="250" height="250" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Reservations;