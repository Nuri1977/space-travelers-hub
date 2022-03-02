import React from 'react';
import { useSelector } from 'react-redux';
import './reservedList.css';

const ReservedRockets = () => {
  const allRockets = useSelector((state) => state.reducerRockets);
  const reserved = allRockets.filter((rocket) => rocket.reserved);
  return (
    <section className="reserved-list">
      <h2>My Rockets</h2>

      {
          reserved.map((item) => (
            <div className="reserved-rocket" key={item.id}><p>{item.rocketName}</p></div>
          ))
        }
    </section>
  );
};

export default ReservedRockets;
