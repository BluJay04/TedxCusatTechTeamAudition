import React, { useState, useEffect, useRef } from "react";
import CustomCursor from "./components/CustomCursor";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import SpeakersCarousel from "./components/SpeakersCarousel";
import AboutSection from "./components/AboutSection";
import RegisterSection from "./components/RegisterSection";
import Footer from "./components/Footer";
import "./App.css";
import { Mic, Users, Clock, Award } from "lucide-react";

const speakers = [
  {
    name: "Dr. Sarah Chen",
    title: "AI Ethics Researcher",
    topic: "The Future of Human-AI Collaboration",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    bio: "Leading researcher in artificial intelligence ethics and human-computer interaction with over 15 years of experience in shaping the future of AI.",
    achievement: "Published 50+ research papers",
    color: "from-red-500 to-pink-500"
  },
  {
    name: "Marcus Rodriguez",
    title: "Sustainable Tech Entrepreneur",
    topic: "Building Tomorrow's Green Cities",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Founder of three successful clean-tech startups focused on urban sustainability and creating environmentally conscious urban environments.",
    achievement: "3x Successful Exits",
    color: "from-red-600 to-orange-500"
  },
  {
    name: "Prof. Amara Okafor",
    title: "Neuroscientist",
    topic: "Unlocking the Mysteries of Memory",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&crop=face",
    bio: "Pioneer in memory research and cognitive enhancement technologies, revolutionizing our understanding of the human brain.",
    achievement: "Nobel Prize Nominee",
    color: "from-red-700 to-purple-500"
  },
  {
    name: "James Liu",
    title: "Social Impact Designer",
    topic: "Design for Global Change",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Award-winning designer creating innovative solutions for social and environmental challenges across developing nations.",
    achievement: "Design Impact Award 2024",
    color: "from-red-500 to-rose-500"
  }
];

const stats = [
  { number: "12", label: "World-Class Speakers", icon: Mic },
  { number: "500+", label: "Innovation Enthusiasts", icon: Users },
  { number: "8", label: "Hours of Inspiration", icon: Clock },
  { number: "1", label: "Transformative Experience", icon: Award }
];

const App = () => {
  const [currentSpeaker, setCurrentSpeaker] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Enhanced scroll and intersection observers
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  // Auto-advance speakers with pause on hover
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpeaker((prev) => (prev + 1) % speakers.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [speakers.length]);

  const nextSpeaker = () => {
    setCurrentSpeaker((prev) => (prev + 1) % speakers.length);
  };

  const prevSpeaker = () => {
    setCurrentSpeaker((prev) => (prev - 1 + speakers.length) % speakers.length);
  };

  // Parallax effect
  const parallaxOffset = scrollY * 0.5;

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative cursor-none">
      <CustomCursor mousePosition={mousePosition} isMenuOpen={isMenuOpen} />
      <Navigation scrollY={scrollY} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection heroRef={heroRef} />
      <SpeakersCarousel speakers={speakers} isVisible={isVisible} />
      <AboutSection isVisible={isVisible} stats={stats} />
      <RegisterSection isVisible={isVisible} />
      <Footer />
    </div>
  );
};

export default App;