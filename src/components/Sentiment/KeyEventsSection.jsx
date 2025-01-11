import React from "react";

function KeyEventsSection(){

    return(
        <div className="p-6" id="News Insights">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
          Key Events
          <span className="ml-2 w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-600">i</span>
        </h2>
        
        <div className="space-y-4">
          {[1, 2].map((_, index) => (
            <div key={index} className={`p-4 rounded-lg flex gap-4 ${index === 0 ? 'bg-blue-50' : index === 1 ? 'bg-green-50' : 'bg-white'}`}>
              <div className="flex-shrink-0">
                <div className="w-11 h-11 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 25.2569V22.4569H17.8V25.2569H15Z" fill="white"/>
                    <path d="M29 14.7485C28.9978 14.193 28.7755 13.661 28.382 13.269C27.9884 12.877 27.4555 12.6569 26.9 12.6569H12.7922C12.2352 12.6569 11.7011 12.8781 11.3073 13.2719C10.9134 13.6658 10.6922 14.1999 10.6922 14.7569V27.3569C10.6922 28.2851 11.0609 29.1754 11.7173 29.8317C12.3737 30.4881 13.2639 30.8569 14.1922 30.8569H29.8078C30.7361 30.8569 31.6263 30.4881 32.2827 29.8317C32.939 29.1754 33.3078 28.2851 33.3078 27.3569V18.9569C33.3078 18.3999 33.0865 17.8658 32.6927 17.4719C32.2989 17.0781 31.7648 16.8569 31.2078 16.8569H30.4V26.9789C30.4 27.1645 30.3263 27.3426 30.195 27.4738C30.0637 27.6051 29.8857 27.6789 29.7 27.6789C29.5143 27.6789 29.3363 27.6051 29.205 27.4738C29.0737 27.3426 29 27.1645 29 26.9789V14.7485Z" fill="white"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-2">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h3>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default KeyEventsSection;