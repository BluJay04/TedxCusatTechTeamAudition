import React from "react";

const RegisterSection = ({ isVisible }) => (
  <section id="register" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-red-900"></div>
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
    <div className="container mx-auto px-6 text-center relative z-10">
      <div className={`transform transition-all duration-1000 ${isVisible.register ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white">
            Your Journey Starts <span className="text-yellow-400">Here</span>
          </h2>
          <p className="text-2xl mb-12 text-white/90 leading-relaxed">
            Don't just witness the future—be part of creating it. 
            <br className="hidden md:block" />
            Join the most transformative event of the year.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-white/20 transform hover:scale-105 transition-all duration-300">
              <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                EARLY BIRD
              </div>
              <div className="text-4xl font-black text-white mb-2">₹999</div>
              <div className="text-white/70 mb-4">Until Feb 15, 2025</div>
              <ul className="text-left space-y-2 text-white/80">
                <li>✓ Full event access</li>
                <li>✓ Networking session</li>
                <li>✓ TEDx merchandise</li>
                <li>✓ Digital certificate</li>
              </ul>
            </div>
            <div className="bg-red-600/20 backdrop-blur-sm p-8 rounded-2xl border border-red-600/50 transform hover:scale-105 transition-all duration-300 relative">
              <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                REGULAR
              </div>
              <div className="text-4xl font-black text-white mb-2">₹1,299</div>
              <div className="text-white/70 mb-4">After Feb 15, 2025</div>
              <ul className="text-left space-y-2 text-white/80">
                <li>✓ Full event access</li>
                <li>✓ Networking session</li>
                <li>✓ TEDx merchandise</li>
                <li>✓ Digital certificate</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <button className="group bg-white text-red-900 hover:bg-gray-100 px-16 py-6 rounded-full text-2xl font-black transition-all duration-500 transform hover:scale-110 hover:shadow-2xl relative overflow-hidden">
              <span className="relative z-10">Secure Your Transformation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </button>
            <div className="flex items-center justify-center gap-4 text-white/70">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span>127 early bird spots remaining</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default RegisterSection;