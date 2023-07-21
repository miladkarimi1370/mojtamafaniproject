import React from "react";
import "./styleOfCasts.css";
export default function TemplateOfCasts({ img, name, job }) {
  return (
    <>
      <div className="col-sm-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
        <img src={`./img/${img}`} alt={name} className="img-fluid custom-img img-thumbnail rounded-circle" />
        <h5 className="text-white mt-3">{name}</h5>
        <h6 className="text-grey">{job} </h6>
      </div>
    </>
  );
}
