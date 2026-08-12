import { useState } from "react";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";

function Header({
    search,setSearch,setSelectedLocation
}) {
    const [menuOpen, setMenuOpen] = useState(false);
    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }
    return(
        <header>
            <nav>
                <h1 id="logo">Campus Navigator</h1>
                <SearchBar
                search={search}
                setSearch={setSearch}
                setSelectedLocation={setSelectedLocation}
                />
                <button id="menu-btn" aria-label="Open menu" aria-expanded="false"
                onClick={toggleMenu}
                > <i
                    className="fa-solid fa-bars"></i>o</button>
            </nav>
            <MobileMenu menuOpen={menuOpen}/>
        </header>
    );
}
export default Header;