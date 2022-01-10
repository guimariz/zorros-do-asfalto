import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/home" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
