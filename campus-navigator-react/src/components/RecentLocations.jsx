function RecentLocations({ recentLocations, setSelectedLocation, setIsInfoOpen }) {
    function handleClick(location) {
        setSelectedLocation(location);
        setIsInfoOpen(true);
    }
    function formatDate(timestamp) {
        const date = new Date(timestamp);

        return date.toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short"
        });
    }

    return (
        <div className="recent-locations">

            <h2>Recent Locations</h2>

            {recentLocations.length === 0 ? (
                <p>No recent locations</p>
            ) : (
                recentLocations.map(location => (
                    <button
                        key={location.id}
                        onClick={() => handleClick(location)}
                    >
                        <div>
                            {location.name}
                        </div>

                        <small>
                            {formatDate(location.visitedAt)}
                        </small>
                    </button>
                ))
            )}

        </div>
    );
}

export default RecentLocations;
