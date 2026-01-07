
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import HotelDetailsPage from './pages/HotelDetailsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/hotels/:id" element={<HotelDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
