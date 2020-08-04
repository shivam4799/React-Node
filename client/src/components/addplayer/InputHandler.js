import React from "react";

export default function InputHandler({
  label,
  type,
  placeholder,
  name,
  register,
  value,
}) {
  return (
    <div className="form-group row">
      <label className="col-sm-3 col-form-label">{label}</label>
      {type === "date" ? (
        <div className="col-sm-3">
          <input
            type={type}
            className="form-control"
            placeholder={placeholder}
            ref={register}
            name={name}
            value={value}
          />
        </div>
      ) : (
        <div className="col-sm-9">
          <input
            type={type}
            className="form-control"
            placeholder={placeholder}
            ref={register}
            name={name}
            defaultValue={value}
          />
        </div>
      )}
    </div>
  );
}
