// import { useState } from "react";

// import { locations } from "../data/locations";
// import { campusGraph } from "../data/campusGraph";
// import { dijkstra } from "../utils/dijkstra";


// function PathFinder({ setRoute }) {

//     const [from, setFrom] = useState("");
//     const [to, setTo] = useState("");


//     function findRoute() {

//         if (!from || !to) {
//             return;
//         }

//         if (from === to) {
//             return;
//         }


//         const result =
//             dijkstra(
//                 campusGraph,
//                 from,
//                 to
//             );


//         if (result) {

//             console.log(
//                 "Shortest path:",
//                 result.path
//             );

//             console.log(
//                 "Distance:",
//                 result.distance
//             );


//             setRoute(result.path);

//         } else {

//             console.log(
//                 "No route found"
//             );

//             setRoute([]);
//         }
//     }


//     return (
//         <div className="path-finder">

//             <h2>Find Route</h2>


//             <select
//                 value={from}
//                 onChange={(e) =>
//                     setFrom(e.target.value)
//                 }
//             >

//                 <option value="">
//                     From
//                 </option>


//                 {locations.map(location => (

//                     <option
//                         key={location.id}
//                         value={location.id}
//                     >
//                         {location.name}
//                     </option>

//                 ))}

//             </select>


//             <select
//                 value={to}
//                 onChange={(e) =>
//                     setTo(e.target.value)
//                 }
//             >

//                 <option value="">
//                     To
//                 </option>


//                 {locations.map(location => (

//                     <option
//                         key={location.id}
//                         value={location.id}
//                     >
//                         {location.name}
//                     </option>

//                 ))}

//             </select>


//             <button onClick={findRoute}>
//                 Find Shortest Path
//             </button>

//         </div>
//     );
// }


// export default PathFinder;