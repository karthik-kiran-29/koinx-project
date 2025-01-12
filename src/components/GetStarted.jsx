import React from 'react';

function GetStarted(){

    return (
        <div className="bg-blue-600 p-8 rounded-2xl text-center mx-auto">
        <div className="text-white text-2xl font-bold mb-4 py-2">
          Get Started with KoinX for FREE
        </div>
        
        <div className="text-white text-sm mb-6 py-2">
          With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
        </div>
        
        <img 
          src='static\assets\GetStarted_Section.webp'
          alt='Get started animated'
          className="mx-auto my-12"
        />
        
        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto my-2 hover:bg-gray-100 transition-colors">
          Get Started for FREE
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>
      </div>
    )
}

export default GetStarted;