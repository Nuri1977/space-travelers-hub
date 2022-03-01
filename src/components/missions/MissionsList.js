import React from 'react';
import PropTypes from 'prop-types';
import MissionItem from './MissionItem';

function MissionsList({ missions }) {
  return (
    <table>
      <tr>
        <th>Mission</th>
        <th>Descrition</th>
        <th>Status</th>
        <th>Status1</th>
      </tr>
      {missions.map((mission) => (
        <MissionItem
          key={mission.mission_id}
          mission={mission}
        />
      ))}
    </table>
  );
}

MissionsList.propTypes = {
  missions: PropTypes.arrayOf(MissionItem.propTypes.mission).isRequired,
};

export default MissionsList;
