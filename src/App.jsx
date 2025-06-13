import React from 'react';
import { Container, Typography } from '@mui/material';
import DestinationSection from './components/DestinationSection';
import PackageSection from './components/PackageSection';
import { motion } from 'framer-motion';
import './index.css';

const App = () => {
  return (
    <div className="homepage">
      <nav className="main-header">
        <div className="logo">TravelMate</div>
        <input
          type="text"
          className="search-input"
          placeholder="Search destination or tour..."
        />
        <button className="search-btn">Search</button>
      </nav>
      <header className="hero">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Discover Your Next Adventure</h1>
          <p>Choose from our curated experiences, customized for every kind of traveler.</p>
          <button className="btn">Book Now</button>
        </motion.div>
      </header>
      <Container maxWidth="lg">
        <DestinationSection />
        <PackageSection />
      </Container>

      <footer className="main-footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} TravelMate. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
