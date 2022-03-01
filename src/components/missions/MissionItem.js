import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missions';

function MissionItem({ mission }) {
  const dispatch = useDispatch();
  const handleJoin = () => {
    dispatch(joinMission(mission.mission_id));
  };

  const handleLeave = () => {
    dispatch(leaveMission(mission.mission_id));
  };
  return (
    <tr>
      <td className="mis-name">{mission.mission_name}</td>
      <td className="mis-descriptions">{mission.description}</td>
      <td className="mis-btn1">
        <button type="button">Not a member</button>
      </td>
      <td className="mis-btn2">
        <button type="button" onClick={handleJoin}>Join Mission</button>
        <button type="button" onClick={handleLeave}>Leave Mission</button>
      </td>
    </tr>
  );
}

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    mission_id: PropTypes.string.isRequired,
  }).isRequired,
};

export default MissionItem;
