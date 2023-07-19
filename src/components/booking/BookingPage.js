import React, { useState, useReducer } from 'react';
import HeroBook from './HeroBook';
import BookingForm from './BookingForm';
import CallToAction from './CallToAction';

const updateTimes = (state, action) => {
    // console.log(action.type+'\n'+typeof action.type+'\n'+(action.type !== '2023-07-29'));
    if (action.type !== '2023-07-29') {
        state = ['08:00'];
    }else{
        state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    }
    return state;
}

function BookingPage() {
    const initializeTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    const [state, dispatch] = useReducer(updateTimes, initializeTimes);

    return (
        <>
            <main>
                {/* Hero banner reservation */}
                <HeroBook />
                {/* Reservation Form */}
                <BookingForm availableTimes={state} dispatch={dispatch} />
                {/* Weekly Specials */}
                <CallToAction />
            </main>
        </>
    );
}

export default BookingPage;