const RegisterSection = ({ isVisible, earlyBirdSpots, deadline }) => (
  <section id="register" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-black via-gray-900/60 to-black">
    {/* Subtle background and overlays for theme consistency */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 via-black/60 to-red-900/40"></div>
      <div className="absolute top-10 left-10 w-40 h-40 bg-red-600/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
    <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
      <div className={`transform transition-all duration-1000 ${isVisible.register ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tight">
            <span className="text-red-600">Register</span> for TEDxCUSAT 2025
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 font-light leading-relaxed">
            Be part of a transformative experience.<br className="hidden md:block" />
            Secure your seat and ignite your tomorrow.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
            {/* Early Bird Card */}
            <div className="bg-black/60 border-2 border-green-500/40 hover:border-green-500/80 rounded-3xl shadow-xl p-8 flex flex-col items-center transition-all duration-300 group">
              <div className="bg-green-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-4 tracking-widest shadow-md">
                EARLY BIRD
              </div>
              <div className="text-4xl font-black text-white mb-2 tracking-tight">₹999</div>
              <div className="text-green-400 mb-4 font-medium">
                Until {deadline}
              </div>
              <ul className="text-left space-y-2 text-gray-200/90 text-base font-light w-full max-w-xs mx-auto">
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Full event access</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Networking session</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span> TEDx merchandise</li>
              </ul>
            </div>
            {/* Regular Card */}
            <div className="bg-black/60 border-2 border-red-600/40 hover:border-red-600/80 rounded-3xl shadow-xl p-8 flex flex-col items-center transition-all duration-300 group">
              <div className="bg-red-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-4 tracking-widest shadow-md">
                REGULAR
              </div>
              <div className="text-4xl font-black text-white mb-2 tracking-tight">₹1,299</div>
              <div className="text-red-400 mb-4 font-medium">Until {deadline}</div>
              <ul className="text-left space-y-2 text-gray-200/90 text-base font-light w-full max-w-xs mx-auto">
                <li className="flex items-center gap-2"><span className="text-red-400">✓</span> Full event access</li>
                <li className="flex items-center gap-2"><span className="text-red-400">✓</span> Networking session</li>
                <li className="flex items-center gap-2"><span className="text-red-400">✓</span> TEDx merchandise</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <button className="group bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 text-black hover:from-yellow-400 hover:to-red-600 px-12 py-5 rounded-full text-2xl font-black shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden tracking-tight">
              <span className="relative z-10">Book Tickets Now</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <div className="flex items-center justify-center gap-4 text-gray-300">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-base">{earlyBirdSpots} early bird spots remaining</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default RegisterSection;