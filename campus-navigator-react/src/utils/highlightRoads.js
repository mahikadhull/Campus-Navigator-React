
import { roadMapping } from "./roadMapping";

function getEdgeKey(nodeA, nodeB) {
    // Treat both directions as the same connection.
    return [nodeA, nodeB].sort().join("|");
}


export function highlightRoute(path) {
  document.querySelectorAll(".road.route-highlight")
    .forEach(road => road.classList.remove("route-highlight"));

  if (!Array.isArray(path) || path.length === 0) return;

  path.forEach(id => {
    const road = document.getElementById(id);
    if (road?.classList.contains("road")) {
      road.classList.add("route-highlight");
    }
  });
}

