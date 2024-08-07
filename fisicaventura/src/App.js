import React from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import InputName from './components/InputName';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Scoreboard />
      <InputName />
      <Footer />
    </div>
  );
}

export default App;
