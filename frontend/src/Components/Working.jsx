import React from 'react';
import '../App.css';

const Working = () => (
  <section id="how" className="py-20 px-6 bg-gray-100 text-gray-900">
    <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
    <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
      <div>
        <div className="text-3xl mb-2">📝</div>
        <h4 className="font-bold text-lg">1. Create Profile</h4>
        <p>List your skills and what you want to learn.</p>
      </div>
      <div>
        <div className="text-3xl mb-2">🤝</div>
        <h4 className="font-bold text-lg">2. Get Matched</h4>
        <p>Find users with mutual skill exchange interests.</p>
      </div>
      <div>
        <div className="text-3xl mb-2">📅</div>
        <h4 className="font-bold text-lg">3. Book Sessions</h4>
        <p>Schedule micro-mentorship sessions easily.</p>
      </div>
      <div>
        <div className="text-3xl mb-2">🌱</div>
        <h4 className="font-bold text-lg">4. Grow Together</h4>
        <p>Teach, learn, and build lasting connections.</p>
      </div>
    </div>
  </section>

);

export default Working;
