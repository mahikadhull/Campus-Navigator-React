import { useState } from "react";
import './landingpage.css';
function LandingPage({ onExplore }) {
    const [videoStarted, setVideoStarted] = useState(false);
    const [videoEnded, setVideoEnded] = useState(false);


    const [leaving, setLeaving] = useState(false);
    function handleExplore() {
        setLeaving(true);
        setTimeout(() => {
            onExplore();
        }, 700)
    }
    return (
        <div className={`landing-page ${leaving ? "leaving" : ""}`}>
            <video
                className={`landing-video ${videoStarted ? "visible" : ""}`}
                autoPlay
                muted
                playsInline
                onPlay={() => setVideoStarted(true)}
                onEnded={() => setVideoEnded(true)}
            ><source src="/campus-intro.mp4" type="video/mp4" /></video>
          
            <div className={`welcome-text ${videoStarted ? "show" : ""
                } ${videoEnded ? "hide" : ""}`}>
                <h1>
                    Welcome to <br />
                    Chitkara University
                </h1>
            </div>
            <div className={`landing-final ${videoEnded ? "show" : ""
                }`}>
                <p id="landing-tagline">
                    Explore. Experience. Navigate.
                </p>
                <h2>
                    Discover Chitkara
                </h2>
                <p id="landing-subtitle">
                    Your campus. Your journey. Your experience.
                </p>
                <br />
                <button id="landing-explore-btn" onClick={handleExplore}>Explore Campus 
            
                </button>
            </div>
        </div>
    );
}
export default LandingPage;