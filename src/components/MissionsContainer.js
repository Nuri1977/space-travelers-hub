import React from 'react';
import { useSelector } from 'react-redux';

function MissionsContainer() {
  const missions = useSelector((state) => state.missions);
  return (
    <div>
      <h1>Missions</h1>
      <ul>
        {missions.map((mission) => (
          <li key={mission.id}>
            {' '}
            {mission.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MissionsContainer;
