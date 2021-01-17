import React, { Component } from "react";
import ProfileTitle from './ProfileTitle'
class Profile extends Component {
  render() {
    return (
      <div className="profile text-uppercase">
        <ProfileTitle />
      </div>
    );
  }
}

export default Profile;
