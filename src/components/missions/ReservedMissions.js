import React from 'react';
import { useSelector } from 'react-redux';
import './reservedMissions.css';

function ReservedMissions() {
  const allMissions = useSelector((state) => state.missions);

  const reserved = allMissions.filter((mission) => mission.reserved);
  return (
    <section className="reserved-list">
      <h2>My Missions</h2>

      {
        reserved.map((item) => (
          <div className="reserved-mission" key={item.id}><p>{item.mission_name}</p></div>
        ))
      }
    </section>
  );
}

export default ReservedMissions;
