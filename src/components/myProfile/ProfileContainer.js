import React from 'react';
import ReservedMissions from '../missions/ReservedMissions';
import ReservedRockets from '../rockets/reservedList';
import './myProfile.css';

const ProfileContainer = () => (
  <section className="profile-wrapper">
    <div className="rockets">
      <ReservedRockets />
    </div>
    <div className="missions">
      <ReservedMissions />
    </div>
  </section>
);

export default ProfileContainer;
