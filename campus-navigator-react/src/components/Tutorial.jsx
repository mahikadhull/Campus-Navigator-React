import { useEffect, useState } from "react";
import "./Tutorial.css";

function Tutorial({ active, onClose }) {
    const [step, setStep] = useState(0);
    const [highlight, setHighlight] = useState(null);

    const steps = [
        {
            selector: "#search",
            title: "Search for a location",
            text: "Use the search bar to find buildings, food outlets, hostels, parking areas, and other campus locations."
        },
        {
            selector: "#filters-toggle-btn",
            title: "Filter locations",
            text: "Use the category filters to quickly find Academic, Food, Hostel, Administration, Parking, and Park locations."
        },
        {
            selector: "#edison-block",
            title: "Explore the map",
            text: "Tap a building or location on the map to explore it and view more information."
        },
        {
            selector: "#info-content",
            title: "View location information",
            text: "The information panel shows details such as facilities, accessibility, timings, and availability."
        },
        {
            selector: "#navigate-btn",
            title: "Navigate to a location",
            text: "Choose Navigate to find the shortest route to your selected destination."
        },
        {
            selector: "#map",
            title: "Zoom and pan",
            text: "Zoom in or out and drag the map to explore different areas of the campus."
        },
        {
            selector: "#recent-locations",
            title: "Recent locations",
            text: "Access locations you have recently viewed so you can quickly find them again."
        }
    ];

    useEffect(() => {
        if (!active) return;

        setStep(0);
    }, [active]);

    useEffect(() => {
        if (!active) return;

        const currentStep = steps[step];

        if (!currentStep) return;

        const element = document.querySelector(
            currentStep.selector
        );

        if (element) {
            const rect = element.getBoundingClientRect();

            setHighlight({
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height
            });
        } else {
            setHighlight(null);
        }

    }, [active, step]);

    if (!active) return null;

    const currentStep = steps[step];

    const handleNext = () => {
        if (step < steps.length - 1) {
            setStep(step + 1);
        }
    };

    const handleFinish = () => {
        onClose();
    };

    const handleBack = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    return (
        <div id="tutorial-overlay">

            {highlight && (
                <div
                    className="tutorial-highlight"
                    style={{
                        top: highlight.top,
                        left: highlight.left,
                        width: highlight.width,
                        height: highlight.height
                    }}
                />
            )}

            <div className="tutorial-tooltip">

                <div className="tutorial-step-count">
                    Step {step + 1}
                </div>

                <h3>
                    {currentStep.title}
                </h3>

                <p>
                    {currentStep.text}
                </p>

                <div className="tutorial-controls">

                    {step > 0 && (
                        <button
                            className="tutorial-back-btn"
                            onClick={handleBack}
                        >
                            Back
                        </button>
                    )}

                    {step < steps.length - 1 ? (
                        <button
                            className="tutorial-next-btn"
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            className="tutorial-finish-btn"
                            onClick={handleFinish}
                        >
                            Finish
                        </button>
                    )}

                </div>

            </div>

        </div>
    );
}

export default Tutorial;