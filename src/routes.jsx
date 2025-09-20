import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import HistoryPage from './pages/HistoryPage';
import Navbar from './components/Navbar';

const AppRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  </Router>
);

export default AppRoutes; 