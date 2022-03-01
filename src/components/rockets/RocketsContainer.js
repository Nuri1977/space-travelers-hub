import React from 'react';
import { useSelector } from 'react-redux';
import OneBook from './oneRocket';
import './container.css';

const Rockets = () => {
  const rocketsArr = useSelector((state) => state.reducerRockets);
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
