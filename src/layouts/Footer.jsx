import React from "react";
import MiniChart from "../components/MiniChart";

function Footer(props) {
  const coinsList = props.data;
  
  const scrollContainer = (containerId, direction) => {
    const container = document.getElementById(containerId);
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  // Fixed arrow rotation values
  const ArrowIcon = ({ direction }) => (
    <div className={`border-t-2 border-r-2 border-gray-600 w-2 h-2 
      ${direction === 'left' ? 'rotate-0' : 'rotate-45'} transform`}
    />
  );

  const CarouselSection = ({ title, id, data }) => (
    <div className="mb-8">
      <p className="text-xl font-semibold text-gray-900 mb-4">{title}</p>
      <div className="relative">
        <button 
          onClick={() => scrollContainer(id, 'left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-md hover:bg-white hidden md:flex items-center justify-center 65"
          aria-label="Scroll left"
        >
          <ArrowIcon direction="left" />
        </button>
        
        <div 
          id={id}
          className="flex gap-4 md:gap-8 overflow-x-auto pb-4 px-2 snap-x snap-mandatory scrollbar-hide scroll-smooth"
        >
          {data.map((data, index) => (
            <div 
              key={index}
              className="flex-shrink-0 min-w-[280px] md:min-w-[320px] bg-white rounded-xl border border-gray-100 shadow-sm snap-start"
            >
              <MiniChart data={data}/>
            </div>
          ))}
        </div>

        <button 
          onClick={() => scrollContainer(id, 'right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-md hover:bg-white hidden md:flex items-center justify-center"
          aria-label="Scroll right"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="px-4 md:px-6 py-8 bg-white mt-8">
      <CarouselSection 
        title="You May Also Like" 
        id="liked-coins" 
        data={coinsList}
      />
      <CarouselSection 
        title="Trending Coins" 
        id="trending-coins" 
        data={coinsList}
      />
    </div>
  );
}

export default Footer;