import React from "react";
import { useHistory } from "react-router-dom";

const Base = ({ title, description, children }) => {
  const history = useHistory();
  return (
    <div className="main-component base-component">
      <header>
        <h1 className="heading">{title}</h1>
        <div className="Nav">
          <button onClick={() => history.push("/")}>Dashboard</button>
          <button onClick={() => history.push("/users")}>
            Users Dashboard
          </button>
          <button onClick={() => history.push("/add")}>Add User</button>
        </div>
      </header>
      <main className="main-segment">
        <h2 style={{ color: "gray" }}>{description}</h2>
        <br />
        <div>{children}</div>
      </main>
    </div>
  );
};

export default Base;
