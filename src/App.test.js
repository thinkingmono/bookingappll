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
  /*INPUT ATTRIBUTES VALIDATION*/
  test('Check date input attributes', () => {
    const { getByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const dateField = getByTestId('res-date');
    expect(dateField).toBeInTheDocument();
    expect(dateField).toHaveAttribute('type', 'date');
    expect(dateField).toHaveAttribute('id', 'res-date');
    expect(dateField).toHaveAttribute('name', 'res-date');
    expect(dateField).toBeRequired();
  });
  test('Check time input attributes', () => {
    const { getByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const timeField = getByTestId('res-time');
    expect(timeField).toBeInTheDocument();
    expect(timeField).toHaveAttribute('id', 'res-time');
    expect(timeField).toHaveAttribute('name', 'res-time');
    expect(timeField).toBeRequired();
  });
  test('Check guest input attributes', () => {
    const { getByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const guestField = getByTestId('guest');
    expect(guestField).toBeInTheDocument();
    expect(guestField).toHaveAttribute('type', 'number');
    expect(guestField).toHaveAttribute('id', 'guest');
    expect(guestField).toHaveAttribute('name', 'guest');
    expect(guestField).toHaveAttribute('min', '1');
    expect(guestField).toHaveAttribute('max', '10');
    expect(guestField).toBeRequired();
  });
  test('Check occasion select attributes', () => {
    const { getByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const occasionField = getByTestId('occasion');
    expect(occasionField).toBeInTheDocument();
    expect(occasionField).toHaveAttribute('id', 'ocassion');
    expect(occasionField).toHaveAttribute('name', 'ocassion');
    expect(occasionField).not.toBeRequired();
  });
  test('Check seating standard input attributes', () => {
    const { getByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const standardRadio = getByTestId('standard');
    expect(standardRadio).toBeInTheDocument();
    expect(standardRadio).toHaveAttribute('type', 'radio');
    expect(standardRadio).toHaveAttribute('id', 'standard');
    expect(standardRadio).toHaveAttribute('name', 'seating-options');
    expect(standardRadio).not.toBeRequired();
    expect(standardRadio).toBeChecked();
  });
  test('Check seating outside input attributes', () => {
    const { getByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const outsideRadio = getByTestId('outside');
    expect(outsideRadio).toBeInTheDocument();
    expect(outsideRadio).toHaveAttribute('type', 'radio');
    expect(outsideRadio).toHaveAttribute('id', 'outside');
    expect(outsideRadio).toHaveAttribute('name', 'seating-options');
    expect(outsideRadio).not.toBeRequired();
    expect(outsideRadio).not.toBeChecked();
  });
  test('Check name input attributes', () => {
    const { getByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const nameField = getByTestId('name');
    expect(nameField).toBeInTheDocument();
    expect(nameField).toHaveAttribute('type', 'text');
    expect(nameField).toHaveAttribute('id', 'name');
    expect(nameField).toHaveAttribute('name', 'name');
    expect(nameField).toHaveAttribute('minLength', '3');
    expect(nameField).toBeRequired();
  });
  test('Check email input attributes', () => {
    const { getByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const emailField = getByTestId('email');
    expect(emailField).toBeInTheDocument();
    expect(emailField).toHaveAttribute('type', 'email');
    expect(emailField).toHaveAttribute('id', 'email');
    expect(emailField).toHaveAttribute('name', 'email');
    expect(emailField).toBeRequired();
  });
  test('Check phone input attributes', () => {
    const { getByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const phoneField = getByTestId('phone');
    expect(phoneField).toBeInTheDocument();
    expect(phoneField).toHaveAttribute('type', 'tel');
    expect(phoneField).toHaveAttribute('id', 'phone');
    expect(phoneField).toHaveAttribute('name', 'phone');
    expect(phoneField).toHaveAttribute('pattern', '[0-9]{3}[0-9]{2}[0-9]{3}');
    expect(phoneField).not.toBeRequired();
  });
  test('Check terms and conditions input attributes', () => {
    const { getByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const termsField = getByTestId('terms-cond');
    expect(termsField).toBeInTheDocument();
    expect(termsField).toHaveAttribute('type', 'checkbox');
    expect(termsField).toHaveAttribute('id', 'terms-cond');
    expect(termsField).toHaveAttribute('name', 'terms-cond');
    expect(termsField).toBeRequired();
  });
  test('Check submit input attributes', () => {
    const { getByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const submitField = getByTestId('submit-btn');
    expect(submitField).toBeInTheDocument();
    expect(submitField).toHaveAttribute('type', 'submit');
    expect(submitField).toHaveAttribute('value', 'Reserve table');
    expect(submitField).toBeDisabled();
  });
  /*INPUT VALID AND INVALID FUNCTIONS VALIDATION*/
  test('checkDate function valid field', () => {
    const { getByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const dateField = getByTestId('res-date');
    expect(dateField).toBeInTheDocument();
    fireEvent.change(dateField, { target: { value: '2024-07-01' } });
    expect(dateField).toBeValid();
  });
  test('checkDate function invalid field', () => {
    const { getByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const dateField = getByTestId('res-date');
    expect(dateField).toBeInTheDocument();
    fireEvent.change(dateField, { target: { value: '' } });
    expect(dateField).toBeInvalid();
    fireEvent.change(dateField, { target: { value: '2021-07-01' } });
    expect(dateField).toBeInvalid();
  });
  test('checkName function valid field', () => {
    const { getByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const nameField = getByTestId('name');
    expect(nameField).toBeInTheDocument();
    fireEvent.change(nameField, { target: { value: 'Sebastian Smith' } });
    expect(nameField).toBeValid();
  });
  test('checkName function invalid field', () => {
    const { getByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const nameField = getByTestId('name');
    expect(nameField).toBeInTheDocument();
    fireEvent.change(nameField, { target: { value: '' } });
    expect(nameField).toBeInvalid();
    fireEvent.change(nameField, { target: { value: 'Se' } });
    expect(nameField).toBeInvalid();
  });
  test('checkEmail function valid field', () => {
    const { getByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const emailField = getByTestId('email');
    expect(emailField).toBeInTheDocument();
    fireEvent.change(emailField, { target: { value: 'cliente@mail.com' } });
    expect(emailField).toBeValid();
  });
  test('checkEmail function invalid field', () => {
    const { getByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const emailField = getByTestId('email');
    expect(emailField).toBeInTheDocument();
    fireEvent.change(emailField, { target: { value: '' } });
    expect(emailField).toBeInvalid();
    fireEvent.change(emailField, { target: { value: 'clientemail.com' } });
    expect(emailField).toBeInvalid();
  });
  test('checkTime function valid field', () => {
    const { getByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const timeField = getByTestId('res-time');
    expect(timeField).toBeInTheDocument();
    fireEvent.change(timeField, { target: { value: '17:00' } });
    expect(timeField).toBeValid();
  });
  test('checkTime function invalid field', () => {
    const { getByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const timeField = getByTestId('res-time');
    expect(timeField).toBeInTheDocument();
    fireEvent.change(timeField, { target: { value: '' } });
    expect(timeField).toBeInvalid();
  });
  test('checkGuest function valid field', () => {
    const { getByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const guestField = getByTestId('guest');
    fireEvent.change(guestField, { target: { value: '5' } });
    expect(guestField).toBeValid();
  });
  test('checkGuest function invalid field', () => {
    const { getByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const guestField = getByTestId('guest');
    fireEvent.change(guestField, { target: { value: '' } });
    expect(guestField).toBeInvalid();
    fireEvent.change(guestField, { target: { value: '0' } });
    expect(guestField).toBeInvalid();
    fireEvent.change(guestField, { target: { value: '11' } });
    expect(guestField).toBeInvalid();
  });
  test('checkTerms function valid field', () => {
    const { getByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const termsField = getByTestId('terms-cond');
    expect(termsField).toBeInTheDocument();
    fireEvent.change(termsField, { target: { checked: true } });
    expect(termsField).toBeValid();
  });
  test('checkTerms function invalid field', () => {
    const { getByTestId } = render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const termsField = getByTestId('terms-cond');
    expect(termsField).toBeInTheDocument();
    fireEvent.change(termsField, { target: { checked: false } });
    expect(termsField).toBeInvalid();
  });
});