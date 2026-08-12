import LandingPage from "./components/LandingPage";
import CampusNavigator from "./components/CampusNavigator";
import {useState} from "react";
import "./App.css";

function App() {
  const [showLanding,setShowLanding] = useState(true);
    return (
    <>
      {
        showLanding ? (
          <LandingPage
          onExplore={()=>setShowLanding(false)}/>
        ) : (
          <CampusNavigator/>
        )
      }
    </>
  );
}
export default App;