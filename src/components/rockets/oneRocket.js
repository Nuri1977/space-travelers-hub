import { useDispatch } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { bookingRocket } from '../../redux/rockets/rockets';
import './oneRocket.css';

const OneRocket = ({ rocket }) => {
  const {

    id,
    rocketName,
    description,
    flickrImages,
    reserved,
  } = rocket;

  const dispatch = useDispatch();

  const booking = (id) => {
    dispatch(bookingRocket(id));
  };

  return (
    <div className="rocket" id={id}>
      <img src={flickrImages} alt="" />
      <div className="column">

        <h2 className="rocket-name">{rocketName}</h2>
        <p className="rocket-description">{description}</p>
        {!reserved && (
        <button type="button" onClick={() => booking(id)} className="booking-button">Reserve Rocket</button>
        )}
      </div>
    </div>
  );
};

OneRocket.defaultProps = {
  reserved: false,
};

OneRocket.propTypes = {
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rocket: PropTypes.func.isRequired,
  reserved: PropTypes.bool,
};

export default OneRocket;
