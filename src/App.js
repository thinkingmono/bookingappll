import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Homepage from './components/home/Homepage';
import BookingPage from './components/booking/BookingPage';
import ConfirmedBooking from "./components/booking/ConfirmedBooking";
import Login from './Login';
import OrderOnline from "./OrderOnline";
import './App.css'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/booking-confirmation" element={<ConfirmedBooking />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
