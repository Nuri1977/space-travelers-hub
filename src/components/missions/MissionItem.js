import React from 'react';
import PropTypes from 'prop-types';

function MissionItem({ mission }) {
  return (
    <li>
      <p>{mission.mission_name}</p>
      <p>{mission.description}</p>
    </li>
  );
}

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default MissionItem;
