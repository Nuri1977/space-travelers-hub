import { useDispatch } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { bookingRocket, cancelRocket } from '../../redux/rockets/rockets';
import './oneRocket.css';

const OneRocket = ({ rockets }) => {
  const {

    id,
    rocketName,
    description,
    flickrImages,
    reserved,
  } = rockets;

  const dispatch = useDispatch();

  const booking = (id) => {
    dispatch(bookingRocket(id));
  };

  const canceling = (id) => {
    dispatch(cancelRocket(id));
  };

  return (
    <div className="rocket" id={id}>
      <img src={flickrImages} alt="" />
      <div className="column">
        <h2 className="rocket-name">{rocketName}</h2>
        <div className="badge">

          { reserved
            ? <button type="button" className="reserved">reserved</button>
            : ''}

          <p className="rocket-description">{description}</p>
        </div>
        { reserved
          ? <button onClick={() => canceling(id)} className="cancel-button" type="button">Cancel Rocket</button>
          : <button type="button" onClick={() => booking(id)} className="booking-button">Reserve Rocket</button>}
      </div>
    </div>
  );
};

OneRocket.defaultProps = {
  reserved: false,
};

OneRocket.defaultProps = {
  rocketName: true,
};

OneRocket.defaultProps = {
  description: true,
};

OneRocket.defaultProps = {
  rockets: true,
};

OneRocket.propTypes = {
  rocketName: PropTypes.string,
  description: PropTypes.string,
  rockets: PropTypes.func,
  reserved: PropTypes.bool,
};

export default OneRocket;
