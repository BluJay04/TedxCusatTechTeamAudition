import React, { useState, useEffect, useRef } from "react";
import { Play } from "lucide-react";

const SpeakerCarousel = ({ isVisible = { about: true } }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const carouselRef = useRef(null);

  // TEDx-style speaker data
  const speakers = [
    {
      name: "Marcus Rodriguez",
      title: "Climate Tech Entrepreneur",
      topic: "Scaling Climate Solutions for Global Impact",
      description: "From lab to market: The journey of transforming climate research into real-world solutions.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=face",
      duration: "15 min"
    },
    {
      name: "Dr. Amara Okafor",
      title: "Biotech Innovator",
      topic: "Personalized Medicine Revolution",
      description: "Why the future of healthcare is written in your DNA.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=face",
      duration: "18 min"
    },
    {
      name: "Jordan Kim",
      title: "Quantum Computing Pioneer",
      topic: "Quantum Computing: Beyond the Hype",
      description: "Making quantum computing accessible and understanding its true potential.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face",
      duration: "14 min"
    },
    {
      name: "Elena Vasquez",
      title: "Space Technology CEO",
      topic: "The New Space Economy",
      description: "How commercial space exploration is opening new frontiers for humanity.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop&crop=face",
      duration: "16 min"
    },
    {
      name: "Dr. Ahmed Hassan",
      title: "Urban Innovation Specialist",
      topic: "Cities That Think",
      description: "Reimagining urban spaces through data, community, and sustainable design.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop&crop=face",
      duration: "13 min"
    }
  ];

  // Enable horizontal scrolling with mouse wheel (smooth and natural)
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleWheel = (e) => {
      // Only scroll horizontally if overflow exists
      if (
        Math.abs(e.deltaY) > Math.abs(e.deltaX) &&
        carousel.scrollWidth > carousel.clientWidth
      ) {
        e.preventDefault();
        // Use scrollBy for smooth scrolling
        carousel.scrollBy({
          left: e.deltaY,
          behavior: "smooth"
        });
      }
    };

    carousel.addEventListener('wheel', handleWheel, { passive: false });
    return () => carousel.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <section id="speakers" className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-32 left-6 md:left-20 w-2 md:w-3 h-2 md:h-3 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-8 md:right-32 w-1.5 md:w-2 h-1.5 md:h-2 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-16 md:bottom-24 right-1/4 w-2.5 md:w-3 h-2.5 md:h-3 bg-white rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 md:px-6">
        {/* Header Section */}
        <div className={`max-w-3xl md:max-w-6xl mx-auto text-center transform transition-all duration-1000 ${isVisible.speakers ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 md:mb-8 tracking-tight font-black"
            style={{ fontFamily: 'Inter, Helvetica, sans-serif' }}
          >
            Our Speakers
          </h2>
          <div className={`w-16 h-1 bg-red-600 mx-auto mb-6 md:mb-8 rounded-full transition-all duration-1000 ${isVisible.speakers ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}></div>
          <p className={`text-base sm:text-lg md:text-2xl text-gray-300 max-w-2xl md:max-w-4xl mx-auto font-light leading-relaxed pb-6 md:pb-8 transition-all duration-1000 ${isVisible.speakers ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Ideas worth spreading from <span className="text-red-600 font-medium">visionaries</span> shaping tomorrow
          </p>
        </div>

        {/* Speaker Carousel */}
        <div
          ref={carouselRef}
          className={`flex gap-3 sm:gap-5 md:gap-8 overflow-x-auto scrollbar-hide pb-5 md:pb-8 px-1 sm:px-4 transition-all duration-1000 ${isVisible.speakers ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {speakers.map((speaker, index) => (
            <div
              key={speaker.name}
              className="flex-shrink-0 w-[160px] sm:w-[200px] md:w-[240px] h-[320px] sm:h-[360px] md:h-[400px] relative group cursor-pointer flex flex-col items-center"
              style={{ scrollSnapAlign: 'start' }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container with Glow Effect */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-red-600/20 group-hover:scale-105 bg-black/60 flex flex-col items-center">

                {/* Image & Overlay */}
                <div className="relative w-full h-full flex justify-center pt-4">
                  <div className="overflow-hidden rounded-3xl border-4 border-gray-300 group-hover:border-red-600 transition-all duration-500 w-full h-full bg-gray-900">
                    <img
                      src={speaker.image}
                      alt={`${speaker.name} - ${speaker.title}`}
                      className="w-full h-full object-cover aspect-[3/4] rounded-2xl transition-transform duration-700 group-hover:scale-110 filter grayscale"
                      loading="lazy"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    {/* Red Accent Glow Line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-lg shadow-red-600/50"></div>
                    {/* Slide-up Text Overlay */}
                    <div
                      className={`absolute bottom-0 left-0 w-full bg-black/90 backdrop-blur-sm text-white p-4 sm:p-5 md:p-6 rounded-b-2xl
                        transition-all
                        duration-500
                        ease-[cubic-bezier(0.4,0,0.2,1)]
                        will-change-transform will-change-opacity
                        ${hoveredCard === index
                          ? 'translate-y-0 opacity-100 pointer-events-auto'
                          : 'translate-y-full opacity-0 pointer-events-none'}
                      `}
                      style={{
                        transitionProperty: 'transform, opacity',
                      }}
                    >
                      <div className="space-y-2 sm:space-y-3">
                        {/* Speaker Name */}
                        <h3
                          className="text-base sm:text-lg md:text-xl font-light text-white leading-tight"
                          style={{ fontFamily: 'Inter, Helvetica, sans-serif' }}
                        >
                          {speaker.name}
                        </h3>
                        {/* Title */}
                        <p className="text-xs sm:text-sm text-red-600 font-medium tracking-wide">
                          {speaker.title}
                        </p>
                        {/* Topic */}
                        <h4 className="text-xs sm:text-base font-medium text-white leading-tight italic">
                          "{speaker.topic}"
                        </h4>
                        {/* Description */}
                        <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                          {speaker.description}
                        </p>
                        {/* Accent Line */}
                        <div className="pt-1 sm:pt-2">
                          <div className="w-8 sm:w-10 md:w-12 h-0.5 bg-red-600 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Hint */}
        <div className={`text-center mt-8 md:mt-12 transition-all duration-1000 ${isVisible.speakers ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex justify-center mt-2 sm:mt-4 space-x-1 sm:space-x-2">
            <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide {
          scroll-behavior: smooth;
        }
        @media (hover: none) {
          .group:hover .group-hover\\:scale-105 {
            transform: scale(1);
          }
          .group:hover .group-hover\\:scale-110 {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default SpeakerCarousel;