import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const { _id ,firstName, gender, lastName, age, pic, about } = user;
  const intrested = "intrested" ;
  const dispatch = useDispatch();

  const sendRequest = async (status , userId) => {
    try {
      const resp = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        {
          withCredentials: true,
        }
      );
        dispatch(removeUserFromFeed(userId))
    } catch (error) {
      console.log("Error while sending request", error.message);
    }
  };

  return (

    <div className="card bg-base-100 w-70 h-115 shadow-sm">
      <figure>
        <img src={pic} alt="Shoes" className="w-70 h-55" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName + " " + lastName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        {age && gender && <p>{age + " " + gender}</p>}
        <p className="">{about}</p>
        <div className="card-actions justify-end">
          <div className="btn btn-outline btn-primary" onClick={()=>sendRequest(intrested  ,_id)}>Intrested</div>
          <div className="btn btn-outline btn-error"onClick={()=>sendRequest("ignored"  ,_id)}>Ignore</div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
