function MobileMenu({menuOpen}) {
    return (
        <div id="mobile-menu" 
        className={menuOpen ? "open" : ""}>
            <button>Home</button>
            <button>How to Use</button>
            <button>Recent Locations</button>
            <button>Campus Legend</button>
            <button>Theme</button>
            <button id="about-btn">About</button>
        </div>
    );
}

export default MobileMenu;