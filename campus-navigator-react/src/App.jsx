import LandingPage from "./components/LandingPage";
import CampusNavigator from "./components/CampusNavigator";

import {useState} from "react";
import "./App.css";

function App() {
  const [showLanding,setShowLanding] = useState(true);
  const [page, setPage] = useState("landing");
  function goHome() {
    setPage("landing");
  }
    return (
    <>
      {
        showLanding ? (
          <LandingPage
          onExplore={()=>setShowLanding(false)}
          />
        ) : (
          <CampusNavigator
          
          />
        )
      }
    </>
  );
}
export default App;