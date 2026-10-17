import { useState } from "react";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import SearchFilters from "./SearchFilters";

function Header({
    search, setSearch, setSelectedLocation, onTheme, setIsInfoOpen, darkMode, onHowToUse,
    menuOpen,setMenuOpen,onRecent,onAbout,onLegend
}) {
    const [isFood,setOnFood] = useState(false);
    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }
    function handleHowToUse() {
        setMenuOpen(false);
        onHowToUse();
    }
    if( document.querySelector(".navigationUI")?.classList.contains("active")){
            document.querySelector('#search-wrapper')?.classList.add('hidden');
    };
    return (
        <header>
            <nav>
                <div id="nav-title">
                    <button id="logo">Explore <span>U.</span></button>

                </div>
                <div id='search-wrapper'>
                <SearchBar
                    search={search}
                    setSearch={setSearch}
                    setSelectedLocation={setSelectedLocation}
                    setIsInfoOpen={setIsInfoOpen}
                    isFood={isFood}
                />
                <SearchFilters setOnFood={setOnFood} isFood={isFood}/>
                </div>

                <button id="menu-btn" aria-label="Open menu" aria-expanded={menuOpen}
                    onClick={toggleMenu}
                > <i className={menuOpen
                    ? "fa-solid fa-xmark"
                    : "fa-solid fa-bars"
                }></i></button>
            </nav>
            <MobileMenu menuOpen={menuOpen}
                onTheme={onTheme}
                darkMode={darkMode}
                onHowToUse={handleHowToUse}
                onAbout={onAbout}
                onLegend = {onLegend}
                onRecent = {onRecent}

            />
        </header>
    );
}
export default Header;