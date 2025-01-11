import React from "react";
import KeyEventsSection from "./KeyEventsSection";
import AnalystEstimation from "./AnalystEstimation";

function Sentiment(){
    
    return(
    <div className="mx-auto bg-white rounded-lg shadow">
      <h1 className="text-2xl font-semibold p-6 border-b">Sentiment</h1>
        <KeyEventsSection />
        <AnalystEstimation />
    </div>
    )
}

export default Sentiment;