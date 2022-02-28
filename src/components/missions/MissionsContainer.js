import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../../redux/missions/missions';
import MissionsList from './MissionsList';

function MissionsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  const missions = useSelector((state) => state.missions);
  return (
    <div>
      <MissionsList missions={missions} />
    </div>
  );
}

export default MissionsContainer;
