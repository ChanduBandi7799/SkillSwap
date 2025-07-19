import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Features from '../Components/Features';
import Working from '../Components/Working';
import Join from '../Components/Join';
import Footer from '../Components/Footer';
import '../App.css';
const Home = () => (
  <div className="bg-gradient-to-r from-purple-700 via-pink-500 to-red-400 text-white font-sans">
    <Navbar />
    <Hero />
    <Features />
    <Working />
    <Join />
    <Footer />
  </div>
);

export default Home;
