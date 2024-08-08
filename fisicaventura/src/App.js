import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import InputName from './components/InputName';
import Footer from './components/Footer';
import SecondScreen from './components/SecondScreen';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Scoreboard />
              <InputName />
              <Footer />
            </>
          } />
          <Route path="/second-screen" element={<SecondScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
