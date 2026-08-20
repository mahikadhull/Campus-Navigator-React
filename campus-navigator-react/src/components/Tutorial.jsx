// function Tutorial({step,onNext,onSkip}){
//     const steps = [
//         {
//             target:"search",
//             title:"Search locations",
//             text:"Use the search bar to quickly find a location on the campus!"
//         },
//         {
//             target:"filters",
//             title:"Filter locations",
//             text:"Choose a category to highlight buildings of that type!"
//         },
//         {
//             target:"map",
//             title:"Explore the map",
//             text:"Tap any building to view more information about it!"
//         },
//         {
//             target:"info-panel",
//             title:"View information",
//             text:"The information panel shows details about the selected location!"
//         }

//     ]
//     const  currentSteps = steps[step];
//     return (
//         <div className="tutorial-overlay">
//             <div className={`tutorial-highlight ${currentSteps.target}`}></div>
//         </div>
//     )
// }