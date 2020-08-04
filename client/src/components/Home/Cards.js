import React from "react";
import { Link } from "@reach/router";

export default function Cards() {
  return (
    <div className="row">
      <div className="col-lg-3 col-6">
        <div className="small-box bg-warning">
          <div className="inner">
            <h3>44</h3>

            <p>User Registrations</p>
          </div>
          <div className="icon">
            <i className="ion ion-person-add"></i>
          </div>
          <Link to="dashboard" className="small-box-footer">
            More info <i className="fas fa-arrow-circle-right"></i>
          </Link>
        </div>
      </div>
      <div className="col-lg-3 col-6">
        <div className="small-box bg-success">
          <div className="inner">
            <h3 style={{ color: "#fff", marginTop: "25px" }}>Excel</h3>
          </div>
          <div className="icon">
            <i className="ion ion-stats-bars"></i>
          </div>
          <a href="/" className="small-box-footer">
            More info <i className="fas fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>
      <div class="col-lg-3 col-6">
        <div class="small-box bg-danger">
          <div class="inner">
            <h3
              style={{
                color: "#fff",
                marginTop: "30px",
                fontSize: "25px",
              }}
            >
              Add Player
            </h3>
          </div>
          <div class="icon">
            <i class="ion ion-person-add"></i>
          </div>
          <Link to="/addplayer" class="small-box-footer">
            More info <i class="fas fa-arrow-circle-right"></i>
          </Link>
        </div>
      </div>

      <div class="col-lg-3 col-6">
        <div class="small-box bg-info">
          <div class="inner">
            <h3
              style={{
                color: "#fff",
                marginTop: "30px",
                fontSize: "25px",
              }}
            >
              View Player
            </h3>
          </div>
          <div class="icon">
            <i class="ion ion-eye"></i>
          </div>
          <Link to="dashboard" class="small-box-footer">
            More info <i class="fas fa-arrow-circle-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
