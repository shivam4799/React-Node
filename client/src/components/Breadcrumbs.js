import React from "react";

export default function Breadcrumbs({ title, breadcrumbs1, breadcrumbs2 }) {
  return (
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">{title}</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="#">{breadcrumbs1}</a>
              </li>
              <li className="breadcrumb-item active">{breadcrumbs2}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
