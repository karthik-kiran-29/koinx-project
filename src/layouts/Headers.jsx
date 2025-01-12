import React, { useState } from "react";

function Headers() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="flex items-center justify-between px-4 py-4 shadow-sm bg-white">
        <div className="flex items-center">
          <img 
            src="public\static\assets\logo.webp" 
            alt="brand-logo"
            className="h-6 w-auto"
          />
        </div>
        
        {/* Desktop Menu */}
        <div className="max-sm:hidden items-center space-x-8">
          <a 
            href="#" 
            className="text-gray-800 hover:text-blue-600 font-medium"
          >
            Crypto Taxes
          </a>
          <a 
            href="#" 
            className="text-gray-800 hover:text-blue-600 font-medium"
          >
            Free Tools
          </a>
          <a 
            href="#" 
            className="text-gray-800 hover:text-blue-600 font-medium"
          >
            Resource Center
          </a>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`bg-gray-600 h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`bg-gray-600 h-0.5 w-6 rounded-sm my-1 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`bg-gray-600 h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 space-y-4">
          <a 
            href="#" 
            className="block text-gray-800 hover:text-blue-600 font-medium"
          >
            Crypto Taxes
          </a>
          <a 
            href="#" 
            className="block text-gray-800 hover:text-blue-600 font-medium"
          >
            Free Tools
          </a>
          <a 
            href="#" 
            className="block text-gray-800 hover:text-blue-600 font-medium"
          >
            Resource Center
          </a>
          <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

export default Headers;