import React from "react";

function Headers() {
  return (
    <nav className="flex items-center justify-between px-4 py-4 shadow-sm bg-white">
      <div className="flex items-center">
        <img 
          src="src/assets/logo.png" 
          alt="brand-logo"
          className="h-6 w-auto"
        />
      </div>
      
      <div className="hidden items-center space-x-8">
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
    </nav>
  );
}

export default Headers;