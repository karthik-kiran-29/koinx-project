import React from 'react';

const Trending = (props) => {
  console.log('Props received:', props);
  
  // Check if props.coins exists and is an array
  const coins = Array.isArray(props.coins) ? props.coins : [];

  // Add error handling for empty or invalid data
  if (!props.coins) {
    return <div className="p-4 bg-white rounded-2xl">Loading...</div>;
  }

  if (!Array.isArray(props.coins)) {
    console.error('Expected coins to be an array, received:', typeof props.coins);
    return <div className="p-4 bg-white rounded-2xl">Error: Invalid data format</div>;
  }

  return (
    <div className="p-4 bg-white rounded-2xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Trending Coins (24h)</h2>
      <div className="space-y-4">
        {coins.map((coin, index) => (
          <div key={coin.id || index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <img src={coin.image} alt={`${coin.id} icon`} />
              </div>
              <span className="font-medium text-gray-900">{coin.id}</span>
            </div>
            <div className={`flex items-center ${(coin.price_change_percentage_24h>=0? "text-emerald-600":"text-red-500")}`}>
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none">
                <path d="M12 4l-8 8h16l-8-8z" fill="currentColor"/>
              </svg>
              <span className="font-medium">
                {typeof coin.price_change_percentage_24h === 'number' 
                  ? `${coin.price_change_percentage_24h.toFixed(2)}%` 
                  : '0%'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;