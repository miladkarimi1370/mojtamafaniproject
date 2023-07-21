import axios from "axios";
import React, { useEffect, useState } from "react";
export default function Slider() {
  const [slider, setSlider] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:3000/slider")
      .then((response) => setSlider(response.data));
  } , []);
  return (
    <>
      <div className="container">
        <div className="row d-flex align-items-center wrapper-of-all">
          <div className="col-sm-12 col-md-6 wrapper-of-picture">
          <i className="fa-solid fa-gear fa-xl gear1 fa-2xl"></i>
          <i className="fa-solid fa-gear fa-lg gear2"></i>
          <i className="fa-solid fa-gear fa-2xl gear3"></i>
        
            <img src={`./img/${slider.img}`} alt={slider.name} className="img-fluid" />
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="wrapper-of-slider d-flex flex-column align-items-center position-relative">
                <h4 className="text-grey mb-3">شروع دوره های تابستانی از 2  تیرماه</h4>
                <h6 className="mb-5">روی لینک زیر کلیک کنید و دوره خود را بیابید</h6>
                <button className="btn bg-red-dark btn-sm text-white w-25 custom-button-slider">کلیک کنید</button>
                <i className="fa-solid fa-bell fa-xl bell"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
