import React from 'react';
import ReservedRockets from '../rockets/reservedList';
import './myProfile.css';

const ProfileContainer = () => (
  <section className="profile-wrapper">
    <div className="rockets">
      <ReservedRockets />
    </div>
    <div className="missions" />
  </section>
);

export default ProfileContainer;
