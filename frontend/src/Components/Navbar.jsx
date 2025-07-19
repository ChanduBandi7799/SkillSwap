import React from 'react';
import '../App.css';


const Navbar = () => (
  <nav className="flex items-center justify-between p-6 bg-opacity-20 backdrop-blur-sm sticky top-0 z-50">
    <h1 className="text-2xl font-bold tracking-wider">Skill<span className="text-yellow-300">Swap</span></h1>
    <div>
      <a href="#features" className="mx-4 hover:text-yellow-300 transition">Features</a>
      <a href="#how" className="mx-4 hover:text-yellow-300 transition">How It Works</a>
      <a href="#join" className="bg-yellow-300 text-purple-800 px-4 py-2 rounded-xl font-semibold shadow hover:bg-yellow-400 transition">Join Now</a>
    </div>
  </nav>
);
export default Navbar;
