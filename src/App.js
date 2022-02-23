import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import "../dist/css/main.min.css";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </Router>
    )
}

export default App;

