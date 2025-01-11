import React from "react";

function Tokenomics(){

    return(
        <div className="mx-auto p-6 bg-white rounded-xl">
      <h1 className="text-3xl font-bold mb-8">Tokenomics</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Initial Distribution</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 relative">
            <svg width="179" height="180" viewBox="0 0 179 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="89.5" cy="89.7969" r="74.5" stroke="#0082FF" strokeWidth="30"/>
              <mask id="path-2-inside-1_1_922" fill="white">
                <path d="M89.5 0.296875C74.3468 0.296875 59.4417 4.14426 46.1817 11.4784C32.9217 18.8126 21.7409 29.3935 13.6873 42.2293C5.63363 55.065 0.970851 69.7355 0.135952 84.8657C-0.698948 99.9958 2.32137 115.09 8.91382 128.734L89.5 89.7969V0.296875Z"/>
              </mask>
              <path d="M89.5 0.296875C74.3468 0.296875 59.4417 4.14426 46.1817 11.4784C32.9217 18.8126 21.7409 29.3935 13.6873 42.2293C5.63363 55.065 0.970851 69.7355 0.135952 84.8657C-0.698948 99.9958 2.32137 115.09 8.91382 128.734L89.5 89.7969V0.296875Z" stroke="#FAA002" strokeWidth="60" mask="url(#path-2-inside-1_1_922)"/>
              <circle cx="89.5" cy="89.5" r="59.5" fill="white"/>
              <circle cx="89.5" cy="89.5" r="59.5" stroke="#0082FF"/>
            </svg>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-[#0082FF]"></span>
              <span className="text-lg">Crowdsale investors: 80%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-[#FAA002]"></span>
              <span className="text-lg">Foundation: 20%</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </div>
    </div>
    )
}

export default Tokenomics;