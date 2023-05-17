import "./App.css";
import React, { useState } from "react";
import data from "./Data/data";
import AddUsers from "./components/AddUsers";
import Users from "./components/Users";
import { Switch, Route } from "react-router-dom";
import UpdateUsersDetails from "./components/UpdateUsersDetails";
import NoPage from "./components/NoPage";
import Dashboard from "./components/Dashboard";

function App() {
  const [users, setUsers] = useState(data);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/users">
          <Users users={users} setUsers={setUsers} />
        </Route>
        <Route path="/add">
          <AddUsers users={users} setUsers={setUsers} />
        </Route>
        <Route path="/edit/:id/">
          <UpdateUsersDetails users={users} setUsers={setUsers} />
        </Route>

        <Route path="**">
          <NoPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
