import React from 'react';
import '../App.css';

const Features = () => (
  <section id="features" className="py-20 bg-white text-gray-800 px-6">
    <h2 className="text-4xl font-bold text-center mb-12">Why SkillSwap?</h2>
    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      <div className="bg-purple-100 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">📚 Learn Anything</h3>
        <p>From coding to cooking, explore a wide range of skills offered by real people.</p>
      </div>
      <div className="bg-pink-100 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">🎓 Teach Your Passion</h3>
        <p>Share your skills and experiences in short, impactful mentorship sessions.</p>
      </div>
      <div className="bg-yellow-100 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">🔄 Mutual Exchange</h3>
        <p>No money needed — just trade time and knowledge with other learners.</p>
      </div>
    </div>
  </section>
);

export default Features;
