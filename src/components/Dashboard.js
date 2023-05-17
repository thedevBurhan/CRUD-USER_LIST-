import React from "react";
import Base from "../Base/Base";
import Error from "./Dash.gif";
const Dashboard = () => {
  return (
    <Base
      title={"Welcome To User Data Base "}
      description={"In this website you can see the Users details..."}
    >
      <img style={{ width: "80%" }} src={Error} alt="Loading..." />
    </Base>
  );
};

export default Dashboard;
