import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './cardDetail.css';

const CardDetail = () => {
  const { id } = useParams();
  const itineraries = useSelector((state) => state.citiesReducer);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const setFilter = () => {
      const filter = itineraries.itineraries.filter((element) => {
        return element.nameCity.toLowerCase() === id.toLowerCase();
      });

      setFilterData(filter);
    };

    setFilter();
  }, [id, itineraries]);

  if (!id) {
    return (
      <div>
        <h1>Oops!!</h1>
      </div>
    );
  }

  if (filterData.length === 0) {
    return (
      <div className="city-details">
        <Link to="/Cities">Back to Cities</Link>
        <h1>NO ITINERARIES YET FOR THIS CITY</h1>
      </div>
    );
  }

  return (
    <div className="city-details">
      <Link to="/Cities">Back to Cities</Link>
      <div className="city-card-itinerary">
        {filterData.map((itinerary) => (
          <div key={itinerary.id} className="card-detail">
            {/* <h2>{itinerary.nameCity}</h2> */}
            <div className="author-info">
              <img src={itinerary.imageUser} alt={itinerary.nameUser} />
              <p>{itinerary.nameUser}</p>
            </div>
            <div className="price-info">
              <p>Price:</p>
              <div className="price-icons">
                {Array.from({ length: itinerary.price }, (_, index) => (
                  <span key={index} className="price-icon">
                    💰
                  </span>
                ))}
              </div>
            </div>
            <p>Duration: {itinerary.time} Hours</p>
            <div className="hashtags">
              {itinerary.hashtags.map((hashtag, index) => (
                <span key={index} className="hashtag">
                  #{hashtag}
                </span>
              ))}
            </div>
            <button className="view-more-button">View More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDetail;