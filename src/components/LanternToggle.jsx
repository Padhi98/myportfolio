import React from 'react';

const LanternToggle = ({ isDark, onToggle }) => {
  return (
    <div className="fixed top-4 right-4 z-50 cursor-pointer" onClick={onToggle}>
      {/* Lantern Body */}
      <div className={`relative w-8 h-12 ${isDark ? 'bg-yellow-500' : 'bg-gray-300'} rounded-lg 
        transition-all duration-300 shadow-lg
        ${isDark ? 'shadow-yellow-200' : ''}`}>
        {/* Lantern Top */}
        <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-2 
          ${isDark ? 'bg-yellow-600' : 'bg-gray-400'} rounded-t-lg`}></div>
        
        {/* Light Effect */}
        <div className={`absolute inset-0 rounded-lg ${isDark ? 'animate-pulse' : ''} 
          ${isDark ? 'bg-yellow-400 opacity-50' : 'bg-transparent'}`}></div>
        
        {/* Cord */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-400
          before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 
          before:w-2 before:h-2 before:bg-gray-600 before:rounded-full"></div>
      </div>
    </div>
  );
};

export default LanternToggle;