import { locations } from "../data/locations";
import { foodOutlets } from "../data/FoodOutlets";

function SearchBar({search,setSearch,setSelectedLocation,setIsInfoOpen,isFood}) {
    const query = search.trim().toLowerCase();
    let matches = [];
    if(isFood) {
        matches = foodOutlets.filter(foodOutlet=>
            foodOutlet.menu.some(item=>
                item.name.toLowerCase().includes(query)
            ) ||
            foodOutlet.name.toLowerCase().includes(query)
        )
    }else {
        matches = locations.filter(location=>
        location.name.toLowerCase().includes(query) ||
        location.description.toLowerCase().includes(query) ||
        location.category.toLowerCase().includes(query)
    )
    }
    function handleResultClick(location) {
        setSelectedLocation(location);
        setIsInfoOpen(true);
        setSearch(location.name);
        document.querySelector('#search-results').classList.add('hidden');
    }
    return (
        <div className="search-container">
            <input type="search" id="search" placeholder="Search buildings, labs, offices..." 
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