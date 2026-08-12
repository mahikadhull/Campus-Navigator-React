import { locations } from "../data/locations";

function SearchBar({search,setSearch,setSelectedLocation}) {
    const query = search.trim().toLowerCase();
    const matches = query === ""
    ? []
    : locations.filter(location=>
        location.name.toLowerCase().includes(query)
    );
    function handleResultClick(location) {
        setSelectedLocation(location);
        setSearch("");
    }
    return (
        <div className="search-container">
            <input type="search" id="search" placeholder="Search buildings..." 
            value={search}
            onChange={(event)=>setSearch(event.target.value)}
            
            />
            <div id="search-results">
            {
                matches.map(location=>(
                    <div
                    key = {location.id}
                    onClick={()=>handleResultClick(location)}
                    
                    >
                        {location.name}
                    </div>
                ))
            }
            </div>
        </div>
    );
}
export default SearchBar;