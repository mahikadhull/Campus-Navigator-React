import { useState } from "react";
import { locations } from "../data/locations";

function MyLocation({currentLocation,setSelectedLocation}) {
    const handleLocationClick = () => {
        if (currentLocation)  setSelectedLocation(currentLocation);
    }
    return (
        <>
        <h5>Current Location</h5>
        <button onClick={()=>handleLocationClick()}>{currentLocation ? `${currentLocation.name}` : "No location selected."}</button>
        </>
    )
    
}

export default MyLocation;