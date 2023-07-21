import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
export default function Languages() {
  let [flags, setFlags] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/langauges")
      .then((response) => setFlags(response.data));
  }, []);
  const countries = flags.length
    ? flags.map((item) => {
        return (
          <div className="col text-center custom-flags" key={item.id}>
            {" "}
            <img
              src={`./img/${item.img}`}
              alt={item.name}
              className="img-fluid w-25 py-5 custom-img-for-flags"
            />
          </div>
        );
      })
    : "is Loading";

  return (
    <>
      <div className="custom-background-for-flags">
        <div className="container mt-5">
          <div className="row row-cols-2">{countries}</div>
        </div>
      </div>
    </>
  );
}
