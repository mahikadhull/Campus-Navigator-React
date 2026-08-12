import { getCurrentStatus } from "../utils/status";

function InfoPanel({ selectedLocation }) {
    if (!selectedLocation) {
        return (
            <aside id="info-panel">
                <button id="info-toggle-btn">


                </button>
                <div id="info-content">
                    <h2>Select a Location</h2>
                    <p>Tap any building on the map to view its details.</p>
                </div>
            </aside>
        );
    }
    const status = getCurrentStatus(selectedLocation);
    return (
        <aside id="info-panel">

            <button id="info-toggle-btn">
                ◀
            </button>

            <div id="info-content">

                <h2>{selectedLocation.name}</h2>

                <p>{selectedLocation.description}</p>

                <p>
                    <strong>Category:</strong> {selectedLocation.category}
                </p>
                <p>
                    <strong>Status:</strong>
                    {" "}
                    {status}
                </p>

            </div>

        </aside>
    );
}

export default InfoPanel;