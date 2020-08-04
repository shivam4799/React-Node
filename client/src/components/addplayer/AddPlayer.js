import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import InputHandler from "./InputHandler";

export default function AddPlayer({ edit, id, type }) {
  const { register, handleSubmit, watch, errors } = useForm();
  // edit.collageId = watch("collageId");
  // console.log(watch("collageId"));
  console.log(id, type);

  const onSubmit = (data) => {
    console.log(data);
    if (data.profile !== undefined) {
      data.profile = data.profile[0];
    }
    if (data.lc !== undefined) {
      data.lc = data.lc[0];
    }
    if (data.lastFee !== undefined) {
      data.lastFee = data.lastFee[0];
    }
    if (data.ssc !== undefined) {
      data.ssc = data.ssc[0];
    }

    if (data.hsc !== undefined) {
      data.hsc = data.hsc[0];
    }
    if (data.firstFee !== undefined) {
      data.firstFee = data.firstFee[0];
    }
    if (data.lastMarksheet !== undefined) {
      data.lastMarksheet = data.lastMarksheet[0];
    }
    if (data.aadharcard !== undefined) {
      data.aadharcard = data.aadharcard[0];
    }

    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }

    console.log(formData);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    if (type == "register") {
      console.log("reg");

      axios
        .post("/player/add", formData, config)
        .then((response) => {
          alert("The file is successfully uploaded");
        })
        .catch((error) => {});
    } else {
      console.log("update");
      axios
        .post("/player/update/" + id, formData, config)
        .then((response) => {
          alert("The file is successfully uploaded");
        })
        .catch((error) => {});
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="card-body" style={{ paddingTop: "0px" }}>
            <div className="tab-content">
              <div className="active tab-pane" id="settings">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="form-horizontal"
                >
                  <div className="card card-primary">
                    <div className="card-header">
                      <h3 className="card-title">About Me</h3>
                    </div>
                    <div className="card-body">
                      <InputHandler
                        label="CollageId"
                        placeholder="Enter colalge id"
                        name="collageId"
                        register={register}
                        type="text"
                        value={
                          edit.collageId == "undefined" ? "" : edit.collageId
                        }
                      />
                      <InputHandler
                        label="Enrollment Number"
                        placeholder="Enter Enrollment Number"
                        name="Enrollment"
                        register={register}
                        type="number"
                        value={
                          edit.Enrollment == "undefined" ? "" : edit.Enrollment
                        }
                      />

                      <InputHandler
                        label="Full Name"
                        placeholder="Enter Full Name"
                        name="fullName"
                        register={register}
                        type="text"
                        value={
                          edit.fullName == "undefined" ? "" : edit.fullName
                        }
                      />
                      <InputHandler
                        label="Father Name "
                        placeholder="Father Name"
                        name="fatherName"
                        register={register}
                        type="text"
                        value={
                          edit.fatherName == "undefined" ? "" : edit.fatherName
                        }
                      />
                      <InputHandler
                        label="Mother Name "
                        type="text"
                        name="motherName"
                        placeholder="Mother Name"
                        register={register}
                        value={
                          edit.motherName == "undefined" ? "" : edit.motherName
                        }
                      />
                      <InputHandler
                        type="date"
                        name="dob"
                        label="Date of Birth"
                        registwer={register}
                        value={edit.dob == "undefined" ? "" : edit.dob}
                      />

                      <InputHandler
                        type="text"
                        name="course"
                        placeholder="BE-IT"
                        label="Name of Course"
                        register={register}
                        value={edit.course == "undefined" ? "" : edit.course}
                      />
                    </div>
                    <div className="card-header">
                      <h3 className="card-title">
                        Date and Year of FIRST Admission in
                      </h3>
                    </div>
                    <div className="card-body">
                      <InputHandler
                        label="University"
                        name="douni"
                        type="date"
                        register={register}
                        value={edit.douni == "undefined" ? "" : edit.douni}
                      />
                      <InputHandler
                        name="dopcourse"
                        type="date"
                        label="Present Course"
                        register={register}
                        value={
                          edit.dopcourse == "undefined" ? "" : edit.dopcourse
                        }
                      />
                      <InputHandler
                        name="dopclass"
                        type="date"
                        label=" Present class"
                        register={register}
                        value={
                          edit.dopclass == "undefined" ? "" : edit.dopclass
                        }
                      />
                    </div>
                    <div className="card-header">
                      <h3 className="card-title">
                        Last semister exam passed & year
                      </h3>
                    </div>
                    <div className="card-body">
                      <InputHandler
                        name="lastsempassed"
                        label=" Sem"
                        register={register}
                        type="text"
                        value={
                          edit.lastsempassed == "undefined"
                            ? ""
                            : edit.lastsempassed
                        }
                      />
                      <InputHandler
                        type="number"
                        label="Year"
                        name="lspyear"
                        placeholder="2019"
                        register={register}
                        value={edit.lspyear == "undefined" ? "" : edit.lspyear}
                      />
                      <InputHandler
                        type="number"
                        label=" Mobile Number"
                        name="mobileNo"
                        placeholder="mobile number"
                        register={register}
                        value={
                          edit.mobileNo == "undefined" ? "" : edit.mobileNo
                        }
                      />
                      <InputHandler
                        type="number"
                        label=" No. of years already participate in the Inter uni. Tour."
                        name="tournametnNo"
                        placeholder="2"
                        register={register}
                        value={
                          edit.tournametnNo == "undefined"
                            ? ""
                            : edit.tournametnNo
                        }
                      />
                    </div>

                    <div className="card-header">
                      <h3 className="card-title">Images</h3>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-4">
                          <strong>Profile</strong>

                          <input
                            type="file"
                            name="profile"
                            ref={register}
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="col-sm-4">
                          <strong>L.C.</strong>

                          <input
                            type="file"
                            name="lc"
                            ref={register}
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="col-sm-4">
                          <strong>10th</strong>

                          <input
                            type="file"
                            name="ssc"
                            ref={register}
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>

                      <hr />
                      <div className="row">
                        <div className="col-sm-4">
                          <strong>12th</strong>

                          <input
                            type="file"
                            name="hsc"
                            ref={register}
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="col-sm-4">
                          <strong>First Fee</strong>

                          <input
                            type="file"
                            name="firstFee"
                            ref={register}
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="col-sm-4">
                          <strong>LAst Fee</strong>

                          <input
                            type="file"
                            name="lastFee"
                            ref={register}
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>

                      <hr />
                      <div className="row">
                        <div className="col-sm-4">
                          <strong>Last Marksheet</strong>

                          <input
                            type="file"
                            name="lastMarksheet"
                            ref={register}
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="col-sm-4">
                          <strong>Aadharcard</strong>

                          <input
                            type="file"
                            name="aadharcard"
                            ref={register}
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="col-sm-4">
                          <strong>Collage Id</strong>

                          <input
                            type="file"
                            name="collageId"
                            ref={register}
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="offset-sm-2 col-sm-10">
                      <button type="submit" className="btn btn-danger">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
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
