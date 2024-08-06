import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import LoginPage from './pages/Login/LoginPage';
import QuestionPage from './pages/Question/QuestionPage';
//import Main from './pages/Main';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/question" element={<QuestionPage />} />
      </Routes>
    </Router>

  );
}

export default App;
