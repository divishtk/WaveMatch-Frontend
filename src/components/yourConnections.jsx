import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addConnections } from "../utils/yourConnectionsSlice";

const YourConnections = () => {
    const dispatch = useDispatch();
  const yourFetchedConnections = async () => {
  try {
      const resp = await axios.get(BASE_URL + "/user/connections",{
        withCredentials : true
      });
      dispatch(addConnections(resp.data));
  } catch (error) {
    console.log("Error while fetching connections",error.message) ;
  }
  };

  useEffect(()=>{
    yourFetchedConnections()
  },[])

  return <div className="flex justify-center my-10">
    <h1 className="text-bold text-2xl">Your Connections!</h1>
  </div>;
};

export default YourConnections;
