import { fireEvent, getAllByTestId, getByTestId, render, screen } from '@testing-library/react';
import BookingForm from './components/booking/BookingForm';
import BookingPage from './components/booking/BookingPage';

describe('Book Form Test', () => {
  test('Renders the booking form heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Make your reservation");
    expect(headingElement).toBeInTheDocument();
  });
  test('Validate available times list change when date field change. First Option', () => {
    const { getByTestId, getAllByTestId } = render(<BookingPage />);
    const dateField = getByTestId('res-date');
    expect(dateField).toBeInTheDocument();
    fireEvent.change(dateField, {target: {value: '2023-07-29'}});
    const availableTimes = getAllByTestId('available-time');
    expect(availableTimes[0].value).toBe('17:00');
    expect(availableTimes[1].value).toBe('18:00');
    expect(availableTimes[2].value).toBe('19:00');
    expect(availableTimes[3].value).toBe('20:00');
    expect(availableTimes[4].value).toBe('21:00');
    expect(availableTimes[5].value).toBe('22:00');
  });
  test('Validate available times list change when date field change. Second Option', () => {
    const { getByTestId, getAllByTestId } = render(<BookingPage />);
    const dateField = getByTestId('res-date');
    expect(dateField).toBeInTheDocument();
    fireEvent.change(dateField, {target: {value: '2023-07-19'}});
    const availableTimes = getAllByTestId('available-time');
    expect(availableTimes[0].value).toBe('08:00');
  });
});