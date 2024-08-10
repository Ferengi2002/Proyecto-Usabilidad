import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import InputName from './components/InputName';
import Footer from './components/Footer';
import ErrorReportScreen from './components/ErrorReportScreen';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Scoreboard />
              <InputName />
            </>
          } />
          <Route path="/report-error" element={<ErrorReportScreen />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
