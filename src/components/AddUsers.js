import React, { useState } from "react";
import Base from "../Base/Base";
import { useHistory } from "react-router-dom";
const AddUsers = ({ users, setUsers }) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  //   console.log(users)
  const createUser = () => {
    const newUsers = {
      name: name,
      age: age,
      email: email,
      gender: gender,
    };
    // console.log(users)
    setUsers([...users, newUsers]);
    history.push("/users");
  };

  return (
    <Base
      title={"Add New User Details"}
      description={"We can able to add new users details here... "}
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
        <button onClick={createUser}>Add User Detail</button>
      </div>
    </Base>
  );
};

export default AddUsers;
