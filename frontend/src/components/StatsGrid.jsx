import React from "react";

const StatsGrid = ({ stats }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
    {stats.map(({ number, label, icon: Icon }, index) => (
      <div
        key={index}
        className="group relative bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-red-600/20 hover:border-red-600/50 transition-all duration-500 transform hover:scale-105"
      >
        <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
          <Icon size={32} className="text-red-600" />
        </div>
        <div className="text-4xl md:text-5xl font-black text-red-600 mb-2 group-hover:scale-110 transition-transform duration-300">
          {number}
        </div>
        <div className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-300">
          {label}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      </div>
    ))}
  </div>
);

export default StatsGrid;