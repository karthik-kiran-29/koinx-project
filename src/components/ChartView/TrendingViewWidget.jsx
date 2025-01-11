import React, { useEffect, useRef, memo, useState } from 'react';

function TradingViewWidget(props) {
  const container = useRef();

  const [arrayData,setArrayData] = useState(props);

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        { "height": "460",
          "autosize": true,
          "symbol": "CRYPTO:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "backgroundColor": "rgba(255, 255, 255, 1)",
          "gridColor": "rgba(0, 0, 255, 0.06)",
          "hide_top_toolbar": true,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="w-full max-w-6xl bg-white rounded-lg shadow-sm p-6" id="Overview">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl"><img src={arrayData[0].image} /></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold">{arrayData[0].id}</span>
              <span className="text-gray-500">BTC</span>
              <span className="bg-gray-400 text-white px-3 py-1 rounded-md text-sm">Rank #1</span>
            </div>
          </div>
        </div>
        <div className="flex max-md:flex-col items-baseline gap-4">
          <span className="text-3xl font-bold">{"$"+ arrayData[0].current_price}</span>
          <span className={` text-sm font-medium ${(arrayData[0].price_change_percentage_24h>=0?"text-emerald-600":"text-red-500")}`}>{arrayData[0].price_change_percentage_24h }</span>
          <span className={`${(arrayData[0].price_change_percentage_24h>=0?"text-emerald-600":"text-red-500")}`}>{arrayData[0].price_change_24h }</span>
        </div>
      </div>
      <div>
        <div className="tradingview-widget-container" ref={container}>
          <div className="tradingview-widget-container__widget" ></div>
          <div className="tradingview-widget-copyright">
            <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);