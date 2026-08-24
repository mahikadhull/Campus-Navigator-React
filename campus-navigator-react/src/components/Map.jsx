import { useEffect, useRef } from "react";
import { locations } from "../data/locations";

function Map({ selectedLocation, setSelectedLocation, selectedCategory, setIsInfoOpen }) {
    const mapRef = useRef(null);
    function handleMapClick(event) {
        const building = event.target.closest(".location");
        if (!building) return;
        const location = locations.find(
            loc => loc.id === building.id
        );
        if (!location) return;
        setSelectedLocation(location);
        setIsInfoOpen(true);
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

        // Remove previous selection
        buildings.forEach(building => {
            building.classList.remove("selected-building");
            building.style.removeProperty("--selected-fill");
            building.style.removeProperty("--selected-stroke");
        });

        if (!selectedLocation) {
            return;
        }

        const selectedBuilding =
            mapRef.current.querySelector(
                `#${selectedLocation.id}`
            );

        if (!selectedBuilding) return;

        selectedBuilding.classList.add("selected-building");
        selectedBuilding.style.setProperty(
            "--selected-fill", `var(--${selectedLocation.category})`
        );
        selectedBuilding.style.setProperty(
            "--selected-stroke", `var(--${selectedLocation.category}_stroke)`
        );

    }, [selectedLocation]);
    useEffect(() => {

        if (!mapRef.current) return;

        const buildings =
            mapRef.current.querySelectorAll(".location");

        buildings.forEach(building => {

            const location = locations.find(
                loc => loc.id === building.id
            );

            if (!location) return;

            building.classList.remove("highlight");
            building.style.removeProperty("--highlight-fill");
            building.style.removeProperty("--highlight-stroke");

            if (
                selectedCategory === "all" ||
                location.category === selectedCategory
            ) {
                building.classList.add("highlight");
                building.style.setProperty(
                    "--highlight-fill",
                    `var(--${location.category})`
                );
                building.style.setProperty(
                    "--highlight-stroke",
                    `var(--${location.category}_stroke)`
                );
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