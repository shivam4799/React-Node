import React from "react";

export default function SinglePlayer({ data }) {
  const imgs = data.images;
  console.log(imgs);

  {
    /* <>
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Profile</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item active">User Profile</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section class="content"> */
  }
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <div class="card card-primary card-outline">
            <div class="card-body box-profile">
              <div class="text-center">
                <img
                  class="profile-user-img img-fluid img-circle"
                  src={
                    "http://localhost:5000/player/smallimage/profile/" + data.id
                  }
                  alt="User profile picture"
                />
              </div>

              <h3 class="profile-username text-center">Nina Mcintire</h3>

              <p class="text-muted text-center">Software Engineer</p>

              <ul class="list-group list-group-unbordered mb-3">
                <li class="list-group-item">
                  <b>Followers</b> <a class="float-right">1,322</a>
                </li>
                <li class="list-group-item">
                  <b>Following</b> <a class="float-right">543</a>
                </li>
                <li class="list-group-item">
                  <b>Friends</b> <a class="float-right">13,287</a>
                </li>
              </ul>

              <a href="#" class="btn btn-primary btn-block">
                <b>Follow</b>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <div class="card-body" style={{ paddingTop: "0px" }}>
            <div class="tab-content">
              <div class="active tab-pane" id="settings">
                <div class="card card-primary">
                  <div class="card-header">
                    <h3 class="card-title">About Me</h3>
                  </div>
                  <div class="card-body">
                    <strong>Name</strong>

                    <p class="text-muted">{data.fullName}</p>

                    <hr />

                    <strong>Enrollment Number</strong>

                    <p class="text-muted">{data.Enrollment}</p>

                    <hr />

                    <strong>Birth Date</strong>

                    <p class="text-muted">{data.dob}</p>

                    <hr />

                    <strong>Category</strong>
                    <p class="text-muted">
                      {/* <span class="tag tag-danger">Cricket</span> ,{" "}
                          <span class="tag tag-success">Football</span> ,{" "} */}
                      <span class="tag tag-info">{data.category}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div class="card-body" style={{ paddingTop: 0 }}>
            <div class="tab-content">
              <div class="active tab-pane" id="settings">
                <div class="card card-primary">
                  <div class="card-header">
                    <h3 class="card-title">Information</h3>
                  </div>
                  <div class="card-body">
                    <strong>Father Name</strong>

                    <p class="text-muted">{data.fatherName}</p>

                    <hr />

                    <strong>Mother Name</strong>

                    <p class="text-muted">{data.motherName}</p>

                    <hr />

                    <strong>Name Of Course</strong>

                    <p class="text-muted">{data.course}</p>

                    <hr />

                    <strong>Duration Of Course</strong>

                    {/* <p class="text-muted">BE-4</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div class="card-body" style={{ paddingTop: 0 }}>
            <div class="tab-content">
              <div class="active tab-pane" id="settings">
                <div class="card card-primary">
                  <div class="card-header">
                    <h3 class="card-title">
                      Date and Year of FIRST Admission in
                    </h3>
                  </div>
                  <div class="card-body">
                    <strong>University</strong>

                    <p class="text-muted">{data.dopuni}</p>

                    <hr />

                    <strong>Present Course</strong>

                    <p class="text-muted">{data.dopcourse}</p>

                    <hr />

                    <strong>Present class</strong>

                    <p class="text-muted">{data.dopclass}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div class="card-body" style={{ paddingTop: 0 }}>
            <div class="tab-content">
              <div class="active tab-pane" id="settings">
                <div class="card card-primary">
                  <div class="card-header">
                    <h3 class="card-title">Last semister exam passed & year</h3>
                  </div>
                  <div class="card-body">
                    <strong>Sem</strong>

                    <p class="text-muted">{data.lastsempassed}</p>

                    <hr />

                    <strong>Year</strong>

                    <p class="text-muted">{data.lspyear}</p>

                    <hr />

                    <strong>Mobile Number</strong>

                    <p class="text-muted">{data.mobileNo}</p>
                    <hr />

                    <strong>
                      No. of years already participate in the Inter uni. Tour.
                    </strong>

                    <p class="text-muted">{data.tournamentNo}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div class="card-body" style={{ paddingTop: 0 }}>
            <div class="tab-content">
              <div class="active tab-pane" id="settings">
                <div class="card card-primary">
                  <div class="card-header">
                    <h3 class="card-title">Images</h3>
                  </div>
                  <div class="card-body">
                    <div className="row">
                      <div className="col-md-3">
                        <a href="#" class="btn btn-success btn-block">
                          <img
                            src={
                              "http://localhost:5000/player/smallimage/aadharcard/" +
                              data.id
                            }
                            alt=""
                          />
                          <br />
                          <b>Aadhar Card</b>
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="#" class="btn btn-success btn-block">
                          <img
                            src={
                              "http://localhost:5000/player/smallimage/lc/" +
                              data.id
                            }
                            alt=""
                          />
                          <br />
                          <b>L.C.</b>
                        </a>
                        {/* <p>{data.images.profile}</p> */}
                        {/* src={`data:image/jpeg;base64,${data.images.lc}`} */}
                      </div>
                      <div className="col-md-3">
                        <a href="#" class="btn btn-success btn-block">
                          <img
                            src={
                              "http://localhost:5000/player/smallimage/ssc/" +
                              data.id
                            }
                            alt=""
                          />
                          <br />
                          <b>10th</b>
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="#" class="btn btn-success btn-block">
                          <img
                            src={
                              "http://localhost:5000/player/smallimage/hsc/" +
                              data.id
                            }
                            alt=""
                          />
                          <br />
                          <b>12th</b>
                        </a>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-3">
                        <a href="#" class="btn btn-success btn-block">
                          <img
                            src={
                              "http://localhost:5000/player/smallimage/firstFee/" +
                              data.id
                            }
                            alt=""
                          />
                          <br />
                          <b>First Fee</b>
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="#" class="btn btn-success btn-block">
                          <img
                            src={
                              "http://localhost:5000/player/smallimage/lastFee/" +
                              data.id
                            }
                            alt=""
                          />
                          <br />
                          <b>Last Fee</b>
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="#" class="btn btn-success btn-block">
                          <img
                            src={
                              "http://localhost:5000/player/smallimage/lastMarksheet/" +
                              data.id
                            }
                            alt=""
                          />
                          <br />
                          <b>Last Marksheet </b>
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="#" class="btn btn-success btn-block">
                          <img
                            src={
                              "http://localhost:5000/player/smallimage/collageId/" +
                              data.id
                            }
                            alt=""
                          />
                          <br />
                          <b>Collage ID</b>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* </section>
    </> */
}
