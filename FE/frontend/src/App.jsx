import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AddVehicle from './components/AddVehicle';

function App() {
    return (
        <Router>
            <nav>
                <Link to="/home">Home</Link>||
                <Link to="/add">Add Vehicle</Link>
            </nav>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/add" element={<AddVehicle />} />
            </Routes>
        </Router>
    );
}

export default App;
