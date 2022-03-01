import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRocketsFromAPI } from '../../redux/rockets/rocketsAPI';
import OneBook from './oneRocket';

const Rockets = () => {
  const rocketsArr = useSelector((state) => state.reducerRockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketsFromAPI());
  }, []);
  return (
    <section className="rockets-wrapper">
      {rocketsArr.map((rocket) => (
        <div key={rocket.id} id={rocket.id} className="rocket-card">
          <OneBook rocket={rocket} />
        </div>
      ))}
    </section>
  );
};
export default Rockets;
