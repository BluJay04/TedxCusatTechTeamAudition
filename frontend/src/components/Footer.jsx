import React from "react";
import { Instagram, Twitter, Linkedin, Youtube, MapPin, Calendar } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="bg-black py-16 border-t border-red-600/20">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="text-3xl font-bold mb-4">
            <span className="text-red-600">TEDx</span>CUSAT 2025
          </div>
          <p className="text-gray-400 mb-6">
            Igniting minds, inspiring change, and reimagining tomorrow through the power of ideas worth spreading.
          </p>
          <div className="flex space-x-4">
            {[Instagram, Twitter, Linkedin, Youtube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-12 h-12 bg-red-600/20 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Icon size={20} className="text-red-600 hover:text-white transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold text-white mb-6">Get in Touch</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-red-600" />
              <span className="text-gray-400">CUSAT Campus, Kochi, Kerala</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-red-600" />
              <span className="text-gray-400">March 15, 2025</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-500 text-center md:text-left">
          <p>© 2025 TEDxCUSAT. This independent TEDx event is operated under license from TED.</p>
        </div>
        <div className="flex space-x-6 text-gray-400 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;