import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addReceivedRequests } from "../utils/receivedRequestSlice";

const ReceivedRequest = () => {
  const dispatch = useDispatch();
  const reqReceived = useSelector((state) => state.receivedRequests);
  console.log("req", reqReceived);
  const getReceivedRequests = async () => {
    try {
      const resp = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      dispatch(addReceivedRequests(resp.data));
    } catch (error) {
      console.log("Error while getting received request", error.message);
    }
  };
  useEffect(() => {
    getReceivedRequests();
  }, []);

  return <div></div>;
};

export default ReceivedRequest;
