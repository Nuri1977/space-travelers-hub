import React from 'react';
import PropTypes from 'prop-types';
import './oneRocket.css';

const OneRocket = ({ prop }) => {
  const {

    id,
    rocketName,
    description,
    flickrImages,
  } = prop;

  return (
    <div className="rocket" id={id}>
      <img src={flickrImages} alt="" />
      <div className="column">
        <h2 className="rocket-name">{rocketName}</h2>
        <p className="rocket-description">{description}</p>
        <button type="button" className="button">Reserve</button>
      </div>
    </div>
  );
};

OneRocket.propTypes = {
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  prop: PropTypes.arrayOf.isRequired,
};

export default OneRocket;
