import React from 'react';
import PropTypes from 'prop-types';

function MissionItem({ mission }) {
  return (
    <tr>
      <td className="mis-name">{mission.mission_name}</td>
      <td className="mis-descriptions">{mission.description}</td>
      <td className="mis-btn1">
        <button type="button">Not a member</button>
      </td>
      <td className="mis-btn2">
        <button type="button">Join Mission</button>
      </td>
    </tr>
  );
}

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default MissionItem;
