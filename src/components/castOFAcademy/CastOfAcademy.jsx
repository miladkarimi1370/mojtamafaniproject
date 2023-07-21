import axios from "axios";
import React, { useEffect, useState } from "react";
import TemplateOfCasts from "./TemplateOfCasts";

export default function CastOfAcademy() {
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/castOfAcademy")
      .then((response) => setCasts(response.data));
  }, []);
  const teachers =
    casts.length &&
    casts.map((item) => {
      return (
        <TemplateOfCasts
          img={item.img}
          name={item.name}
          job={item.job}
          keys={item.id}
        />
      );
    });
  return (
    <>
      <div className="blue-lighter-than-dark">
        <div className="container">
          <div className="row">
            <div className="col">
              <h6 className="text-grey mt-4">پرسنل مجموعه : </h6>
            </div>
          </div>
          <div className="row">{teachers}</div>
        </div>
      </div>
    </>
  );
}
