import React from "react";
import Fundamentals from "./Fundamentals";
import Performance from "./Performance";

function PerformanceSection(){

    return(
     <div className="bg-white rounded-lg shadow-sm">
      <Performance />
      <Fundamentals />
    </div>
    )
}

export default PerformanceSection;