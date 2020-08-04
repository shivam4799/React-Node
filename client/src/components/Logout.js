import React from "react";
import { Redirect } from "@reach/router";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";

const Logout = (props) => {
  React.useEffect(() => {
    props.onLogout();
  });

  return <Redirect to="/index" />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
