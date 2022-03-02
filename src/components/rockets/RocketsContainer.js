import React from 'react';
import { useSelector } from 'react-redux';
import OneBook from './oneRocket';
import './container.css';

const Rockets = () => {
  const rocketsArr = useSelector((state) => state.reducerRockets);
  return (
    <section className="rockets-wrapper">
      {rocketsArr.map((rocket) => (
        <OneBook
          key={rocket.id}
          rocketName={rocket.rocketName}
          flickrImages={rocket.flickrImages[0]}
          description={rocket.description}
          id={rocket.id}
          reserved={rocket.reserved}
        />
      ))}
    </section>

  );
};
export default Rockets;
