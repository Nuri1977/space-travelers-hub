import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../../redux/missions/missions';
import MissionsList from './MissionsList';
import './MissionsContainer.css';

function MissionsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    getMissions()(dispatch);
  }, []);

  const missions = useSelector((state) => state.missions);
  return (
    <div className="container">
      <MissionsList missions={missions} />
    </div>
  );
}

export default MissionsContainer;
