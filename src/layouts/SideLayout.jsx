import React from "react";
import GetStarted from "../components/GetStarted";
import Trending from "../components/Trending";

function SideLayout(){

    return(
        <div className="w-1/3 mx-10 space-y-8">
            <GetStarted/>
            <Trending/>
        </div>
    )
}

export default SideLayout;