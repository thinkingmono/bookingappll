import React, { useReducer } from 'react';
import { fetchAPI, submitAPI } from '../../utils/WebApi';
import HeroBook from './HeroBook';
import BookingForm from './BookingForm';
import CallToAction from './CallToAction';

function BookingPage() {

    const initializeTimes = {date: new Date().toJSON().slice(0, 10), times: fetchAPI(new Date())};

    const updateTimes = (state, action) => {
        let fullDate;
        if (action.type === 'DATE_CHANGE') {
            fullDate = new Date(action.date.replace(/-/g, '\/'));
            return { ...state, date: action.date, times: fetchAPI(fullDate) };
        }
    }

    const [state, dispatch] = useReducer(updateTimes, initializeTimes);

    return (
        <>
            <main>
                {/* Hero banner reservation */}
                <HeroBook />
                {/* Reservation Form */}
                <BookingForm availableTimes={state.times} dispatch={dispatch} />
                {/* Weekly Specials */}
                <CallToAction />
            </main>
        </>
    );
}

export default BookingPage;