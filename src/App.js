import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import './styles/App.css';
import Contacts from './components/Contacts';
import Keys from './pages/Keys';
import AutoChips from './pages/AutoChips';
import LostKeys from './pages/LostKeys';
import Diagnostic from './pages/Diagnostic';
import Immobilizer from './pages/Immobilizer';
import Airbag from './pages/Airbag';
import CarLocks from './pages/CarLocks';
import Safes from './pages/Safes';
import DoorLocks from './pages/DoorLocks';

function App() {
  return (
    
    <Router basename='/'>
      <div className="app-wrapper">
        <Nav />
        <main className="main-content">
          <Routes>
          <Route path="/contacts" element={<Contacts />} />
            <Route path="/" element={<Home />} />
            <Route path="/autochips" element={<AutoChips />} />
            <Route path="/keys" element={<Keys />} />
            <Route path="/lostkeys" element={<LostKeys />} />
            <Route path="/diagnostic" element={<Diagnostic />} />
            <Route path="/immobilizer" element={<Immobilizer />} />
            <Route path="/airbag" element={<Airbag />} />
            <Route path="/carlocks" element={<CarLocks />} />
            <Route path="/safes" element={<Safes />} />
            <Route path="/doorlocks" element={<DoorLocks />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;