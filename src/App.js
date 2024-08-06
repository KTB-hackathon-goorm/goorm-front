import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import LoginPage from './pages/Login/LoginPage';
//import Main from './pages/Main';
//import Question from './pages/Question';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>

  );
}

export default App;
