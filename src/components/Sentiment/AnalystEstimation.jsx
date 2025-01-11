import React from "react";

function AnalystEstimation(){

    return(
        <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        Analyst Estimates
        <span className="ml-2 w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-600">i</span>
      </h2>
      
      <div className="flex items-center gap-8">
        <div className="w-32 h-32 rounded-full bg-green-50 flex items-center justify-center">
          <span className="text-4xl font-semibold text-green-500">76<span className="text-xl">%</span></span>
        </div>
        
        <div className="flex-1 space-y-4">
          <div className="flex items-center">
            <div className="w-12 text-sm text-gray-600">Buy</div>
            <div className="flex-1 h-2 bg-green-500 rounded"></div>
            <div className="ml-2 text-sm text-gray-600">76%</div>
          </div>
          
          <div className="flex items-center">
            <div className="w-12 text-sm text-gray-600">Hold</div>
            <div className="w-8 h-2 bg-gray-300 rounded"></div>
            <div className="ml-2 text-sm text-gray-600">8%</div>
          </div>
          
          <div className="flex items-center">
            <div className="w-12 text-sm text-gray-600">Sell</div>
            <div className="w-16 h-2 bg-red-500 rounded"></div>
            <div className="ml-2 text-sm text-gray-600">16%</div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default AnalystEstimation;