// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import CardCreation from './CardCreation';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Digital Business Cards</h1>
            <p className="text-xl mb-6">Create and share your digital business card with NFC support, QR codes, and more!</p>
            
            <Link to="/create-card">
              <button
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-100 transition duration-300"
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>

        <Routes>
          {/* Define the route for the CardCreation component */}
          <Route path="/create-card" element={<CardCreation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
