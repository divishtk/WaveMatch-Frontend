import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/yourConnectionsSlice";

const YourConnections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.yourConnections);
  const yourFetchedConnections = async () => {
    try {
      const resp = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(resp.data.data));
    } catch (error) {
      console.log("Error while fetching connections", error.message);
    }
  };

  useEffect(() => {
    yourFetchedConnections();
  }, []);

  if (!connections) return;
  if (connections.lenght === 0)
    return <h1 className="text-bold text-2xl">No connections found!</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-2xl">Your Connections!</h1>
      {connections.map((conn) => {
        const { firstName, gender, lastName, age, pic, about } = conn;
        return (
          <ul className="list bg-base-100 rounded-box shadow-md w-90 text-center m-auto my-3">
            <li className="list-row">
              <div>
                <img className="size-10 rounded-box" src={pic} />
              </div>
              <div>
                <div>{firstName + " " + lastName}</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  {gender + " " + age}
                </div>
                <div className="text-xs uppercase font-semibold opacity-60 my-3.5">
                  {about}
                </div>
              </div>
              <button className="btn btn-square btn-ghost">
                <svg
                  className="size-[1.2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </g>
                </svg>
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default YourConnections;
