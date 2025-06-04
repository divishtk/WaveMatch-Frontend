import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { getFeeds } from "../utils/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  console.log(feed)

  const getUsersFeed = async () => {
    try {
      if(feed) return ;
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

  return <div>
   Hi {feed[0].firstName}
  </div>;
};

export default Feed;
