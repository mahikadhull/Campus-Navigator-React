import { useState } from "react";
import { locations } from "../data/locations";
import "./CampusLegend.css";

function CampusLegend({
    isOpen,
    onClose,
    setSearch,
    setSelectedLocation
}) {
    const [selectedLegend, setSelectedLegend] = useState(null);

    const [showQuiz, setShowQuiz] = useState(false);
    const [quizIndex, setQuizIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);

    const [showSurprise, setShowSurprise] = useState(false);
    const [randomLocation, setRandomLocation] = useState(null);

    if (!isOpen) {
        return null;
    }

    /* =========================
       LEGEND DATA
    ========================= */

    const legendItems = [
        {
            icon: "🎓",
            title: "Academic",
            description: "Classrooms, lecture halls and labs",
            category: "academic",
            info:
                "Academic areas include classrooms, lecture halls, laboratories and other learning spaces where students attend classes and practical sessions."
        },

        {
            icon: "🏢",
            title: "Administration",
            description: "Offices and administrative buildings",
            category: "administration",
            info:
                "Administration buildings contain important university offices and services that help students with academic, administrative and campus-related requirements."
        },

        {
            icon: "🍴",
            title: "Food",
            description: "Cafeterias and food areas",
            category: "food",
            info:
                "Food areas include cafeterias, canteens and other places where students can have meals, snacks and refreshments."
        },

        {
            icon: "🏠",
            title: "Hostels",
            description: "Student accommodation",
            category: "hostel",
            info:
                "Hostels provide accommodation for students along with facilities such as rooms, common areas and other residential services."
        },

        {
            icon: "🅿️",
            title: "Parking",
            description: "Parking and vehicle areas",
            category: "parking",
            info:
                "Parking areas are designated spaces for students, faculty, staff and visitors to park their vehicles safely."
        },

        {
            icon: "🚑",
            title: "Emergency",
            description: "Medical and emergency facilities",
            category: "emergency",
            info:
                "Emergency facilities help students and staff quickly access medical assistance and other important emergency services on campus."
        },

        {
            icon: "🌳",
            title: "Outdoor",
            description: "Grounds and open spaces",
            category: "ground",
            info:
                "Outdoor areas include gardens, lawns, grounds and open spaces where students can relax, walk or spend time between classes."
        },

        {
            icon: "📍",
            title: "Landmark",
            description: "Important campus landmarks",
            category: "landmark",
            info:
                "Landmarks are important and easily recognizable places on campus that can help students and visitors understand their location and navigate around the campus."
        }
    ];


    /* =========================
       QUIZ DATA
    ========================= */

    const quizQuestions = [
        {
            question:
                "Which category contains classrooms and laboratories?",

            options: [
                "Academic",
                "Food",
                "Parking",
                "Hostel"
            ],

            answer: "Academic"
        },

        {
            question:
                "Where would you find student accommodation?",

            options: [
                "Administration",
                "Hostel",
                "Food",
                "Outdoor"
            ],

            answer: "Hostel"
        },

        {
            question:
                "Which category is used for vehicle areas?",

            options: [
                "Landmark",
                "Academic",
                "Parking",
                "Emergency"
            ],

            answer: "Parking"
        },

        {
            question:
                "Which category includes cafeterias and canteens?",

            options: [
                "Food",
                "Academic",
                "Emergency",
                "Landmark"
            ],

            answer: "Food"
        },

        {
            question:
                "Which category contains medical facilities?",

            options: [
                "Outdoor",
                "Emergency",
                "Hostel",
                "Parking"
            ],

            answer: "Emergency"
        }
    ];


    /* =========================
       LEGEND CARD CLICK
    ========================= */

    function handleLegendClick(item) {
        setSelectedLegend(item);
    }


    /* =========================
       QUIZ
    ========================= */

    function openQuiz() {
        setShowQuiz(true);
        setShowSurprise(false);

        setQuizIndex(0);
        setSelectedAnswer(null);
        setScore(0);
    }


    function handleQuizAnswer(answer) {
        if (selectedAnswer !== null) {
            return;
        }

        setSelectedAnswer(answer);

        if (
            answer ===
            quizQuestions[quizIndex].answer
        ) {
            setScore((previousScore) => previousScore + 1);
        }
    }


    function nextQuestion() {
        if (
            quizIndex <
            quizQuestions.length - 1
        ) {
            setQuizIndex(
                (previousIndex) =>
                    previousIndex + 1
            );

            setSelectedAnswer(null);
        } else {
            setQuizIndex(0);
            setSelectedAnswer(null);
            setScore(0);
        }
    }


    /* =========================
       SURPRISE BOX
    ========================= */

    function openSurprise() {
        setShowSurprise(true);
        setShowQuiz(false);

        if (
            !locations ||
            locations.length === 0
        ) {
            return;
        }

        let newLocation;

        do {
            const randomIndex =
                Math.floor(
                    Math.random() *
                        locations.length
                );

            newLocation =
                locations[randomIndex];

        } while (
            locations.length > 1 &&
            randomLocation &&
            newLocation.id ===
                randomLocation.id
        );

        setRandomLocation(newLocation);
    }


    function searchRandomLocation() {
        if (!randomLocation) {
            return;
        }

        if (setSearch) {
            setSearch(randomLocation.name);
        }

        if (setSelectedLocation) {
            setSelectedLocation(randomLocation);
        }

        onClose();
    }


    /* =========================
       RESET
    ========================= */

    function closeLegend() {
        setSelectedLegend(null);
        setShowQuiz(false);
        setShowSurprise(false);

        onClose();
    }


    return (
        <div
            className="campus-legend-overlay"
            onClick={closeLegend}
        >

            <div
                className="campus-legend-modal"
                onClick={(event) =>
                    event.stopPropagation()
                }
            >

                {/* =========================
                    CLOSE BUTTON
                ========================= */}

                <button
                    type="button"
                    className="legend-close-btn"
                    onClick={closeLegend}
                    aria-label="Close Campus Legend"
                >
                    ×
                </button>


                {/* =========================
                    HEADER
                ========================= */}

                <div className="legend-header">

                    <div className="legend-header-icon">
                        🧭
                    </div>

                    <div>
                        <h2>
                            Campus Legend
                        </h2>

                        <p>
                            Explore different places
                            on your campus
                        </p>
                    </div>

                </div>


                {/* =========================
                    CATEGORY INFORMATION
                ========================= */}

                {selectedLegend ? (

                    <div className="legend-detail">

                        <div className="legend-detail-icon">
                            {selectedLegend.icon}
                        </div>

                        <h3>
                            {selectedLegend.title}
                        </h3>

                        <p className="legend-detail-description">
                            {selectedLegend.description}
                        </p>

                        <p className="legend-detail-info">
                            {selectedLegend.info}
                        </p>

                        <button
                            type="button"
                            className="legend-back-btn"
                            onClick={() =>
                                setSelectedLegend(null)
                            }
                        >
                            ← Back to Campus Legend
                        </button>

                    </div>

                ) : (

                    <>
                        {/* =========================
                            LEGEND CARDS
                        ========================= */}

                        <div className="legend-grid">

                            {legendItems.map(
                                (item) => (

                                    <button
                                        key={
                                            item.category
                                        }
                                        type="button"
                                        className="legend-card"
                                        onClick={() =>
                                            handleLegendClick(
                                                item
                                            )
                                        }
                                    >

                                        <div className="legend-card-icon">
                                            {item.icon}
                                        </div>

                                        <div className="legend-card-content">

                                            <span className="legend-card-title">
                                                {item.title}
                                            </span>

                                            <span className="legend-card-description">
                                                {
                                                    item.description
                                                }
                                            </span>

                                        </div>

                                        <span className="legend-card-arrow">
                                            →
                                        </span>

                                    </button>

                                )
                            )}

                        </div>


                        {/* =========================
                            DIVIDER
                        ========================= */}

                        <div className="legend-divider"></div>


                        {/* =========================
                            INTERACTIVE FEATURES
                        ========================= */}

                        <div className="legend-features">


                            {/* =====================
                                CAMPUS QUIZ
                            ===================== */}

                            <div className="feature-box quiz-box">

                                <div className="feature-icon">
                                    🧠
                                </div>

                                <div className="feature-content">

                                    <h3>
                                        Campus Quiz
                                    </h3>

                                    <p>
                                        Test your campus
                                        knowledge
                                    </p>

                                </div>


                                {!showQuiz ? (

                                    <button
                                        type="button"
                                        className="feature-btn"
                                        onClick={openQuiz}
                                    >
                                        Start Quiz →
                                    </button>

                                ) : (

                                    <div className="quiz-container">

                                        <div className="quiz-progress">
                                            Question{" "}
                                            {quizIndex + 1}
                                            {" / "}
                                            {
                                                quizQuestions.length
                                            }
                                        </div>

                                        <h4 className="quiz-question">
                                            {
                                                quizQuestions[
                                                    quizIndex
                                                ].question
                                            }
                                        </h4>


                                        <div className="quiz-options">

                                            {quizQuestions[
                                                quizIndex
                                            ].options.map(
                                                (
                                                    option
                                                ) => {

                                                    let
                                                        optionClass =
                                                        "quiz-option";

                                                    if (
                                                        selectedAnswer !==
                                                        null &&
                                                        option ===
                                                            quizQuestions[
                                                                quizIndex
                                                            ].answer
                                                    ) {
                                                        optionClass +=
                                                            " correct";
                                                    }

                                                    if (
                                                        selectedAnswer ===
                                                            option &&
                                                        option !==
                                                            quizQuestions[
                                                                quizIndex
                                                            ].answer
                                                    ) {
                                                        optionClass +=
                                                            " wrong";
                                                    }

                                                    return (

                                                        <button
                                                            key={
                                                                option
                                                            }
                                                            type="button"
                                                            className={
                                                                optionClass
                                                            }
                                                            onClick={() =>
                                                                handleQuizAnswer(
                                                                    option
                                                                )
                                                            }
                                                            disabled={
                                                                selectedAnswer !==
                                                                null
                                                            }
                                                        >
                                                            {
                                                                option
                                                            }
                                                        </button>

                                                    );
                                                }
                                            )}

                                        </div>


                                        {selectedAnswer !==
                                            null && (

                                            <>

                                                <div
                                                    className={
                                                        selectedAnswer ===
                                                        quizQuestions[
                                                            quizIndex
                                                        ].answer
                                                            ? "quiz-feedback correct"
                                                            : "quiz-feedback wrong"
                                                    }
                                                >

                                                    {selectedAnswer ===
                                                    quizQuestions[
                                                        quizIndex
                                                    ].answer
                                                        ? "🎉 Correct!"
                                                        : `❌ Correct answer: ${quizQuestions[quizIndex].answer}`
                                                    }

                                                </div>


                                                <button
                                                    type="button"
                                                    className="feature-btn"
                                                    onClick={
                                                        nextQuestion
                                                    }
                                                >
                                                    {quizIndex <
                                                    quizQuestions.length -
                                                        1
                                                        ? "Next Question →"
                                                        : "Play Again 🔄"}
                                                </button>

                                            </>

                                        )}


                                        <div className="quiz-score">
                                            Score:{" "}
                                            {score} /{" "}
                                            {
                                                quizQuestions.length
                                            }
                                        </div>

                                    </div>

                                )}

                            </div>


                            {/* =====================
                                SURPRISE BOX
                            ===================== */}

                            <div className="feature-box surprise-box">

                                <div className="feature-icon">
                                    🎁
                                </div>

                                <div className="feature-content">

                                    <h3>
                                        Surprise Box
                                    </h3>

                                    <p>
                                        Discover a random
                                        campus location
                                    </p>

                                </div>


                                <button
                                    type="button"
                                    className="feature-btn surprise-btn"
                                    onClick={
                                        openSurprise
                                    }
                                >
                                    Surprise Me 🎲
                                </button>


                                {showSurprise &&
                                    randomLocation && (

                                        <div className="surprise-result">

                                            <span className="surprise-label">
                                                🎯 Your random
                                                location
                                            </span>

                                            <h4>
                                                {
                                                    randomLocation.name
                                                }
                                            </h4>

                                            <span className="surprise-category">
                                                Category:{" "}
                                                {
                                                    randomLocation.category
                                                }
                                            </span>


                                            <button
                                                type="button"
                                                className="search-location-btn"
                                                onClick={
                                                    searchRandomLocation
                                                }
                                            >
                                                🔎 Search this
                                                location
                                            </button>

                                        </div>

                                    )}

                            </div>

                        </div>

                    </>
                )}

            </div>

        </div>
    );
}

export default CampusLegend;