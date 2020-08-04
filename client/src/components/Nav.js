import React from "react";
import { Router, Redirect } from "@reach/router";
import jwt_decode from "jwt-decode";

import store from "../store/store";
import setAuthToken from "../utilis/setAuthToken";
import { setCurrentUser, logout } from "../store/actions/auth";

import Topmenu from "./Topmenu";
import Sidemenu from "./Sidemenu";
import Breadcrumbs from "./Breadcrumbs";

export default function Nav({ children }) {
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      console.log(token);
      setAuthToken(token);
      // Decode token and get user info and exp
      const decoded = jwt_decode(token);
      setData(decoded.type);

      console.log(decoded);

      // Set user and isAuthenticated
      store.dispatch(setCurrentUser(decoded));
      console.log(store.getState().auth.isAuthenticated);
      if (!store.getState().auth.isAuthenticated) {
        return <Redirect to="login" noThrow />;
      }
      // Set auth token header auth
    } else {
      return <Redirect to="login" noThrow />;
    }
  }, []);

  return (
    <div className="wrapper">
      <Topmenu />
      <Sidemenu />

      <div className="content-wrapper">
        <Breadcrumbs
          title="Dashboard"
          breadcrumbs1="Dashboard"
          breadcrumbs2="Home"
        />
        <section className="content">{children}</section>
      </div>
      <footer className="main-footer">
        <strong>Copyright &copy; 2020</strong>
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 1.0.0
        </div>
      </footer>
    </div>
  );
}
