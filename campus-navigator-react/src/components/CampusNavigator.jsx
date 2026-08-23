import { useEffect, useState } from "react";
import Header from "./Header";
import Filters from "./Filters";
import Map from "./Map";
import InfoPanel from "./InfoPanel";
import Modal from "./Modal";
import CampusLegend from "./CampusLegend";

import {TransformWrapper,TransformComponent} from "react-zoom-pan-pinch";


function CampusNavigator() {

    const [selectedLocation, setSelectedLocation] = useState(null);
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const [aboutOpen, setAboutOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const [isInfoOpen, setIsInfoOpen] = useState(
        window.innerWidth >= 1024
    );

    // Campus Legend state
    const [legendOpen, setLegendOpen] = useState(false);


    useEffect(() => {
            document.documentElement.setAttribute("data-theme",
            darkMode 
            ? "dark" 
            : "light");
        }, [darkMode]);


    return (
        <>

            <Header
                search={search}
                setSearch={setSearch}
                setSelectedLocation={setSelectedLocation}

                onAbout={() => setAboutOpen(true)}

                onTheme={() =>
                    setDarkMode(prev => !prev)
                }

                onLegend={() =>
                    setLegendOpen(true)
                }

                setIsInfoOpen={setIsInfoOpen}

                darkMode={darkMode}
            />



            <main>

                <Filters
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />


                <TransformWrapper
                    initialScale={1}
                    minScale={0.5}
                    maxScale={4}

                    wheel={{
                        step: 0.02
                    }}

                    limitToBounds={true}

                    centerOnInit={true}

                    panning={{
                        disabled: false,
                        velocityDisabled: false
                    }}
                >

                    <TransformComponent>

                        <Map
                            selectedLocation={selectedLocation}
                            setSelectedLocation={
                                setSelectedLocation
                            }

                            selectedCategory={
                                selectedCategory
                            }

                            setIsInfoOpen={
                                setIsInfoOpen
                            }
                        />

                    </TransformComponent>

                </TransformWrapper>


                <InfoPanel
                    selectedLocation={selectedLocation}
                    isInfoOpen={isInfoOpen}
                    setIsInfoOpen={setIsInfoOpen}
                />


                {/* ABOUT */}

                <Modal
                    isOpen={aboutOpen}
                    onClose={() =>
                        setAboutOpen(false)
                    }
                >

                    <h1>
                        About Campus Navigator
                    </h1>

                    <h3>
                        Explore. Discover. Navigate.
                    </h3>

                    <br />

                    <p>
                        Campus Navigator is an interactive
                        campus map designed to make finding
                        your way around campus easier.

                        <br />

                        Search for buildings, explore locations
                        by category, and select any building
                        to learn more about it.

                        <br />

                        Built with React, CSS & SVG as a
                        front-end project.
                    </p>

                </Modal>


                {/* CAMPUS LEGEND */}

                <CampusLegend
                    isOpen={legendOpen}
                    onClose={() => setLegendOpen(false)}
                    setSearch={setSearch}
                    setSelectedLocation={setSelectedLocation}
                />

            </main>

        </>
    );
}

export default CampusNavigator;