import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [email, setEmailId] = useState("steven@gmail.com");
  const [password, setPassword] = useState("Elon@1234");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginApiCall = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(response.data));
      return navigate("/");
    } catch (error) {
      console.log("Err", error);
    }
  };

  return (
    <>
      <div className="flex justify-center my-15">
        <div className="card bg-base-200 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Login</h2>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmailId(e.target.value)}
              placeholder="Email"
              className="input rounded-sm"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="input rounded-sm"
            />
            <div className="card-actions justify-end mt-3">
              <button className="btn btn-primary" onClick={loginApiCall}>
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
