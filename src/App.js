import Header from "./Header";
import Footer from "./Footer";
import Homepage from './Homepage';
import Reservations from './Reservations';
import Login from './Login';
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
