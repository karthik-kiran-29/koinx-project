import React, { useEffect, useRef, memo } from 'react';

function TradingViewMiniWidget({data}) {
  const container = useRef();

  const inputData = data;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: "BINANCE:SOLUSDT" ,   // "BINANCE:SOLUSDT"
      width: "100%",
      height: "100%",
      locale: "en",
      dateRange: "1D",
      colorTheme: "light",
      trendLineColor: "rgba(152, 0, 255, 1)",
      underLineColor: "rgba(152, 0, 255, 1)",
      underLineBottomColor: "rgba(0, 255, 255, 0)",
      isTransparent: false,
      autosize: true,
      largeChartUrl: "",
      chartOnly: false,
      noTimeScale: false
    });

    container.current.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      if (container.current) {
        const scriptElement = container.current.querySelector('script');
        if (scriptElement) {
          container.current.removeChild(scriptElement);
        }
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-6">
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
}

export default memo(TradingViewMiniWidget);