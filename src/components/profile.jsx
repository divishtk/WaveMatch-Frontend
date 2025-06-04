import React from "react";
import ProfileUpdate from "./profileUpdate";
import { useSelector } from "react-redux";

const Profile = () => {
  const getLoggedInUser = useSelector((state) => state.user);

  return (
    getLoggedInUser && (
      <>
        <div>
          <ProfileUpdate user={getLoggedInUser} />
        </div>
      </>
    )
  );
};

export default Profile;
