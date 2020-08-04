import React, { useEffect } from "react";
import { Router } from "@reach/router";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Logout from "./components/Logout";
import Nav from "./components/Nav";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home/index";
import AddPlayer from "./pages/AddPlayer/index";
import EditPlayer from "./pages/EditPlayer/index";
import ViewPlayer from "./pages/ViewPlayer/index";

function App() {
  return (
    <Router>
      <Login path="/login" />
      <Logout path="/logout" />
      <SignUp path="/register" />

      <Nav path="/">
        <Home path="/" />
        <AddPlayer path="/addplayer" />
        <ViewPlayer path="/player/:id" />
        <EditPlayer path="/editplayer/:id" />
        <Dashboard path="/dashboard" />
      </Nav>
    </Router>
  );
}

export default App;
