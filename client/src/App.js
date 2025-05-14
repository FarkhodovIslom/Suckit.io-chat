import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
// Removed offensive audio file reference for better code quality and respectfulness

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Logo image */}
        <img src={logo} className="App-logo" alt="Suckit.io Chat Logo" />
        {/* Audio player removed due to offensive file reference */}
      </header>
      <Footer />
    </div>
  );
}

export default App;
