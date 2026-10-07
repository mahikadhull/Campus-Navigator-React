import { useEffect, useState } from "react";

import Header from "./Header";
import Filters from "./Filters";
import Map from "./Map";
import InfoPanel from "./InfoPanel";
import Modal from "./ui/Modal";
import CampusLegend from "./CampusLegend";
import Tutorial from "./Tutorial";
import RecentLocations from "./RecentLocations";
import MyLocation from "./MyLocation";
import NavigationUI from "./NavigationUI";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { dijkstra } from "../utils/dijkstra";
import { campusGraph } from "../data/campusGraph";
import { estimatedTime } from "../utils/estimatedTime";
import About from "./About";
import HowToUse from "./HowToUse";
import Toast from "./ui/Toast";

function CampusNavigator() {
    const [menuOpen, setMenuOpen] = useState(false);

    const [selectedLocation, setSelectedLocation] = useState(null);

    const [search, setSearch] = useState("");

    const [selectedCategory, setSelectedCategory] = useState("all");

    const [darkMode, setDarkMode] = useState(false);

    const [tutorialActive, setTutorialActive] = useState(false);

    const [isInfoOpen, setIsInfoOpen] = useState(
        window.innerWidth >= 1024
    );
    const [filtersOpen, setFiltersOpen] = useState(false);

    const [modalOpen, setModalOpen] = useState(false);
    const [modalName, setModalName] = useState("");
    const onRecent = () => {
        setModalName("recent");
        setModalOpen(true);
    };

    const onLegend = () => {
        setModalName("legend");
        setModalOpen(true);
    };

    const onAbout = () => {
        setModalName("about");
        setModalOpen(true);
    };
    const onHowToUse = () => {
        setModalName("howtouse");
        setModalOpen(true);
    }

    const [toastActive, setToastActive] = useState(false);
    const [toastContent, setToastContent] = useState(null);


    const [recentLocations, setRecentLocations] = useState(() => {
        return JSON.parse(
            localStorage.getItem("recentLocations")
        ) || [];
    });
    const [currentLocation, setCurrentLocation] = useState(null);
    const changeLocation = () => {
        setCurrentLocation(selectedLocation);
    }
    const [route, setRoute] = useState([]);
    const [walkTime, setWalkTime] = useState(0);

    const handleNavigationUI = () => {
        if (!currentLocation) {
            alert("Please set your Current Location.");
            return;
        }
        if (currentLocation.id === selectedLocation.id) {
            alert(`You are already in ${currentLocation.name}.`);
            return;
        }
        document.querySelector(".navigationUI").classList.add("active");
        setIsInfoOpen(false);
        setFiltersOpen(false);
        const path = dijkstra(campusGraph, currentLocation.id, selectedLocation.id);
        const time = estimatedTime(campusGraph, path);
        setWalkTime(time);
        setMenuOpen(false);
    }


    function handleLocationSelect(location) {

        setSelectedLocation(location);

        setIsInfoOpen(true);

        setRecentLocations(prev => {

            const recentLocation = {
                ...location,
                visitedAt: Date.now()
            };

            const filtered = prev.filter(
                loc => loc.id !== location.id
            );

            const updated = [
                recentLocation,
                ...filtered
            ].slice(0, 5);

            localStorage.setItem(
                "recentLocations",
                JSON.stringify(updated)
            );

            return updated;
        });
    }


    useEffect(() => {

        document.documentElement.setAttribute(
            "data-theme",
            darkMode ? "dark" : "light"
        );

    }, [darkMode]);


    return (
        <>
            <Header
                search={search}
                setSearch={setSearch}

                setSelectedLocation={
                    setSelectedLocation
                }


                onTheme={() =>
                    setDarkMode(prev => !prev)
                }


                setIsInfoOpen={setIsInfoOpen}

                darkMode={darkMode}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                onAbout={onAbout}
                onLegend={onLegend}
                onRecent={onRecent}
                onHowToUse={onHowToUse}

            />
            <div>
                <MyLocation currentLocation={currentLocation} setSelectedLocation={setSelectedLocation} />
                <NavigationUI currentLocation={currentLocation} selectedLocation={selectedLocation}
                    walkTime={walkTime} isInfoOpen={isInfoOpen} setIsInfoOpen={setIsInfoOpen} filtersOpen={filtersOpen}
                    setFiltersOpen={setFiltersOpen}
                />
            </div>


            <main>
                <button id="filters-toggle-btn" onClick={() => {
                    setFiltersOpen(!filtersOpen);
                }}>Explore</button>
                <Filters
                    selectedCategory={selectedCategory}
                    setSelectedCategory={
                        setSelectedCategory
                    }
                    filtersOpen={filtersOpen}
                    setFiltersOpen={setFiltersOpen}
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
                            selectedLocation={
                                selectedLocation
                            }

                            setSelectedLocation={
                                setSelectedLocation
                            }

                            selectedCategory={
                                selectedCategory
                            }

                            setIsInfoOpen={
                                setIsInfoOpen
                            }

                            onLocationSelect={
                                handleLocationSelect
                            }

                            currentLocation={
                                currentLocation
                            }
                            setMenuOpen={setMenuOpen}

                        />

                    </TransformComponent>

                </TransformWrapper>


                <InfoPanel
                    selectedLocation={
                        selectedLocation
                    }

                    isInfoOpen={
                        isInfoOpen
                    }

                    setIsInfoOpen={
                        setIsInfoOpen
                    }
                    setCurrentLocation={setCurrentLocation}
                    handleNavigationUI={handleNavigationUI}
                    setToastActive={setToastActive}
                    setToastContent={setToastContent}
                />
                {
                    modalOpen && (
                        <Modal onClose={() => {
                            setModalOpen(false)
                            setModalName(null)
                        }} title={
                            modalName === 'recent'
                                ? "Recent Locations"
                                : modalName === 'legend'
                                    ? "Campus Legend"
                                    : modalName === 'howtouse'
                                        ? "How to Use"
                                        : "About"
                        }>
                            {modalName === "recent" && <RecentLocations />}
                            {modalName === "legend" && (
                                <CampusLegend />
                            )}

                            {modalName === "about" && (
                                <p>
                                    Campus Navigator helps you explore
                                    and navigate around Chitkara University.
                                </p>
                            )}
                            {modalName === "howtouse" && (
                                <HowToUse setTutorialActive={setTutorialActive} setModalOpen={setModalOpen} />
                            )}

                        </Modal>
                    )
                }
                {
                    toastActive && (
                        <Toast
                            title='Explore U.'
                            content={
                                <>
                                    <strong>{selectedLocation.name}</strong> has been set as your current location!
                                </>
                            }
                            onClose={() => setToastActive(false)}
                        >
                        </Toast>
                    )
                }










                {tutorialActive && (
                    <Tutorial
                        active={tutorialActive}
                        onClose={() =>
                            setTutorialActive(false)
                        }
                    />
                )}

            </main>
        </>
    );
}

export default CampusNavigator;