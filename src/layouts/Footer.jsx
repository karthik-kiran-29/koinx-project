import React from "react";
import TradingViewMiniWidget from "../components/ChartView/TradingViewMiniWidget";

function Footer() {
  const coinsList = [
    "BINANCE:SOLUSDT",
    "BINANCE:BTCUSD",
    "CRYPTO:ETHUSD",
    "CRYPTO:ETHUSD",
    "CRYPTO:ETHUSD"
  ];

  return (
    <div className="px-6 py-8 bg-white mt-8">
      <div className="mb-8">
        <p className="text-xl font-semibold text-gray-900 mb-4">You May Also Like</p>
        <div className="flex gap-4 justify-evenly overflow-x-auto pb-4 relative scrollbar-hide">
          {coinsList.map((data) => (
            <div className="flex-shrink-0 w-56 bg-white rounded-xl border border-gray-100 shadow-sm">
              <TradingViewMiniWidget data={data} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xl font-semibold text-gray-900 mb-4">Trending Coins</p>
        <div className="flex gap-4 overflow-x-auto justify-evenly pb-4 relative scrollbar-hide">
          {coinsList.map((data) => (
            <div className="flex-shrink-0 w-56 bg-white rounded-xl border border-gray-100 shadow-sm">
              <TradingViewMiniWidget data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;