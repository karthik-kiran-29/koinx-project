import React from "react";
import GetStarted from "../components/GetStarted";
import Trending from "../components/Trending";

function SideLayout(props){

    return(
        <div className=" md:w-1/3 md:mx-10 mx-1 space-y-8">
            <GetStarted/>
            <Trending coins={props.data}/>
        </div>
    )
}

export default SideLayout;