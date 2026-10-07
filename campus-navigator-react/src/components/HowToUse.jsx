import React from "react";

export default function HowToUse({setTutorialActive,setModalOpen}) {
    return (
        <div className="how-to-use">

            <div className="how-to-section">
                <h3>🔍 Search</h3>
                <p>
                    Use the search bar to quickly find buildings,
                    food outlets, hostels, parking areas, and
                    other campus locations.
                </p>
            </div>

            <div className="how-to-section">
                <h3>🗺️ Explore the Map</h3>
                <p>
                    Tap any marked location on the campus map to
                    view its details, facilities, accessibility,
                    and availability.
                </p>
            </div>

            <div className="how-to-section">
                <h3>🏷️ Filter Locations</h3>
                <p>
                    Use the category filters to find specific
                    types of locations such as Academic, Food,
                    Hostel, Administration, Parking, and Parks.
                </p>
            </div>

            <div className="how-to-section">
                <h3>📍 Navigate</h3>
                <p>
                    Select a location and choose{" "}
                    <strong>Navigate</strong> to find the shortest
                    route to your destination.
                </p>
            </div>

            <div className="how-to-section">
                <h3>🔎 Zoom & Pan</h3>
                <p>
                    Zoom in or out to explore the campus map in
                    detail and drag the map to move around
                    different areas.
                </p>
            </div>

            <div className="how-to-section">
                <h3>📌 Recent Locations</h3>
                <p>
                    Your recently viewed locations are saved for
                    quick access, so you can easily return to
                    places you've explored before.
                </p>
            </div>

            <div className="how-to-section">
                <h3>🌙 Theme</h3>
                <p>
                    Switch between Light Theme and Dark Theme
                    from the menu for a more comfortable viewing
                    experience.
                </p>
            </div>

            <div className="how-to-tip">
                <strong>💡 Tip</strong>
                <p>
                    You can search for a location or select one
                    directly from the map to get started.
                </p>
            </div>
            <div>
              <p><strong>Still confused? Start an interactive tutorial..</strong></p>
              <button onClick={()=>{
                setTutorialActive(true);
                setModalOpen(false);
              }}>Start tutorial</button>
            </div>

        </div>
    );
}