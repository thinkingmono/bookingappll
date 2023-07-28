import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './components/booking/BookingForm';
import BookingPage from './components/booking/BookingPage';
import { BrowserRouter } from 'react-router-dom';

describe('Book Form Test', () => {
  test('Renders the booking form heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Make your reservation");
    expect(headingElement).toBeInTheDocument();
  });
  test('Check initializeTimes function to return an array with times', () => {
    const { getAllByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const availableTimes = getAllByTestId('available-time');
    expect(availableTimes.length).toBeGreaterThan(0);
  });
  test('Check updateTimes function to return an array with times after date selection', () => {
    const { getByTestId, getAllByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const dateField = getByTestId('res-date');
    expect(dateField).toBeInTheDocument();
    fireEvent.change(dateField, { target: { value: '2023-07-19' } });
    const availableTimes = getAllByTestId('available-time');
    expect(availableTimes.length).toBeGreaterThan(0);
  });
});