function MobileMenu({menuOpen,onHome,onHowToUse,onRecentLocations,
    onLegend,onTheme,onAbout,darkMode
}) {
    return (
        <div id="mobile-menu" 
        className={menuOpen ? "open" : ""}>
            <button onClick={onHome}>Home</button>
            <button onClick={onHowToUse}>How to Use</button>
            <button onClick={onRecentLocations}>Recent Locations</button>
            <button onClick={onLegend}>Campus Legend</button>
            <button onClick={onTheme}>{darkMode ? "Light Theme" : "Dark Theme"}</button>
            <button onClick={onAbout} id="about-btn">About</button>
        </div>
    );
}

export default MobileMenu;