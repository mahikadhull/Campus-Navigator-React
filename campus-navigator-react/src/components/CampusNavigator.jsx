import { useState } from "react";
import Header from "./Header";
import Filters from "./Filters";
import Map from "./Map";
import InfoPanel from "./InfoPanel";

function CampusNavigator() {
    const [selectedLocation,setSelectedLocation] = useState(null);
    const [search,setSearch] = useState("");
    const [selectedCategory,setSelectedCategory] = useState("all");

    return (
        <>
        <Header 
        search={search}
        setSearch={setSearch}
        setSelectedLocation={setSelectedLocation}
        />
        <main>
            <Filters
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            />
            <Map
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedCategory={selectedCategory}
            />
            <InfoPanel
            selectedLocation={selectedLocation}
            />
        </main>
        
        </>
    );
}

export default CampusNavigator;