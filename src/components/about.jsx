import React from "react";

const About = () => {
  return (
    <div className=" mx-auto px-4 py-8 bg-white">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#0F1629] mb-4">What is Bitcoin?</h2>
        <p className="text-base text-gray-700 leading-relaxed">
          Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#0F1629] mb-4">Lorem ipsum dolor sit amet</h2>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
        </p>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#0F1629] mb-6">Already Holding Bitcoin?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-lg p-4">
            <div className="flex items-center">
              <img 
                src="src\assets\About_Section_1.png"
                alt="Calculate profits" 
                className="w-32 h-32 object-cover rounded-lg mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Calculate your Profits</h3>
                <button className="bg-white text-[#0F1629] px-4 py-2 rounded-lg flex items-center">
                  Check Now 
                  <svg className="ml-2" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.0658 9.77144H4.56577" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.0243 4.7511L17.0659 9.7711L12.0243 14.7919" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-400 to-red-400 rounded-lg p-4">
            <div className="flex items-center">
              <img 
                src="src\assets\About_Section_2.png"
                alt="Calculate tax" 
                className="w-32 h-32 object-cover rounded-lg mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Calculate your tax liability</h3>
                <button className="bg-white text-[#0F1629] px-4 py-2 rounded-lg flex items-center">
                  Check Now
                  <svg className="ml-2" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.0658 9.77144H4.56577" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.0243 4.7511L17.0659 9.7711L12.0243 14.7919" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-base text-gray-700 leading-relaxed">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui.
        </p>
      </div>
    </div>
  );
};

export default About;