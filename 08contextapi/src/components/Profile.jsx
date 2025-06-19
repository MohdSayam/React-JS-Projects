import React from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = React.useContext(UserContext);
  if (!user) {
    return <div>Please log in to see your profile.</div>;
  }
  return (
    <div>
      <h1>Profile: {user.username}</h1>
    </div>
  );
}

export default Profile;
