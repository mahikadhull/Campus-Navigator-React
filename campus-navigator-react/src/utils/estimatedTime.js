export function estimatedTime(graph,path) {
    const TIME_PER_WEIGHT = 0.2; //minutes..
    let totalWeight = 0;

    for (let i = 0; i < path.length - 1; i++) {
        const current = path[i];
        const next = path[i + 1];

        const weight = graph[current][next];

        console.log(`${current} → ${next} = ${weight}`);

        totalWeight += weight;
    }
    totalWeight *= TIME_PER_WEIGHT;
    return Math.round(totalWeight);
}