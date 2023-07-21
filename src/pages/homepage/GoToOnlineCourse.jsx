import axios from "axios";
import React, { useEffect, useState } from "react";

export default function GoToOnlineCourse() {
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/LogInToCourseOnline")
      .then((response) => setPictures(response.data));
  }, []);
  const mouseEnterHandler = () => {};
  return (
    <>
      <div className="bg-grey">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div
              className="col-sm-12 col-md-6 my-5 position-relative overflow-hidden"
              onMouseEnter={mouseEnterHandler}
            >
              <img
                src={`./img/${pictures[0]}`}
                alt="blackboard"
                className="img-fluid custom-hover img-thumbnail"
              />
              <button className="btn btn-light position-absolute top-50 start-50 text-centering-with-translate">
                کلکیک کنید
              </button>
            </div>
            <div className="col-sm-12 col-md-6 my-5 d-flex flex-column justify-content-around align-items-center">
              <p className="w-50 text-center text-grey font-big">
                برای ورود به کلاس آنلاین بر روی دکمه روی تخته سیاه کلیک نمائید{" "}
              </p>
              <img src={`./img/${pictures[1]}`} alt="courseOnline" className="img-fluid w-50" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
