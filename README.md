# 🏫 Smart Campus Navigator

> An interactive React-based campus navigation website designed to help students, faculty, and visitors easily explore and navigate the campus.

---
## 👥 Project Team

| Role | Name |
|------|------|
| 👑 Team Leader | **Radhika Gupta** |
| 👩‍💻 Team Member | **Mahika Dhull** |
| 👩‍💻 Team Member | **Sneha Bansal** |


## 📌 About the Project

**Smart Campus Navigator** is a web-based campus navigation application developed using **React.js, JavaScript, HTML, and CSS**.

The main purpose of this project is to solve a common problem faced by new students and visitors: **finding buildings, classrooms, labs, offices, and other important locations around the campus.**

The application provides an interactive campus map along with search and filtering features so users can quickly find the location they need.

---

## 🎯 Problem Statement

New students and visitors often have difficulty navigating a large campus, especially during their first few weeks.

They may struggle to:

- Find academic buildings
- Locate classrooms and laboratories
- Find administrative offices
- Identify important facilities
- Know whether a particular facility is currently open
- Understand the layout of the campus

The **Smart Campus Navigator** provides a centralized and interactive solution to these problems.

---

## 💡 Key Features

### 🗺️ Interactive Campus Map

- Displays the campus layout through an interactive map.
- Buildings and important locations can be selected.
- Selected locations are visually highlighted.
- Users can explore different campus locations directly through the map.

### 🔍 Search

Users can search for locations such as:

- Buildings
- Labs
- Classrooms
- Offices
- Facilities

Search results are displayed dynamically based on the entered query.

### 🏷️ Category Filters

Locations can be filtered according to categories such as:

- Academic
- Administrative
- Facilities
- Other campus locations

An **All** category is also available to display every location.

### ℹ️ Location Information

When a location is selected, the application displays relevant information such as:

- Location name
- Description
- Category
- Facilities
- Accessibility information
- Opening/closing schedule

### 🕒 Open/Closed Status

The application determines whether a selected location is currently:

- 🟢 Open
- 🔴 Closed

The status is calculated using the location's schedule and the current date/time.

### 📱 Responsive Interface

The interface is designed to work across different screen sizes, including:

- Desktop
- Laptop
- Tablet
- Mobile devices

### 🎬 Interactive Landing Page

The project includes an introductory landing page with a campus video before users enter the main navigation interface.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **React.js** | Building reusable UI components |
| **JavaScript (ES6+)** | Application logic and interactivity |
| **HTML5 / JSX** | Structure and UI rendering |
| **CSS3** | Styling, layout, animations and responsiveness |
| **Vite** | Development server and build tool |
| **SVG** | Interactive campus map |
| **Git & GitHub** | Version control and collaboration |

---

## ⚛️ React Concepts Used

This project demonstrates several important React concepts:

- Functional Components
- JSX
- Props
- State Management
- `useState`
- `useEffect`
- `useRef`
- Conditional Rendering
- Event Handling
- Component Reusability
- Parent-to-Child Data Flow
- Callback Functions

---

## 📂 Project Structure

```text
campus-navigator-react/
│
├── public/
│   ├── campus-intro.mp4
│   ├── campusMap.svg
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   │
│   ├── components/
│   │   ├── CampusNavigator.jsx
│   │   ├── Filters.jsx
│   │   ├── Header.jsx
│   │   ├── InfoPanel.jsx
│   │   ├── LandingPage.jsx
│   │   ├── Map.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── Modal.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── data/
│   │   └── locations.js
│   │
│   ├── utils/
│   │   └── status.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
