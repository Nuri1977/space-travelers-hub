import React from 'react';
import PropTypes from 'prop-types';
import MissionItem from './MissionItem';

function MissionsList({ missions }) {
  return (
    <ul>
      <li>
        <h3>Mission</h3>
        <h3>Descrition</h3>
        <h3>Status</h3>
        <h3>Status1</h3>
      </li>
      {missions.map((mission) => (
        <MissionItem
          key={mission.mission_id}
          mission={mission}
        />
      ))}
    </ul>
  );
}

MissionsList.propTypes = {
  missions: PropTypes.arrayOf(MissionItem.propTypes.mission).isRequired,
};

export default MissionsList;
