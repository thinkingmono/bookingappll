import ImgUp from '../../assets/img/reservations/restaurant.jpg';
import ImgDown from '../../assets/img/reservations/restaurant chef B.jpg';


const BookForm = () => {
    return (
        <>
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
                        <div className="img up"><img src={ImgUp} alt="Restaurant" /></div>
                        <div className="img down"><img src={ImgDown} alt="Chef" /></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BookForm;