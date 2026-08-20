import { locations } from "../data/locations";

function Filters({selectedCategory,setSelectedCategory}) {
    const categories = [
        "all",
        ...new Set(locations.map(location=>location.category))
    ];
    return (
        <section id="filters-container">
            <h5>Explore</h5>
         <section id="filters">
            {categories.map(category=>(
                <button
                key={category}
                onClick={()=>setSelectedCategory(category)}
                className={
                    selectedCategory === category ? "active"
                    : ""
                }
                style={{
                    "--category-color":`var(--${category})`,
                    "--category-stroke":`var(--${category}_stroke)`
                }}
                
                >{category.charAt(0).toUpperCase() + category.slice(1)}</button>
            ))}
        </section>
        </section>

    );
}
export default Filters;