import { locations } from "../data/locations";

function Filters({selectedCategory,setSelectedCategory}) {
    const categories = [
        "all",
        ...new Set(locations.map(location=>location.category))
    ];
    return (
         <section id="filters">
            {categories.map(category=>(
                <button
                key={category}
                onClick={()=>setSelectedCategory(category)}
                className={
                    selectedCategory === category ? "active"
                    : ""
                }
                
                >{category.charAt(0).toUpperCase() + category.slice(1)}</button>
            ))}
        </section>
    );
}
export default Filters;