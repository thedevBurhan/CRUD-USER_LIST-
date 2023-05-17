import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Base from "../Base/Base";

function UpdateUsersDetails({ users, setUsers, editIdx }) {
  const history = useHistory();
  const { id } = useParams();
  const editUsers = users[id];
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName(editUsers.name);
    setAge(editUsers.age);
    setGender(editUsers.gender);
    setEmail(editUsers.email);
    // console.log(users)
  }, [editUsers]);

  function updateUserDetails() {
    const updatedObject = {
      name: name,
      age: age,
      gender: gender,
      email: email,
    };
    // console.log(updatedObject);
    users[id] = updatedObject;
    setUsers([...users]);
    history.push("/users");
  }

  return (
    <Base
      title={"Edit The Users Details"}
      description={"We can able to edit a users detail here... "}
    >
      <div className="cards">
        <input
          placeholder="Enter Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          placeholder="Gender"
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={updateUserDetails}>Update User Detail</button>
      </div>
    </Base>
  );
}

export default UpdateUsersDetails;
