import React from 'react'
import { Link } from 'react-router-dom';
import "./cardDetail.css"

const CardDetail = () => {
    return (
        <div className="city-details">
            <Link to="/Cities">Back to Cities</Link>
            <p>Under construction</p>
            {/* Aquí se pueden agregar itinerarios y actividades en el futuro */}
        </div>
    );
};

export default CardDetail;