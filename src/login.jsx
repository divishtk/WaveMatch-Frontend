import React, { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const loginApiCall = async() =>{
    
  }

  return (
    <div className="flex justify-center my-15">
      <div className="card bg-base-200 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <input
            type="text"
            value={emailId}
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
            <button className="btn btn-primary">Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
