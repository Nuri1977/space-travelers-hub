import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../../redux/missions/missions';
import MissionItem from './MissionItem';
import './MissionsContainer.css';

function MissionsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    getMissions()(dispatch);
  }, []);

  const missions = useSelector((state) => state.missions);
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Descrition</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <MissionItem
              key={mission.mission_id}
              mission={mission}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MissionsContainer;
