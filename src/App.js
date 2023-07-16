import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Homepage from './components/home/Homepage';
import Reservations from './components/booking/Reservations';
import Login from './Login';
import './App.css'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
