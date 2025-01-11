import React, { useState } from 'react';

const NavigationBar = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  
  const navItems = [
    'Overview',
    'Fundamentals',
    'News Insights',
    'Sentiments',
    'Team',
    'Technicals',
    'Tokenomics'
  ];

  return (
    <nav className="border-b border-gray-200">
      <div className="flex space-x-8">
        {navItems.map((item) => (
          <a
            key={item}
            onClick={() => setActiveTab(item)}
            className={`px-1 py-4 text-gray-700 cursor-pointer relative 
              ${activeTab === item ? 'text-blue-600' : 'hover:text-gray-900'}
              transition-colors duration-200`}
            href={"#"+ item}  
          >
            {item}
            {activeTab === item && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" />
            )}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;