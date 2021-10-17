import React from 'react';
import { NavLink } from 'react-router-dom';
import './menucategory.css';

const Menucategory = () => {
    return (
        <div className="MenuCategory">
            <NavLink to="/breakfast">Breakfast</NavLink>
            <NavLink to="/lunch">Lunch</NavLink>
            <NavLink to="/dinner">Dinner</NavLink>
        </div>
    );
};

export default Menucategory;