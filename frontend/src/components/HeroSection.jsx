import React, { useState, useEffect } from "react";
import { Calendar, MapPin, Users } from "lucide-react";

const EVENT_DATE = new Date("2025-09-15T09:00:00+05:30"); // Set your event date/time here

const HeroSection = React.forwardRef(({ isVisible, heroRef }, ref) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function getTimeLeft() {
    const now = new Date();
    const diff = EVENT_DATE - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  }

  const infoItems = [
    {
      icon: Calendar,
      text: EVENT_DATE.toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      subtext: "Save the Date",
    },
    {
      icon: MapPin,
      text: "CUSAT Campus, Kochi",
      subtext: "Kerala, India",
    },
    {
      icon: Users,
      text: "500+ Innovators",
      subtext: "Limited Seats",
    },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-32 select-none"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black to-black"></div>
      </div>
      {/* Content */}
      <div className="relative text-center px-4 sm:px-6 max-w-7xl mx-auto z-10 w-full">
        <div className="transform transition-all duration-1000 delay-300 opacity-100 translate-y-0">
          {/* Logo and Title */}
          <div className="relative mb-6 sm:mb-8">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 sm:mb-6 tracking-tight leading-tight">
              <span className="text-red-600 drop-shadow-2xl">TED</span>
              <span className="text-red-600 text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl align-top">
                x
              </span>
              <span className="text-white ml-2 drop-shadow-xl">CUSAT</span>
            </h1>
            <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-40 sm:w-64 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse"></div>
          </div>
          {/* Subtitle */}
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 sm:mb-8 text-gray-200 font-light tracking-wide">
            Ideas That{" "}
            <span className="text-red-600 font-bold">Ignite</span> Tomorrow
          </h2>
          {/* Tagline */}
          <div className="relative mb-8 sm:mb-12">
            <p className="text-base xs:text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-red-600 font-bold tracking-wider">
              "REIMAGINING TOMORROW"
            </p>
          </div>
          {/* Info Cards */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 sm:mb-16">
            {infoItems.map(({ icon: Icon, text, subtext }, index) => (
              <div
                key={index}
                className="flex items-center gap-3 sm:gap-4 bg-black/30 backdrop-blur-sm rounded-2xl px-4 py-3 sm:px-6 sm:py-4 border border-red-600/20 hover:border-red-600/40 transition-all duration-300 transform hover:scale-105 w-full max-w-xs sm:max-w-none sm:w-auto"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                  <Icon className="text-red-500" size={22} />
                </div>
                <div className="text-left">
                  <div className="text-base sm:text-lg font-semibold">
                    {text}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    {subtext}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Scroll Down Indicator */}
          <div
            className="
              flex justify-center w-full animate-bounce pointer-events-none absolute left-1/2-translate-x-1/2 align-items-center
            "
            style={{
              marginTop: "2rem", // gap above indicator
              marginBottom: "2.5rem", // gap below indicator (above countdown)
              position: "relative",
            }}
          >
            <div
              className="
                w-6 h-10
                sm:w-8 sm:h-14
                lg:w-10 lg:h-20
                border-2 border-red-600 rounded-full
                flex justify-center
                py-2 sm:py-3 lg:py-4
                bg-black/40 backdrop-blur-md
                shadow-md
              "
            >
              <div className="w-1 h-3 sm:w-1.5 sm:h-5 lg:w-2 lg:h-7 bg-red-600 rounded-full mt-2 sm:mt-3 lg:mt-4 animate-ping"></div>
            </div>
          </div>
          {/* Countdown */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl px-6 sm:px-12 mt-20 sm:mt-4 py-6 sm:py-8 border-2 border-red-600/40 inline-block shadow-lg">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <div className="hidden sm:block w-3 h-3 sm:w-4 sm:h-4 bg-red-600 rounded-full animate-pulse"></div>
              <span className="text-base sm:text-lg md:text-xl text-gray-300 font-mono">
                Event Countdown:&nbsp;
                <span className="text-red-500 font-bold text-xl sm:text-2xl md:text-3xl">
                  {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
