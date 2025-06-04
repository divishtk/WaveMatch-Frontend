import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { getFeeds } from "../utils/feedSlice";
import UserCard from "./userCards";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const getUsersFeed = async () => {
    try {
      if (feed) return;
      const feeds = await axios.get(BASE_URL + "/get-user-feed", {
        withCredentials: true,
      });
      dispatch(getFeeds(feeds.data));
    } catch (error) {
      console.log("Error while getting feeds", error);
    }
  };
  useEffect(() => {
    getUsersFeed();
  }, []);

  return (
    feed && (
    <div className="flex justify-center my-10">
      <UserCard user = {feed[0]} />
    </div>
    )
  );
};

export default Feed;
