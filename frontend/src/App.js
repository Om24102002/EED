import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Grievances from './components/Pages/Grievances';
import Home from './components/Pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/grievances' exact Component={Grievances} />
      </Routes>
    </Router>
  );
}

export default App; 
