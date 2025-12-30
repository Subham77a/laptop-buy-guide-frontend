import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './assets/home';
import About from './assets/about';
import Signup from './assets/signin';
import Dashboard from './assets/dashboard';
import Createacc from './assets/Createacc';

const App = () => {
  return (
    <>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          background: 'linear-gradient(90deg, #0f2027, #203a43, #2c5364)', // Dark elegant gradient
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        {/* Logo or Title */}
        <div
          style={{
            fontSize: '1.7rem',
            fontWeight: '600',
            color: '#fff',
            letterSpacing: '1px',
            textShadow: '0 0 10px rgba(255,255,255,0.3)',
          }}
        >
          LapWise
        </div>

        {/* Navigation Links */}
        <div style={{ display: 'flex', gap: '1.8rem' }}>
          {['/', '/about', '/signup'].map((path, i) => {
            const names = ['Home', 'Contact', 'Signup'];
            return (
              <Link
                key={path}
                to={path}
                style={{
                  color: '#e0e0e0',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '1.05rem',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#00adb5';
                  e.target.style.textShadow = '0 0 8px #00adb5';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#e0e0e0';
                  e.target.style.textShadow = 'none';
                }}
              >
                {names[i]}
              </Link>
            );
          })}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Createacc" element={<Createacc />} />
      </Routes>
    </>
  );
};

export default App;
