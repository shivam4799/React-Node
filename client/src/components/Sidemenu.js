import React from "react";
import { Link } from "@reach/router";

export default function Sidemenu() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/" className="brand-link">
        <h3 className="brand-text font-weight-light text-center">
          Sports Portal
        </h3>
      </Link>

      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item ">
              <Link to="/" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </Link>
            </li>

            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-plus-square"></i>
                <p>
                  Player
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/addplayer" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Add Player</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>View Players</p>
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="/dashboard" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>View Single Player</p>
                  </Link>
                </li> */}
                {/* <li className="nav-item">
                  <a
                    href="pages/examples/recover-password.html"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon"></i>
                    <p>Export to excle</p>
                  </a>
                </li> */}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
