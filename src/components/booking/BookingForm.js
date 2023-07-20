import React, { useState } from 'react';
import ImgUp from '../../assets/img/reservations/restaurant.jpg';
import ImgDown from '../../assets/img/reservations/restaurant chef B.jpg';


const BookingForm = (props) => {
    const [form, setForm] = useState({
        inputDate: '',
        selectTime: '',
        inputGuest: 1,
        selectOccasion: '',
        radioSeating: '',
        inputName: '',
        inputEmail: '',
        inputPhone: '',
        checkboxTerms: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Your reservation was made successfully');
    }

    return (
        <>
            <section id="reservations">
                <h2>Make your reservation</h2>
                <div className="container">
                    {/* Booking Info */}
                    <div className="form">
                        <form>
                            {/* Booking Info */}
                            <h3>Reservation</h3>
                            <label htmlFor="res-date">Date *
                                <input data-testid="res-date" type="date" id="res-date" name="res-date" required value={form.inputDate}
                                    onChange={(e) => {
                                        // console.log(e.target.value);
                                        props.dispatch({ type: e.target.value });
                                        // console.log(props.availableTimes);
                                        setForm({ ...form, inputDate: e.target.value })
                                    }
                                    } />
                            </label>
                            <label htmlFor="res-time">Time *
                                <select data-testid="res-time" id="res-time " name="res-time" value={form.selectTime}
                                    onChange={(e) => {
                                        setForm({ ...form, selectTime: e.target.value });
                                    }}>
                                    {props.availableTimes ? props.availableTimes.map((time) => {
                                        // console.log('time: '+time+'\n'+'typeof time: '+typeof time);
                                        return <option data-testid="available-time" key={time} value={time}>{time}</option>
                                    }):null}
                                    {/* {console.log('props.availableTimes: ' + props.availableTimes() + '\n' + 'props.availableTimes.length: ' + props.availableTimes().length + '\n' + 'typeof props.availableTimes: ' + typeof props.availableTimes())} */}
                                </select>
                            </label>
                            <label htmlFor="guest">
                                <input type="number" id="guest" name="guest" min="1" max="10" placeholder="Guest *" required value={form.inputGuest} onChange={(e) => setForm({ ...form, inputGuest: e.target.value })} />
                            </label>
                            <label htmlFor="ocassion">Occasion (Optional)
                                <select id="ocassion" name="ocassion" value={form.selectOccasion} onChange={(e) => setForm({ ...form, selectOccasion: e.target.value })}>
                                    <option value=""></option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Engagement">Engagement</option>
                                    <option value="Anniversary">Anniversary</option>
                                </select>
                            </label>
                            <h4>Seating Options *</h4>
                            <div className="radio-group">
                                <label htmlFor="standard">Standard</label>
                                <input type="radio" id="standard" name="seating-options" defaultChecked value={form.radioSeating} onChange={(e) => setForm({ ...form, radioSeating: e.target.value })} />
                                <label htmlFor="outside">Outside</label>
                                <input type="radio" id="outside" name="seating-options" value={form.radioSeating} onChange={(e) => setForm({ ...form, radioSeating: e.target.value })} />
                            </div>
                            {/* Personal Info */}
                            <h3>Personal Information</h3>
                            <label htmlFor="name">
                                <input type="text" id="name" name="name" placeholder="Name *" required value={form.inputName} onChange={(e) => setForm({ ...form, inputName: e.target.value })} />
                            </label>
                            <label htmlFor="email">
                                <input type="email" id="email" name="email" placeholder="Email *" required value={form.inputEmail} onChange={(e) => setForm({ ...form, inputEmail: e.target.value })} />
                            </label>
                            <label htmlFor="phone">
                                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Phone (Optional)" value={form.inputPhone} onChange={(e) => setForm({ ...form, inputPhone: e.target.value })} />
                            </label>
                            <div className="checkbox-terms">
                                <input type="checkbox" id="terms-cond" name="terms-cond" required value={form.checkboxTerms} onChange={(e) => setForm({ ...form, checkboxTerms: e.target.value })} />
                                <label htmlFor="terms-cond">I agree to terms and conditions *</label>
                            </div>
                            <input type="submit" value="Reserve table" onSubmit={handleSubmit} />
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

export default BookingForm;