import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Ranking from './pages/Ranking';
import AdicionarTempo from './pages/AdicionarTempo';
import OffTopics from './pages/OffTopics';

function App() {
  return (
    <>
      <div className="content">
        <Router>
          <Navbar />
          <Sidebar />

          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/ranking" element={<Ranking />}></Route>
            <Route path="/adicionar-tempo" element={<AdicionarTempo />}></Route>
            <Route path="/off-topics" element={<OffTopics />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
