import React, { useState } from "react";
import Base from "../Base/Base";
import { useHistory } from "react-router-dom";

const Users = ({ users, setUsers }) => {
  // console.log(users)
  const history = useHistory();
  //  Delete functions

  const deleteUserDetail = (Userid) => {
    const remainingUsers = users.filter((users, idx) => idx !== Userid);
    setUsers(remainingUsers);
  };
  return (
    <Base
      title={"Users Dashboard"}
      description={"This page content all user data"}
    >
      <div className="card-container">
        {users.map((users, idx) => (
          <div className="card" key={idx}>
            <div className="content">
              <h3 style={{ color: "Red" }}>{users.name}</h3>
              <div className="value">
                <p>
                  <b>Age:</b> {users.age}
                </p>
                <p>
                  <b>Gender:</b> {users.gender}
                </p>
                <p>
                  <b>Email: </b>
                  {users.email}
                </p>
              </div>
            </div>
            <div className="control">
              <button onClick={() => history.push(`/edit/${idx}`)}>Edit</button>{" "}
              <button onClick={() => deleteUserDetail(idx)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </Base>
  );
};

export default Users;
