import React, { useEffect, useState } from 'react';

const Trending = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchTrending = async () => {
      const url = 'https://api.coingecko.com/api/v3/search/trending';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json', 
          'x-cg-demo-api-key': 'CG-xNtyHFnqTM68rYZ2P841Aud3'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        
        console.log(data)

        const formattedCoins = data.coins.map(coin => ({
          name: coin.item.name,
          symbol: coin.item.symbol.toUpperCase(),
          icon: getIconType(coin.item.symbol.toLowerCase()),
          percentage: `${(coin.item.price_btc * 100).toFixed(2)}%`
        }));
        setTrendingCoins(formattedCoins);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrending();
  }, []);

  // Helper function to determine icon type
  const getIconType = (symbol) => {
    if (symbol.includes('eth')) return 'ethereum';
    if (symbol.includes('btc')) return 'bitcoin';
    return 'polygon'; // default icon
  };

  if (isLoading) {
    return (
      <div className="p-4 bg-white rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Trending Coins (24h)</h2>
        <div className="space-y-4">
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded-2xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Trending Coins (24h)</h2>
      <div className="space-y-4">
        {trendingCoins.map((coin, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center
                ${coin.icon === 'ethereum' ? 'bg-blue-500' : 
                  coin.icon === 'bitcoin' ? 'bg-orange-400' : 'bg-purple-500'}`}>
                {coin.icon === 'ethereum' && (
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 0L4.5 12L12 16L19.5 12L12 0zM4.5 13.5L12 24L19.5 13.5L12 17.5L4.5 13.5z"/>
                  </svg>
                )}
                {coin.icon === 'bitcoin' && (
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10zm4.5-13.5c.2-1.4-.9-2.2-2.5-2.7l.5-2-1.2-.3-.5 1.9c-.3-.1-.6-.2-1-.2l.5-1.9-1.2-.3-.5 2c-.2-.1-.5-.1-.7-.2l-1.7-.4-.3 1.3s.9.2.9.2c.5.1.6.4.5.7l-.6 2.3c0 0 .1 0 .1.1-.1 0-.1 0-.2 0l-.8 3.3c-.1.2-.2.4-.6.3 0 0-.9-.2-.9-.2L6 15.3l1.6.4c.3.1.6.2.9.2l-.5 2 1.2.3.5-2c.3.1.7.2 1 .2l-.5 2 1.2.3.5-2c1.9.4 3.4.2 4-1.5.5-1.4 0-2.2-1-2.7.7-.1 1.2-.6 1.4-1.5zM13 15.3c-.4 1.4-2.9.6-3.7.5l.7-2.6c.8.2 3.4.6 3 2.1zm.4-3.6c-.3 1.3-2.4.6-3.1.5l.6-2.2c.7.2 2.8.4 2.5 1.7z"/>
                  </svg>
                )}
                {coin.icon === 'polygon' && (
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 17.5l-3 1.7-3-1.7v-3.4l3 1.7 3-1.7v3.4zm0-5.1l-3 1.7-3-1.7v-3.4l3 1.7 3-1.7v3.4z"/>
                  </svg>
                )}
              </div>
              <div>
                <span className="font-medium text-gray-900">{coin.name}</span>
                <span className="ml-2 text-sm text-gray-500">{coin.symbol}</span>
              </div>
            </div>
            <div className="flex items-center text-emerald-500">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none">
                <path d="M12 4l-8 8h16l-8-8z" fill="currentColor"/>
              </svg>
              <span className="font-medium">{coin.percentage}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;