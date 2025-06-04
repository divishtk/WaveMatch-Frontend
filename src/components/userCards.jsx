import React from "react";

const UserCard = ({ user }) => {
  const { firstName, gender, lastName, age, pic ,about } = user;
   return (
    <div className="card bg-base-100 w-66 shadow-sm ">
  <figure>
    <img
      src={pic}
      alt="Shoes" className="w-70 h-55" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
        {firstName + " " + lastName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    {age && gender && <p>{age + " "+gender}</p>}
    <p className="">{about}</p>
    <div className="card-actions justify-end">
      <div className="btn btn-outline btn-primary">Intrested</div>
      <div className="btn btn-outline btn-error">Ignore</div>
    </div>
  </div>
</div>
  );
};

export default UserCard;
