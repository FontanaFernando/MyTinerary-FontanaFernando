import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import useApi from '../../hooks/useApi';
import './citiesCard.css';

const CitiesCard = () => {
  const [cities, setCities] = useState([]);
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toUpperCase());
  };

  const { data, loading, error } = useApi('http://localhost:5175/api/city');

  const filteredCities = data?.city.filter(city =>
    city.name.toUpperCase().includes(filter)
  );

  if (loading) {
    return <h1>LOADING...</h1>;
  }

  if (error) {
    return <h1>UPS...</h1>;
  }

  return (
    <div className='city_input'>
      <input
        type="text"
        placeholder="Filter Cities by Name"
        value={filter}
        onChange={handleFilterChange}
      />
      <div className="cities_cards">
        {data && filteredCities && filteredCities.map((city, index) => (
          <Card
            key={index}
            title={city.name}
            country={city.country}
            image={city.image}
            button={'View'}
          />
        ))}
      </div>
    </div>
  );
};

export default CitiesCard;
