import React from "react";

import "./icheck-bootstrap/icheck-bootstrap.min.css";
import "./adminlte.min.css";

import FullCal from "../../components/Home/Calendar";
import Todo from "../../components/Home/Todo";
import Cards from "../../components/Home/Cards";

export default function Dash() {
  return (
    <div className="container-fluid">
      <Cards />
      <Todo />
      <FullCal />
    </div>
  );
}
