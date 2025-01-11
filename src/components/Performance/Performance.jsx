import React from "react";

function Performance() {
 
  return (
    <div className="p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Performance</h2>
      <div className="space-y-6 md:space-y-8">
        {/* Today's Range */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex justify-between md:block md:w-32">
            <div>
              <div className="text-sm md:text-base text-gray-500">Today's Low</div>
              <div className="font-semibold">46,930.22</div>
            </div>
            <div className="text-right md:hidden">
              <div className="text-sm md:text-base text-gray-500">Today's High</div>
              <div className="font-semibold">49,343.83</div>
            </div>
          </div>

          <div className="my-4 md:my-0 md:flex-1 md:px-4">
            <div className="relative w-full">
              <svg className="w-full" height="6" viewBox="0 0 583 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.981934" width="100%" height="4.63" rx="2.315" fill="#121212" fillOpacity="0.3"/>
                <rect y="0.981934" width="100%" height="4.63" rx="2.315" fill="url(#paint0_linear_1_634)"/>
                <defs>
                  <linearGradient id="paint0_linear_1_634" x1="0" y1="0.981934" x2="583" y2="0.981934" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF4949"/>
                    <stop offset="0.153341" stopColor="#FF4E11"/>
                    <stop offset="0.304385" stopColor="#FC870A"/>
                    <stop offset="0.48668" stopColor="#FFAF11"/>
                    <stop offset="0.627308" stopColor="#C2CB21"/>
                    <stop offset="1" stopColor="#11EB68"/>
                  </linearGradient>
                </defs>
              </svg>
              <div className="text-center mt-2">
                <span className="font-semibold text-sm md:text-base">
                  ${Number(48637.83).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="hidden md:block md:w-32 text-right">
            <div className="text-gray-500">Today's High</div>
            <div className="font-semibold">49,343.83</div>
          </div>
        </div>

        {/* 52W Range */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex justify-between md:block md:w-32">
            <div>
              <div className="text-sm md:text-base text-gray-500">52W Low</div>
              <div className="font-semibold">16,930.22</div>
            </div>
            <div className="text-right md:hidden">
              <div className="text-sm md:text-base text-gray-500">52W High</div>
              <div className="font-semibold">49,743.83</div>
            </div>
          </div>

          <div className="my-4 md:my-0 md:flex-1 md:px-4">
            <svg className="w-full" height="6" viewBox="0 0 583 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.981934" width="100%" height="4.63" rx="2.315" fill="#121212" fillOpacity="0.3"/>
              <rect y="0.981934" width="100%" height="4.63" rx="2.315" fill="url(#paint1_linear_1_634)"/>
              <defs>
                <linearGradient id="paint1_linear_1_634" x1="0" y1="0.981934" x2="583" y2="0.981934" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF4949"/>
                  <stop offset="0.153341" stopColor="#FF4E11"/>
                  <stop offset="0.304385" stopColor="#FC870A"/>
                  <stop offset="0.48668" stopColor="#FFAF11"/>
                  <stop offset="0.627308" stopColor="#C2CB21"/>
                  <stop offset="1" stopColor="#11EB68"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="hidden md:block md:w-32 text-right">
            <div className="text-gray-500">52W High</div>
            <div className="font-semibold">49,743.83</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance;