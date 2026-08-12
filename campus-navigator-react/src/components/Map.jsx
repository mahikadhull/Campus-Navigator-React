import { useEffect, useRef } from "react";
import { locations } from "../data/locations";

function Map({ selectedLocation, setSelectedLocation, selectedCategory }) {
    const mapRef = useRef(null);
    function handleMapClick(event) {
        const building = event.target.closest(".location");
        if (!building) return;
        const location = locations.find(
            loc => loc.id === building.id
        );
        if (!location) return;
        setSelectedLocation(location);
    }
    // const [svgContent, setSvgContent] = useState("");
    useEffect(() => {
        async function loadMap() {
            const response = await fetch("/campusMap.svg");
            const svg = await response.text();
            mapRef.current.innerHTML = svg;
            const svgElement = mapRef.current.querySelector("svg");
            svgElement.addEventListener("click", handleMapClick);
        }
        loadMap();

        return () => {
            const svgElement = mapRef.current?.querySelector("svg");
            if (svgElement) {
                svgElement.removeEventListener("click", handleMapClick);
            }
        }
    }, []);
    useEffect(() => {

        if (!mapRef.current) return;

        const buildings =
            mapRef.current.querySelectorAll(".location");

        buildings.forEach(building => {

            const location = locations.find(
                loc => loc.id === building.id
            );

            if (!location) return;

            if (
                selectedCategory === "all" ||
                location.category === selectedCategory
            ) {
                building.classList.add("highlight");
            } else {
                building.classList.remove("highlight");
            }

        });

    }, [selectedCategory]);
    return (
        <section className="map-section">
            <div id="map-container"
                ref={mapRef}

            />


        </section>
    );
}

export default Map;