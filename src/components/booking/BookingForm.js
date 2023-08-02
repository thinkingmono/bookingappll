import React, { useState } from 'react';
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

    const [dateError, setDateError] = useState(null);
    const [timeError, setTimeError] = useState(null);
    const [guestError, setGuestError] = useState(null);
    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [termsError, setTermsError] = useState(null);

    const checkName = (e) => {
        let name = e.target.value;
        if (name === '') {
            setNameError('Required field');
            return true;
        } else if (name.length < 3) {
            setNameError('Must be at least 3 character long.');
            return true;
        } else {
            setNameError(null);
            return false;
        }
    }

    const checkEmail = (e) => {
        let email = e.target.value;
        if (email === '') {
            setEmailError('Required field');
            return true;
        } else if (!email.includes('@')) {
            setEmailError('Please insert a valid email address');
            return true;
        } else {
            setEmailError(null);
            return true;
        }
    }

    const checkDate = (e) => {
        if (e.target.value !== '') {
            let date = new Date(e.target.value.replace(/-/g, '\/'));
            let today = new Date();
            if (Date.parse(date) < Date.parse(today)) {
                setDateError('Please select a future date');
                return true;
            } else {
                setDateError(null);
                return false;
            }
        } else {
            setDateError('Required field');
            return true;
        }
    }

    const checkTime = (e) => {
        let time = e.target.value;
        if (time === '') {
            setTimeError('Required field. There are no tables available for this date');
            return true;
        } else {
            return false;
        }
    }

    const checkGuest = (e) => {
        let guest = e.target.value;
        if (guest === '') {
            setGuestError('Required field');
            return true;
        } else if (Number(guest) < 1 || Number(guest) > 10) {
            setGuestError('Guest must be between 1 and 10');
            return true;
        } else {
            setGuestError(null);
            return false;
        }
    }

    const checkTerms = (checked) => {
        let terms = checked;
        if (terms === false) {
            setTermsError('Please accept terms and conditions');
            return true;
        } else {
            setTermsError(null);
            return false;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(form);
    }

    return (
        <>
            <section id="reservations">
                <h2>Make your reservation</h2>
                <div className="container">
                    {/* Booking Info */}
                    <div className="form">
                        <form onSubmit={handleSubmit} noValidate>
                            {/* Booking Info */}
                            <h3>Reservation</h3>
                            <label htmlFor="res-date">Date *
                                <input data-testid="res-date" type="date" id="res-date" name="res-date" required value={form.inputDate}
                                    onChange={(e) => {
                                        props.dispatch({ type: 'DATE_CHANGE', date: e.target.value });
                                        setForm({ ...form, inputDate: e.target.value });
                                        checkDate(e);
                                    }
                                    } aria-invalid={dateError !== null} onBlur={(e) => checkDate(e)} />
                                {dateError && (<p className="input-error">{dateError}</p>)}
                            </label>
                            <label htmlFor="res-time">Time *
                                <select data-testid="res-time" id="res-time" name="res-time" value={form.selectTime}
                                    onChange={(e) => {
                                        setForm({ ...form, selectTime: e.target.value });
                                        checkTime(e);
                                    }} aria-invalid={timeError !== null} onBlur={(e) => checkTime(e)} required>
                                    {props.availableTimes ? props.availableTimes.map((time) => {
                                        return <option data-testid="available-time" key={time} value={time}>{time}</option>
                                    }) : null}
                                </select>
                                {timeError && (<p className="input-error">{timeError}</p>)}
                            </label>
                            <label htmlFor="guest">Guest *
                                <input data-testid="guest" type="number" id="guest" name="guest" min="1" max="10" required value={form.inputGuest} onChange={(e) => {
                                    setForm({ ...form, inputGuest: e.target.value });
                                    checkGuest(e);
                                }} aria-invalid={guestError !== null} onBlur={(e) => checkGuest(e)} />
                                {guestError && (<p className="input-error">{guestError}</p>)}
                            </label>
                            <label htmlFor="ocassion">Occasion
                                <select data-testid="occasion" id="ocassion" name="ocassion" value={form.selectOccasion} onChange={(e) => setForm({ ...form, selectOccasion: e.target.value })}>
                                    <option value=""></option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Engagement">Engagement</option>
                                    <option value="Anniversary">Anniversary</option>
                                </select>
                            </label>
                            <h4>Seating Options *</h4>
                            <div className="radio-group" onChange={(e) => setForm({ ...form, radioSeating: e.target.value })}>
                                <label htmlFor="standard">Standard</label>
                                <input data-testid="standard" type="radio" id="standard" name="seating-options" defaultChecked value="standard" />
                                <label htmlFor="outside">Outside</label>
                                <input data-testid="outside" type="radio" id="outside" name="seating-options" value="outside" />
                            </div>
                            {/* Personal Info */}
                            <h3>Personal Information</h3>
                            <label htmlFor="name">
                                <input data-testid="name" type="text" id="name" name="name" placeholder="Name *" required minLength={3} value={form.inputName} onChange={(e) => {
                                    setForm({ ...form, inputName: e.target.value });
                                    checkName(e);
                                }} aria-invalid={nameError !== null} onBlur={(e) => checkName(e)} />
                                {nameError && (<p className="input-error">{nameError}</p>)}
                            </label>
                            <label htmlFor="email">
                                <input data-testid="email" type="email" id="email" name="email" placeholder="Email *" required value={form.inputEmail} onChange={(e) => {
                                    setForm({ ...form, inputEmail: e.target.value });
                                    checkEmail(e);
                                }} aria-invalid={emailError !== null} onBlur={(e) => checkEmail(e)} />
                                {emailError && (<p className="input-error">{emailError}</p>)}
                            </label>
                            <label htmlFor="phone">
                                <input data-testid="phone" type="tel" id="phone" name="phone" pattern="[0-9]{3}[0-9]{2}[0-9]{3}" placeholder="Phone" value={form.inputPhone} onChange={(e) => setForm({ ...form, inputPhone: e.target.value })} />
                            </label>
                            <div className="checkbox-terms">
                                    <input data-testid="terms-cond" type="checkbox" id="terms-cond" name="terms-cond" required value={form.checkboxTerms} onChange={(e) => {
                                        setForm({ ...form, checkboxTerms: e.target.checked });
                                        checkTerms(e.target.checked);
                                    }} />
                                    <label htmlFor="terms-cond">I agree to terms and conditions *</label>
                                    { termsError && (<p className="input-error">{termsError}</p>)}
                            </div>
                            <input data-testid="submit-btn" type="submit" value="Reserve table" disabled={!form.inputDate || !form.inputName || !form.inputEmail || !form.checkboxTerms} />
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