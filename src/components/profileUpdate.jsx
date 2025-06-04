import React, { useState } from "react";
import UserCard from "./userCards";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const ProfileUpdate = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [gender, setGender] = useState(user.gender);
  //const [hobbies, setHobbies] = useState("");
  const [pic, setPicUrl] = useState(user.pic);
  const [error, setError] = useState(" ");
  const [showToast, setToast] = useState(false);
  const dispatch = useDispatch();

  const updateProfile = async () => {
    try {
      const resp = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          about,
          gender,
          pic,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(resp.data));
      setToast(true);

      setTimeout(() => {
        setToast(false);
      }, 3000);

    } catch (error) {
      setError(error.response.data.message);
      console.log("Error while updating profile", error);
    }
  };

  return (
    <div className="flex justify-center gap-5 my-10">
      <div className="flex justify-center mx-10">
        <div className="flex justify-center my-15">
          <div className="card bg-base-200 w-96 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Update Profile</h2>
              <input
                type="text"
                value={firstName}
                placeholder="First name"
                className="input rounded-sm"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                value={lastName}
                placeholder="Last Name"
                className="input rounded-sm"
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="text"
                value={pic}
                placeholder="PhotoUrl"
                className="input rounded-sm"
                onChange={(e) => setPicUrl(e.target.value)}
              />
              <input
                type="text"
                value={age}
                placeholder="Age"
                className="input rounded-sm"
                onChange={(e) => setAge(e.target.value)}
              />
              <input
                type="text"
                value={gender}
                placeholder="Age"
                className="input rounded-sm"
                onChange={(e) => setGender(e.target.value)}
              />
              <input
                type="text"
                placeholder="About"
                value={about}
                className="input rounded-sm"
                onChange={(e) => setAbout(e.target.value)}
              />
              <p className="">{error}</p>
              <div className="card-actions justify-end mt-3 ">
                <button
                  className="btn btn-primary rounded-md"
                  onClick={updateProfile}
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserCard user={{ firstName, gender, lastName, age, pic, about }} />

      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success ">
            <span>Profile updated successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileUpdate;
