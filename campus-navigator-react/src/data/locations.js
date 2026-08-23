export const locations = [
    // Academic buildings..
    {
        id: "library",
        name: "Central Library",
        category: "academic",
        type: "building",
        description: "The main library of the campus.",
        schedule: {
            weekdays: {
                open: "00:00",
                close: "24:00"
            },
            weekends: {
                open: "06:00",
                close: "21:30"
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Reading Area",
            "Computer Lab",
            "Wi-Fi",
            "Sitting Area",
            "Property Area"
        ]

    },
    {
        id: "explore-hub",
        name: "Explore Hub",
        category: "academic",
        type: "building",
        description: "",
        schedule: {
            weekdays: {
                open: "09:00",
                close: "19:00"
            },
            weekends: {
                open: "09:00",
                close: "12:00"
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Reading Area",
            "Computer Lab",
            "Wi-Fi",
            "Sitting Area",
            "Property Area"
        ]

    },
    {
        id: "moon-hall",
        name: "Moon Hall",
        category: "academic",
        type: "building",
        description: "",
        schedule: {
            weekdays: {
                open: "08:00",
                close: "17:00"
            },
            weekends: {
                closed:true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Reading Area",
            "Computer Lab",
            "Wi-Fi",
            "Sitting Area",
            "Property Area"
        ]

    },
    {
        id: "martin-luther",
        name: "Martin Luther Block",
        category: "academic",
        type: "building",
        description: "Academic block containing classrooms and faculty offices for CSE and AI & ML department.",
        schedule: {
            weekdays: {
                open: "07:00",
                close: "21:30"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Classrooms",
            "Lecture Halls",
            "Wi-Fi",
            "Sitting Area",
            "Washrooms"
        ]

    },
    {
        id: "rockefeller-block",
        name: "Rockefeller Block",
        category: "academic",
        type: "building",
        description: "It is a major academic building and an award-winning green infrastructure project that hosts coding cups, student activities and sustainability programs",
        schedule: {
            weekdays: {
                open: "07:00",
                close: "21:30"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Reading Area",
            "Lecture Halls",
            "Wi-Fi",
            "Sitting Area",
            "Washrooms"
        ]

    },
    {
        id: "turing-block",
        name: "Turing Block",
        category: "academic",
        type: "building",
        description: "Academic block containing classrooms, lecture halls, and faculty offices for CSE (core) department.",
        schedule: {
            weekdays: {
                open: "07:00",
                close: "21:30"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Classrooms",
            "Lecture Halls",
            "Wi-Fi",
            "Sitting Area",
            "Washrooms"
        ]

    },
    {
        id: "edison-block",
        name: "Edison Block",
        category: "academic",
        type: "building",
        description: "Academic block containing classrooms, lecture halls, and faculty offices for ECE department.",
        schedule: {
            weekdays: {
                open: "07:00",
                close: "17:30"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Classrooms",
            "Labs",
            "Lecture Halls",
            "Wi-Fi",
            "Sitting Area",
            "Washrooms"
        ]

    },
    {
        id: "newton-block",
        name: "Newton Block",
        category: "academic",
        type: "building",

        description: "Academic block with classrooms, lecture halls, and laboratories.",

        schedule: {
            weekdays: {
                open: "08:00",
                close: "21:30"
            },
            weekends: {
                closed: true
            }
        },

        access: ["Students", "Faculty", "Staff"],

        facilities: [
            "Classrooms",
            "Lecture Halls",
            "Laboratories",
            "Wi-Fi",
            "Washrooms"
        ]
    },
    {
        id: "escoffer-block",
        name: "Chitkara School of Hospitality Management.",
        category: "academic",
        type: "building",
        description: "Academic block containing classrooms, lecture halls, and faculty offices for Hospitality Management Departments.",
        schedule: {
            weekdays: {
                open: "08:00",
                close: "17:30"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Kitchen Areas",
            "Classrooms",
            "Wi-Fi",
            "Sitting Area",
            "Washrooms"
        ]

    },
    {
        id: "fleming-block",
        name: "Chitkara College of Pharmacy",
        category: "academic",
        type: "building",
        description: "Academic block containing classrooms, lecture halls, and faculty offices for Bachelor Of Pharmacy.",
        schedule: {
            weekdays: {
                open: "07:00",
                close: "21:30"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Classrooms",
            "Pharmacology labs",
            "Lecture Halls",
            "Wi-Fi",
            "Sitting Area",
            "Washrooms"
        ]

    },
    {
        id: "law",
        name: "Chitkara Law School",
        category: "academic",
        type: "building",
        description: "Academic block containing classrooms, lecture halls, and faculty offices for Department Of Law.",
        schedule: {
            weekdays: {
                open: "07:00",
                close: "17:00"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Classrooms",
            "Lecture Halls",
            "Wi-Fi",
            "Sitting Area",
            "Washrooms"
        ]

    },
    {
        id: "tesla-block",
        name: "Tesla Block",
        category: "academic",
        type: "building",
        description: "Academic block containing classrooms, lecture halls, and faculty offices for the Department of Mechanical Engineering.",
        schedule: {
            weekdays: {
                open: "07:00",
                close: "17:00"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Classrooms",
            "Lecture Halls",
            "Thermal & Fluids Labs",
            "Wi-Fi",
            "Sitting Area",
            "Washrooms"
        ]

    },
    {
        id: "maritime-school",
        name: "Maritime School",
        category: "academic",
        type: "building",
        description: "Maritime Studies School.",
        schedule: {
            weekdays: {
                open: "07:00",
                close: "17:30"
            },
            weekends: {
                open: "07:00",
                close: "17:30"
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Reading Area",
            "Computer Lab",
            "Wi-Fi",
            "Sitting Area",
            "Property Area"
        ]

    },
    {
        id: "mechanical-workshop",
        name: "Mechanical Workshop",
        category: "academic",
        type: "building",
        description: "Workshop for practical training in manufacturing, machining, welding, fitting and fabricatinon.",
        schedule: {
            weekdays: {
                open: "08:00",
                close: "17:00"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Machine Shop",
            "Welding Area",
            "Fitting Shop",
            "Workshop Equipment",
            "Safety Equipment"
        ]

    },
    {
        id: "omicron-learning-hub",
        name: "Omicron Learning Hub",
        category: "academic",
        type: "building",
        description: "Workshop for practical training in manufacturing, machining, welding, fitting and fabricatinon.",
        schedule: {
            weekdays: {
                open: "08:00",
                close: "21:30"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Machine Shop",
            "Welding Area",
            "Fitting Shop",
            "Workshop Equipment",
            "Safety Equipment"
        ]

    },
    {
        id: "picasso-block",
        name: "Picasso Block",
        category: "academic",
        type: "building",
        description: "This block serves as the primary hub for Chitkara Design School and Chitkara School of Mass Communication.",
        schedule: {
            weekdays: {
                open: "08:00",
                close: "17:30"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Design Classes",
            "Mass communication media labs",
            "Creative Workshops",
            "Fashion Studio",
            "Recording and broadcasting facilities",
            "Washrooms",
            "Sitting Areas",
            "Wi-Fi"
        ]

    },
    {
        id: "art-gallery",
        name: "D'Art Gallery",
        category: "academic",
        type: "building",
        description: "Fine arts displays and printmaking exhibitions",
        schedule: {
            weekdays: {
                open: "09:00",
                close: "17:00"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Art Exihibitions",
            "Creative Workshops",
            "Student Displays",
            "Wi-Fi",
            "Sitting Area",

        ]

    },
    {
        id: "lecorbussier-block",
        name: "Chitkara School of Planning and Architecture",
        category: "academic",
        type: "building",
        description: "Academic block hosting academic classes, design workshops and expert talks for the Chitkara School of Planning and Architecture.",
        schedule: {
            weekdays: {
                open: "08:00",
                close: "17:30"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Creative Studios",
            "Lecture Halls",
            "Wi-Fi",
            "Sitting Area",
            "Washrooms"
        ]

    },
    {
        id: "pythagoras-block",
        name: "Pythagoras Block",
        category: "academic",
        type: "building",
        description: "The Pythagoras Block at Chitkara University is an academic building where engineering and computer science classes, technical workshops, coding club recruitment events, and major programming exams take place.",
        schedule: {
            weekdays: {
                open: "09:00",
                close: "17:30"
            },
            weekends: {
                closed: true
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Classrooms",
            "Lecture Halls",
            "Wi-Fi",
            "Sitting Area",
            "Washrooms"
        ]

    },
    {
        id: "bloom-block",
        name: "Bloom Block",
        category: "academic",
        type: "building",

        description: "Academic block with classrooms, language learning facilities, and laboratories.",

        schedule: {
            weekdays: {
                open: "08:00",
                close: "21:30"
            },
            weekends: {
                closed: true
            }
        },

        access: ["Students", "Faculty", "Staff"],

        facilities: [
            "Classrooms",
            "Language Labs",
            "Wi-Fi",
            "Washrooms"
        ]
    },
    {
        id: "demorgan-block",
        name: "DeMorgan Block",
        category: "academic",
        type: "building",

        description: "Academic block supporting teaching, learning, and research activities.",

        schedule: {
            weekdays: {
                open: "08:00",
                close: "21:30"
            },
            weekends: {
                closed: true
            }
        },

        access: ["Students", "Faculty", "Staff"],

        facilities: [
            "Classrooms",
            "Laboratories",
            "Faculty Offices",
            "Wi-Fi"
        ]
    },
    {
        id: "martin-extension",
        name: "Martin Extension",
        category: "academic",
        type: "building",

        description: "Academic block supporting teaching, learning, and research activities.",

        schedule: {
            weekdays: {
                open: "08:00",
                close: "21:30"
            },
            weekends: {
                closed: true
            }
        },

        access: ["Students", "Faculty", "Staff"],

        facilities: [
            "Classrooms",
            "Laboratories",
            "Faculty Offices",
            "Wi-Fi"
        ]
    },
    {
        id: "rockefeller-extension",
        name: "Rockefeller Extension",
        category: "academic",
        type: "building",

        description: "Academic block supporting teaching, learning, and research activities.",

        schedule: {
            weekdays: {
                open: "08:00",
                close: "21:30"
            },
            weekends: {
                closed: true
            }
        },

        access: ["Students", "Faculty", "Staff"],

        facilities: [
            "Classrooms",
            "Laboratories",
            "Faculty Offices",
            "Wi-Fi"
        ]
    },
    {
        id: "galelio-block",
        name: "Galileo Block",
        category: "academic",
        type: "building",

        description: "Academic block housing classrooms, laboratories, and faculty offices.",

        schedule: {
            weekdays: {
                open: "08:00",
                close: "21:30"
            },
            weekends: {
                closed: true
            }
        },

        access: ["Students", "Faculty", "Staff"],

        facilities: [
            "Classrooms",
            "Laboratories",
            "Faculty Offices",
            "Wi-Fi",
            "Washrooms"
        ]
    },
    {
        id: "exploratorium",
        name: "Exploratorium",
        category: "academic",
        type: "building",

        description: "Academic block housing classrooms, laboratories, and faculty offices.",

        schedule: {
            weekdays: {
                open: "08:00",
                close: "21:30"
            },
            weekends: {
                closed: true
            }
        },

        access: ["Students", "Faculty", "Staff"],

        facilities: [
            "Classrooms",
            "Laboratories",
            "Faculty Offices",
            "Wi-Fi",
            "Washrooms"
        ]
    },
    // Administrative
    {
        id: "babbage-block",
        name: "Babbage Block",
        category: "administration",
        type: "building",

        description: "Administrative block providing student support services, including fee payment and financial assistance.",

        schedule: {
            weekdays: {
                open: "09:00",
                close: "17:00"
            },
            weekends: {
                closed: true
            }
        },

        access: [
            "Students",
            "Faculty",
            "Staff",
            "Visitors"
        ],

        facilities: [
            "Accounts Office",
            "Finance Office",
            "Student Services",
            "Reception",
            "Waiting Area"
        ]
    },
    {
        id: "health-care",
        name: "Health Care",
        category: "health",
        type: "building",
        description: "The  of the campus.",
        schedule: {
            weekdays: {
                open: "00:00",
                close: "24:00"
            },
            weekends: {
                open: "06:00",
                close: "21:30"
            }
        },
        access: [
            "Students",
            "Faculty",
            "Staff"
        ],
        facilities: [
            "Emergency",
            "OPD",
            "Sitting Area",
        ]

    },
    {
        id: "admission-block",
        name: "Admission Block",
        category: "administration",
        type: "building",

        description: "Administrative building assisting prospective students with admissions, counselling, and enrollment procedures.",

        schedule: {
            weekdays: {
                open: "09:00",
                close: "17:00"
            },
            weekends: {
                closed: true
            }
        },

        access: [
            "Prospective Students",
            "Students",
            "Parents",
            "Visitors",
            "Staff"
        ],

        facilities: [
            "Admission Counters",
            "Counselling Offices",
            "Reception",
            "Waiting Area"
        ]
    },
    // Hostels -- Girls
    createHostel("pi-hostel", "Pi Hostel", "Girls"),
    createHostel("IBN-hostel", "IBN Hostel", "Girls"),
    createHostel("NGH-hostel", "NGH Hostel", "Girls"),
    createHostel("vasco-hostel", "Vasco da Gama Hostel", "Girls"),
    createHostel("columbus-hostel", "Columbus Hostel", "Girls"),
    // Hostel -- Boys
    createHostel("armstrong-hostel", "Armstrong Hostel", "Boys"),
    createHostel("archemedes-hostel", "Archemedes Hostel", "Boys"),
    createHostel("aristotle-hostel", "Aristotle Hostel", "Boys"),
    createHostel("alfred-nobel-hostel", "Alfred Nobel Hostel", "Boys"),
    createHostel("franklin-hostel", "Franklin Hostel", "Boys"),
    createHostel("magallen-hostel", "Magallen Hostel", "Boys"),
    createHostel("marco-polo-hostel", "Marco Polo Hostel", "Boys and Girls"),

    // Food areas
    createFoodOutlet("square-2", "Square-2"),
    createFoodOutlet("square-1", "Square-1"),
    createFoodOutlet("grab-go", "Grab & Go"),
    createFoodOutlet("belgian-waffel", "The Belgian Waffel"),
    createFoodOutlet("bev-cafe", "Bev Cafe"),
    createFoodOutlet("holy-scoop", "The Holy Scoop"),
    createFoodOutlet("first-coffee", "First Coffee"),
    createFoodOutlet("subway", "Subway"),
    createFoodOutlet("doful", "Doful"),
    createFoodOutlet("amul", "Amul"),
    createFoodOutlet("blue-tokai", "Blue Tokai"),
    createFoodOutlet("chai-vyanjan", "Chai Vyanjan"),
    createFoodOutlet("haveli", "The Haveli"),
    createFoodOutlet("dhaba", "The Indian Dhaba"),

    // Parkings

    createParking("parking-chaivyanjan","Car Parking"),
    createParking("parking-maingate","Car Parking"),
    createParking("parking-turing","Two-Wheeler Parking"),
    createParking("parking-omega","Parking"),
    createParking("parking-bus","Bus Parking"),
    createParking("parking-chaivyanjan-left","Car Parking"),
    createParking("parking-chaivyanjan-car","Car Parking"),

    // Parks
    createGround("beta-zone","Beta Zone"),
    createGround("chsf-park","CHSF Park"),
    createGround("chitkara-woods","Chitkara Woods"),
    createGround("chitkara-university-a","Chitkara University"),
    createGround("chitkara-university-b","Chitkara University"),
    createGround("park-of-scluptures","Park of Scluptures")
];

function createHostel(id, name, gender) {
    return {
        id,
        name,
        category: "hostel",
        type: "building",

        description: `${gender} student hostel providing residential accommodation.`,

        schedule: {
            weekdays: {
                open: "00:00",
                close: "24:00"
            },
            weekends: {
                open: "00:00",
                close: "24:00"
            }
        },

        access: ["Residents", "Staff"],

        facilities: [
            "Rooms",
            "Common Area",
            "Wi-Fi",
            "Laundry",
            "Washrooms"
        ]
    };
}

function createParking(id, name) {
    return {
        id,
        name,
        category: "parking",
        type: "parking",

        description: "Parking area for students, faculty, and visitors.",
        schedule: {
            weekdays: {
                open: "00:00",
                close: "24:00"
            },
            weekends: {
                open: "00:00",
                close: "24:00"
            }
        },

        access: ["Students", "Faculty", "Staff", "Visitors"],

        facilities: [
            "Two-Wheeler Parking",
            "Four-Wheeler Parking"
        ]
    };
}

function createFoodOutlet(id, name) {
    return {
        id,
        name,
        category: "food",
        type: "restaurant",
        schedule: {
            weekdays: {
                open: "00:00",
                close: "24:00"
            },
            weekends: {
                open: "00:00",
                close: "24:00"
            }
        },

        description: "Food outlet serving meals and refreshments.",

        access: ["Students", "Faculty", "Staff", "Visitors"]
    };
}

function createGround(id,name) {
    return {
        id,
        name,
        category: "ground",
        type: "ground",
        schedule: {
            weekdays: {
                open: "00:00",
                close: "24:00"
            },
            weekends: {
                open: "00:00",
                close: "24:00"
            }
        },

        description: "Food outlet serving meals and refreshments.",

        access: ["Students", "Faculty", "Staff", "Visitors"]
    }
}




















