import React from "react";
import { Calendar, MapPin, Users } from "lucide-react";

const HeroSection = React.forwardRef(({ isVisible, heroRef }, ref) => (
  <section
    id="home"
    ref={heroRef}
    className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
  >
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black to-black"></div>
    </div>
    <div className="relative text-center px-6 max-w-7xl mx-auto z-10">
      <div className="transform transition-all duration-1000 delay-300 opacity-100 translate-y-0">
        <div className="relative mb-8">
          <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tight">
            <span className="text-red-600 drop-shadow-2xl animate-pulse">TED</span>
            <span className="text-red-500 text-6xl md:text-8xl align-top ml-2 animate-bounce delay-100">x</span>
            <span className="text-white ml-2 drop-shadow-xl">CUSAT</span>
          </h1>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse"></div>
        </div>
        <h2 className="text-3xl md:text-5xl mb-8 text-gray-200 font-light tracking-wide">
          Ideas That <span className="text-red-500 font-bold">Ignite</span> Tomorrow
        </h2>
        <div className="relative mb-12">
          <p className="text-2xl md:text-4xl text-red-400 font-bold tracking-wider">
            "REIMAGINING TOMORROW"
          </p>
          <div className="absolute -top-2 -left-4 text-red-600/30 text-6xl font-serif">"</div>
          <div className="absolute -bottom-6 -right-4 text-red-600/30 text-6xl font-serif">"</div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-16">
          {[
            { icon: Calendar, text: "March 15, 2025", subtext: "Save the Date" },
            { icon: MapPin, text: "CUSAT Campus, Kochi", subtext: "Kerala, India" },
            { icon: Users, text: "500+ Innovators", subtext: "Limited Seats" },
          ].map(({ icon: Icon, text, subtext }, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-black/30 backdrop-blur-sm rounded-2xl px-6 py-4 border border-red-600/20 hover:border-red-600/40 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                <Icon className="text-red-500" size={24} />
              </div>
              <div>
                <div className="text-lg font-semibold">{text}</div>
                <div className="text-sm text-gray-400">{subtext}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl px-8 mt-16 py-4 border border-red-600/20 inline-block">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">
              Early Bird: <span className="text-red-500 font-bold">127 spots remaining</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div
      className="absolute left-1/2 transform -translate-x-1/2 animate-bounce"
      style={{ bottom: "6.5rem" }}
    >
      <div className="w-6 h-10 border-2 border-red-600 rounded-full flex justify-center py-2">
        <div className="w-1 h-3 bg-red-600 rounded-full mt-2 animate-ping"></div>
      </div>
    </div>
  </section>
));

export default HeroSection;