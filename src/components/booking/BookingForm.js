import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../../utils/WebApi';
import ImgUp from '../../assets/img/reservations/restaurant.jpg';
import ImgDown from '../../assets/img/reservations/restaurant chef B.jpg';


const BookingForm = (props) => {

    const [form, setForm] = useState({
        inputDate: '',
        selectTime: '',
        inputGuest: 1,
        selectOccasion: '',
        radioSeating: 'standard',
        inputName: '',
        inputEmail: '',
        inputPhone: '',
        checkboxTerms: false
    });

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();
        if (submitAPI(form)) {
            navigate('/booking-confirmation');
        }
    }

    return (
        <>
            <section id="reservations">
                <h2>Make your reservation</h2>
                <div className="container">
                    {/* Booking Info */}
                    <div className="form">
                        <form onSubmit={submitForm}>
                            {/* Booking Info */}
                            <h3>Reservation</h3>
                            <label htmlFor="res-date">Date *
                                <input data-testid="res-date" type="date" id="res-date" name="res-date" required value={form.inputDate}
                                    onChange={(e) => {
                                        props.dispatch({ type: 'DATE_CHANGE', date: e.target.value });
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
                                        return <option data-testid="available-time" key={time} value={time}>{time}</option>
                                    }) : console.log('availableTimes is empty')}
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
                            <div className="radio-group" onChange={(e) => setForm({ ...form, radioSeating: e.target.value })}>
                                <label htmlFor="standard">Standard</label>
                                <input type="radio" id="standard" name="seating-options" defaultChecked value="standard" />
                                <label htmlFor="outside">Outside</label>
                                <input type="radio" id="outside" name="seating-options" value="outside" />
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
                                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}[0-9]{2}[0-9]{3}" placeholder="Phone (Optional)" value={form.inputPhone} onChange={(e) => setForm({ ...form, inputPhone: e.target.value })} />
                            </label>
                            <div className="checkbox-terms">
                                <input type="checkbox" id="terms-cond" name="terms-cond" required value={form.checkboxTerms} onChange={(e) => setForm({ ...form, checkboxTerms: e.target.checked })} />
                                <label htmlFor="terms-cond">I agree to terms and conditions *</label>
                            </div>
                            <input type="submit" value="Reserve table" disabled={!form.inputDate || !form.inputName || !form.inputEmail || !form.checkboxTerms} />
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