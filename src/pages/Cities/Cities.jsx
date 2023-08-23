import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';
import './cities.css';

const Cities = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('URL api')
      .then(response => response.json())
      .then(data => setCities(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Layout>
      <h1>Cities</h1>
      <ul>
        {cities.map(city => (
          <li key={city._id}>{city.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export default Cities;
