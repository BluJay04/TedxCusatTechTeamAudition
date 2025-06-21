import React from "react";
import { Star, Quote } from "lucide-react";
import StatsGrid from "./StatsGrid";

const AboutSection = ({ isVisible, stats }) => (
  <section id="about" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-black via-gray-900/30 to-black relative">
    <div className="max-w-6xl mx-auto w-full px-4 sm:px-6"> {/* Changed from container to max-w-6xl for consistent padding */}
      <div className={`text-center transform transition-all duration-1000 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="relative mb-10 sm:mb-16">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 sm:mb-8">
            Experience <span className="text-red-600">TEDxCUSAT</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-red-600 mx-auto mb-6 sm:mb-8 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-14 md:mb-20">
          <div className="text-left space-y-6 sm:space-y-8">
            <div className="text-base sm:text-xl md:text-2xl text-gray-300 leading-relaxed space-y-4 sm:space-y-6">
              <p>
                TEDxCUSAT is more than an event—it's a <span className="text-red-500 font-bold">catalyst for transformation</span>.
                We bring together the most brilliant minds to share ideas that challenge conventions and inspire action.
              </p>
              <p>
                Our theme <span className="text-red-600 font-bold">"Reimagining Tomorrow"</span> explores how innovative thinking and bold ideas
                can reshape our future. Join us for an unforgettable journey of discovery and inspiration.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-red-600/20 to-transparent p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-red-600/30 backdrop-blur-sm shadow-md">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center shadow">
                    <Star className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-white">World-Class Experience</h3>
                    <p className="text-gray-400 text-sm sm:text-base">Curated for maximum impact</p>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-300">
                  Every aspect of TEDxCUSAT is designed to create moments of breakthrough thinking
                  and meaningful connections that last long after the event ends.
                </p>
              </div>
            </div>
          </div>
        </div>
        <StatsGrid stats={stats} />
        <div className="bg-gradient-to-r from-red-900/30 via-red-800/20 to-red-900/30 p-6 sm:p-12 rounded-2xl sm:rounded-3xl border border-red-600/30 backdrop-blur-sm mt-10 sm:mt-16 shadow-md">
          <Quote className="w-10 h-10 sm:w-16 sm:h-16 text-red-600/50 mx-auto mb-4 sm:mb-6" />
          <blockquote className="text-lg sm:text-2xl md:text-3xl font-light italic text-white leading-relaxed mb-4 sm:mb-6">
            "At TEDxCUSAT, we don't just share ideas—we ignite movements, spark innovations,
            and create the future one conversation at a time."
          </blockquote>
          <div className="w-12 sm:w-16 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>
      </div>
    </div>
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
      <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-2 h-2 bg-red-600 rounded-full animate-ping delay-300"></div>
      <div className="absolute bottom-20 sm:bottom-40 right-16 sm:right-32 w-3 h-3 bg-red-500 rounded-full animate-ping delay-700"></div>
      <div className="absolute top-1/2 left-8 sm:left-16 w-1 h-1 bg-red-400 rounded-full animate-ping delay-1000"></div>
    </div>
  </section>
);

export default AboutSection;