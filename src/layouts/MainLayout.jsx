import React, { useEffect, useState } from "react";
import PerformanceSection from "../components/Performance/PerformanceSection";
import TrendingViewWidget from "../components/ChartView/TrendingViewWidget";
import Sentiment from "../components/Sentiment/Sentiment";
import About from "../components/about";
import Tokenomics from "../components/Tokenomics";
import Team from "../components/Team";
import NavigationBar from "../components/NavigationBar";

function MainLayout(){
    const [apiData,setApiData] = useState({});
    
    useEffect(
        () =>{
            const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Cinr&include_market_cap=false&include_24hr_vol=true&include_24hr_change=false&include_last_updated_at=false';
            const options = {
                method: 'GET',
                headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-xNtyHFnqTM68rYZ2P841Aud3'}
            };

            fetch(url, options)
                .then(res => res.json())
                .then(json => setApiData(json["bitcoin"]))
                .catch(err => console.error(err));
        }
        ,[])

        console.log(apiData);

    return(
        <div className="md:w-2/3 md:mx-10 mx-1 space-y-8">
           <TrendingViewWidget {...apiData}/>
           <NavigationBar/>
           <PerformanceSection/>
           <Sentiment/>
           <About/>
           <Tokenomics/>
           <Team/>
        </div>
    )
}

export default MainLayout;