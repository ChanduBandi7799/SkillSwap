import React from 'react';
import '../App.css';

const Hero = () => (
  <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
    <h1 className="text-5xl font-extrabold leading-tight mb-6 drop-shadow-xl">Swap Skills, Not Money.</h1>
    <p className="text-xl mb-8 max-w-xl mx-auto">Connect with people worldwide to teach what you know and learn what you love — completely free.</p>
    <a href="#join" className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 shadow-lg transition">Get Started</a>
  </section>
);

export default Hero;
