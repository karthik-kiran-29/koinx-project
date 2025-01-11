import React from "react";
import PerformanceSection from "../components/Performance/PerformanceSection";
import TrendingViewWidget from "../components/ChartView/TrendingViewWidget";
import Sentiment from "../components/Sentiment/Sentiment";
import About from "../components/about";
import Tokenomics from "../components/Tokenomics";
import Team from "../components/Team";
import NavigationBar from "../components/NavigationBar";

function MainLayout(){

    return(
        <div className="md:w-2/3 md:mx-10 mx-1 space-y-8">
           <TrendingViewWidget/>
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