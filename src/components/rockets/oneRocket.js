import React from 'react';
import PropTypes from 'prop-types';
import './rockets.css';

const OneRocket = ({ rockets }) => {
  const {

    id,
    rocketName,
    description,
    flickrImages,
  } = rockets;

  return (
    <div className="rocket" id={id}>
      <img src={flickrImages} alt="" />
      <div className="rocket-name">{rocketName}</div>
      <div className="rocket-description">{description}</div>
      <div className="button-wrapper">
        <button type="button" className="buttons">Reserve Rockets</button>
      </div>
    </div>
  );
};

OneRocket.propTypes = {
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rockets: PropTypes.arrayOf.isRequired,
};

export default OneRocket;
