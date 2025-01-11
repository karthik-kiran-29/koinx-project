import React from "react";

const MiniChart = (props) => {
    
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 w-64">
      <div className="flex items-center gap-2 mb-1">
        <div className="rounded-full flex items-center justify-center">
          <img 
            src={props.data.image} 
            alt={`${props.data.symbol}`}
            className="w-5 h-5"
          />
        </div>
        <span className="font-semibold text-gray-900">{props.data.symbol}</span>
        <span className="text-emerald-500 ml-auto">{props.data.price_change_percentage_24h}</span>
      </div>
      
      <div className="text-2xl font-bold text-gray-900 mb-2">
      {props.data.current_price}
      </div>
      
      <img 
        src={`${"https://www.coingecko.com/coins/2847"+Math.floor(Math.random()*9)+"/sparkline.svg"}`} 
        alt="Price chart"
        className="w-full h-16 text-emerald-500"
      />
    </div>
  );
};

export default MiniChart;