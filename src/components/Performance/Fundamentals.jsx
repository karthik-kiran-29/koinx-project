import React from "react";

function Fundamentals(){

    return(
        <div className="p-6 border-t border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-bold">Fundamentals</h2>
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2"/>
          <path strokeWidth="2" d="M12 16v-4m0-4h.01"/>
        </svg>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">Bitcoin Price</span>
            <span className="font-semibold">${Number(16815.46).toLocaleString()}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">24h Low / 24h High</span>
            <span className="font-semibold">${Number(16382.07).toLocaleString()} / ${Number(16874.12).toLocaleString()}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">7d Low / 7d High</span>
            <span className="font-semibold">${Number(16382.07).toLocaleString()} / ${Number(16874.12).toLocaleString()}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">Trading Volume</span>
            <span className="font-semibold">${Number(23249202782).toLocaleString()}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">Market Cap Rank</span>
            <span className="font-semibold">#1</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">Market Cap</span>
            <span className="font-semibold">${Number(323507290047).toLocaleString()}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">Market Cap Dominance</span>
            <span className="font-semibold">38.343%</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">Volume / Market Cap</span>
            <span className="font-semibold">0.0718</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">All-Time High</span>
            <div className="text-right">
              <div className="font-semibold">${Number(69044.77).toLocaleString()}<span className="text-red-500 ml-1">-75.6%</span></div>
              <div className="text-sm text-gray-500">Nov 10, 2021 (about 1 year)</div>
            </div>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-500">All-Time Low</span>
            <div className="text-right">
              <div className="font-semibold">${Number(67.81).toLocaleString()}<span className="text-green-500 ml-1">24729.1%</span></div>
              <div className="text-sm text-gray-500">Jul 06, 2013 (over 9 years)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Fundamentals;