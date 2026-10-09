import { useEffect, useRef, useState } from "react";

import { locations } from "../data/locations";


function Map({
    selectedLocation,
    setSelectedLocation,
    selectedCategory,
    setIsInfoOpen,
    onLocationSelect,
    currentLocation,
    setMenuOpen, mapTheme, setMapTheme
}) {

    const mapRef = useRef(null);
    const [tooltip, setTooltip] = useState({});
    const [mapThemeMenu, openMapThemeMenu] = useState(false);


    /*
     * Handle clicking a building
     */
    function handleMapClick(event) {

        const building =
            event.target.closest(".location");


        if (!building) {
            return;
        }
        if (document.querySelector(".navigationUI").classList.contains("active")) {
            alert("Map Access Disabled during Navigation. Exit navigation mode to access the map.");
            return;
        };


        const location =
            locations.find(
                loc => loc.id === building.id
            );


        if (!location) {
            return;
        }
        const box = building.getBoundingClientRect();
        const mapBox = mapRef.current.getBoundingClientRect();
        setTooltip({
            name: location.name,
            x: box.left -
                mapBox.left +
                box.width / 2,
            y: box.top -
                mapBox.top
        });


        onLocationSelect(location);
        setMenuOpen(false);
    }



    /*
     * Load SVG map
     */
    useEffect(() => {

        async function loadMap() {

            try {

                const response =
                    await fetch("/campusMap.svg");


                const svg =
                    await response.text();


                mapRef.current.innerHTML = svg;


                const svgElement =
                    mapRef.current.querySelector("svg");


                if (!svgElement) {
                    return;
                }


                svgElement.addEventListener(
                    "click",
                    handleMapClick
                );

            } catch (error) {

                console.error(
                    "Failed to load campus map:",
                    error
                );
            }
        }


        loadMap();


        return () => {

            const svgElement =
                mapRef.current?.querySelector("svg");


            if (svgElement) {

                svgElement.removeEventListener(
                    "click",
                    handleMapClick
                );
            }
        };

    }, []);



    /*
     * Highlight selected building
     */
    useEffect(() => {

        if (!mapRef.current) {
            return;
        }


        const buildings =
            mapRef.current.querySelectorAll(
                ".location"
            );


        buildings.forEach(building => {

            building.classList.remove(
                "selected-building"
            );


            building.style.removeProperty(
                "--selected-fill"
            );


            building.style.removeProperty(
                "--selected-stroke"
            );
        });


        if (!selectedLocation) {
            return;
        }


        const selectedBuilding =
            mapRef.current.querySelector(
                `#${selectedLocation.id}`
            );


        if (!selectedBuilding) {
            return;
        }


        selectedBuilding.classList.add(
            "selected-building"
        );


        selectedBuilding.style.setProperty(
            "--selected-fill",
            `var(--${selectedLocation.category})`
        );


        selectedBuilding.style.setProperty(
            "--selected-stroke",
            `var(--${selectedLocation.category}_stroke)`
        );

    }, [selectedLocation]);



    /*
     * Category filtering
     */
    useEffect(() => {

        if (!mapRef.current) {
            return;
        }


        const buildings =
            mapRef.current.querySelectorAll(
                ".location"
            );


        buildings.forEach(building => {

            const location =
                locations.find(
                    loc => loc.id === building.id
                );


            if (!location) {
                return;
            }


            building.classList.remove(
                "highlight"
            );


            building.style.removeProperty(
                "--highlight-fill"
            );


            building.style.removeProperty(
                "--highlight-stroke"
            );


            if (
                selectedCategory === "all" ||
                location.category === selectedCategory
            ) {

                building.classList.add(
                    "highlight"
                );


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



    /*
     * CURRENT LOCATION MARKER
     */
    useEffect(() => {

        if (!mapRef.current) {
            return;
        }


        const svgElement =
            mapRef.current.querySelector("svg");


        if (!svgElement) {
            return;
        }


        /*
         * Remove previous marker
         */
        const oldMarker =
            svgElement.querySelector(
                "#current-location-marker"
            );


        if (oldMarker) {
            oldMarker.remove();
        }


        /*
         * If GPS location hasn't
         * been obtained yet, do nothing.
         */
        if (!currentLocation) {
            return;
        }


        /*
         * TEMPORARY TEST POSITION
         *
         * SVG viewBox:
         * 0 0 859 857
         *
         * We'll replace this with
         * GPS -> SVG conversion later.
         */
        const x = 430;
        const y = 400;


        /*
         * Create SVG group
         */
        const marker =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "g"
            );


        marker.setAttribute(
            "id",
            "current-location-marker"
        );


        /*
         * Marker contents
         */
        marker.innerHTML = `

            <!-- Outer accuracy/radar circle -->
            <circle
                cx="${x}"
                cy="${y}"
                r="22"
                fill="none"
                stroke="#4285F4"
                stroke-width="3"
                opacity="0.4"
            />

            <!-- Main location dot -->
            <circle
                cx="${x}"
                cy="${y}"
                r="12"
                fill="#4285F4"
                stroke="white"
                stroke-width="4"
            />

        `;


        /*
         * Put marker on top of the map
         */
        svgElement.appendChild(marker);


    }, [currentLocation]);



    return (
        <section className="map-section">
            <button id="map-theme-btn" onClick={() => {
                openMapThemeMenu(!mapThemeMenu);
            }}>{!mapThemeMenu ? <i class="fa-solid fa-ellipsis-vertical"></i> : <i className="fa-solid fa-xmark"></i>}</button>
            <div
                id="map-container"
                ref={mapRef}
            />
            
            {
                mapThemeMenu && (
                    <div id="map-theme-menu">
                        <button
                            className={`theme-option ${mapTheme === "campus" ? "active" : ""}`}
                            onClick={() => setMapTheme("campus")}
                        >
                            <i className="fa-solid fa-leaf"></i>
                            <span> Campus </span>
                            <i className="fa-solid fa-check-circle check"></i>
                        </button>

                        <button
                            className={`theme-option ${mapTheme === "midnight" ? "active" : ""}`}
                            onClick={() => setMapTheme("midnight")}
                        >
                            <i className="fa-solid fa-moon"></i>
                            <span> Midnight </span>
                            <i className="fa-solid fa-check-circle check"></i>
                        </button>

                        <button
                            className={`theme-option ${mapTheme === "cartographic" ? "active" : ""}`}
                            onClick={() => setMapTheme("cartographic")}
                        >
                            <i className="fa-solid fa-map"></i>
                            <span> Cartographic </span>
                            <i className="fa-solid fa-check-circle check"></i>
                        </button>

                        <button
                            className={`theme-option ${mapTheme === "blueprint" ? "active" : ""}`}
                            onClick={() => setMapTheme("blueprint")}
                        >
                            <i className="fa-solid fa-compass-drafting"></i>
                            <span> Blueprint </span>
                            <i className="fa-solid fa-check-circle check"></i>
                        </button>

                        <button
                            className={`theme-option ${mapTheme === "monochrome" ? "active" : ""}`}
                            onClick={() => setMapTheme("monochrome")}
                        >
                            <i className="fa-solid fa-circle-half-stroke"></i>
                            <span> Monochrome </span>
                            <i className="fa-solid fa-check-circle check"></i>
                        </button>
                    </div>
                )
            }
        </section>
    );
}


export default Map;