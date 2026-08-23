import { useState } from "react";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";

function Header({
    search, setSearch, setSelectedLocation, onAbout, onTheme, setIsInfoOpen,darkMode
,onLegend}) {
    const [menuOpen, setMenuOpen] = useState(false);
    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }
    return (
        <header>
            <nav>
                <div id="nav-title">
                    <button id="logo">Explore <span>U.</span></button>
                    
                </div>
                <SearchBar
                    search={search}
                    setSearch={setSearch}
                    setSelectedLocation={setSelectedLocation}
                    setIsInfoOpen={setIsInfoOpen}
                />

                <button id="menu-btn" aria-label="Open menu" aria-expanded={menuOpen}
                    onClick={toggleMenu}
                > <i className={menuOpen
                    ? "fa-solid fa-xmark"
                    : "fa-solid fa-bars"
                }></i></button>
            </nav>
            <MobileMenu menuOpen={menuOpen}
                onAbout={onAbout}
                onTheme={onTheme}
                darkMode={darkMode}
                onLegend={onLegend}
            />
        </header>
    );
}
export default Header;