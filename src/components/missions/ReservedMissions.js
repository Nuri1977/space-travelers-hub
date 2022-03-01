import React from 'react';
import { useSelector } from 'react-redux';

function ReservedMissions() {
  const allMissions = useSelector((state) => state.missions);

  const reserved = allMissions.filter((mission) => mission.reserved);
  return (
    <section className="reserved-list">
      <h2>My Missions</h2>

      {
        reserved.map((item) => (
          <div key={item.id}><p>{item.mission_name}</p></div>
        ))
      }
    </section>
  );
}

export default ReservedMissions;
