/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missions';
import './MissionItem.css';

function MissionItem({ mission }) {
  const {
    mission_name, mission_id, description, reserved,
  } = mission;
  const dispatch = useDispatch();
  const handleJoin = () => {
    dispatch(joinMission(mission_id));
  };

  const handleLeave = () => {
    dispatch(leaveMission(mission_id));
  };

  return (
    <tr className="table">
      <td className="mis-name align-left">
        <h3>{mission_name}</h3>
      </td>
      <td className="mis-descriptions align-left">{description}</td>
      <td className="mis-btn1">
        {reserved && (
          <button type="button" className="badge-secondary">Active member</button>
        )}
        {!reserved && (
          <button type="button" className="badge-primary">Not a member</button>
        )}
      </td>
      <td className="mis-btn2">
        {reserved && (
          <button type="button" className="btn-secondary" onClick={handleLeave}>Leave Mission</button>
        )}
        {!reserved && (
          <button type="button" className="btn-primary" onClick={handleJoin}>Join Mission</button>
        )}
      </td>
    </tr>
  );
}

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    mission_id: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default MissionItem;
