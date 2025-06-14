import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-blue-400 animate-pulse" />
            <span className="text-2xl font-bold gradient-text">SkillSync</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300">Home</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300">Paths</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300">Skills</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300">Analytics</a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/30 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Paths</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Skills</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Analytics</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
