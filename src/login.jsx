import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center my-15">
    <div className="card bg-base-200 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Login</h2>
        <input type="text" placeholder="Email" className="input rounded-sm" />
        <input type="password" placeholder="Password" className="input rounded-sm" />
        <div className="card-actions justify-end mt-3">
          <button className="btn btn-primary">Log In</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
