import React from "react";

export default function Template({ img, title, price, booked }) {
  return (
    <>
      <div className="wrapper-of-product bg-white mb-5">
        <img src={`./img/${img}`} alt="" className="img-fluid" />
        <div className="wrapper-of-title px-4 py-2 d-flex justify-content-between mt-2">
          <h6 className="text-secondary font-text">آموزش کتاب : </h6>
          <h6 className="text-fantesy-color font-text">{title}</h6>
        </div>

        <div className="wrapper-of-price-and px-4 py-1 d-flex justify-content-between">
          <h6 className="text-secondary font-text">قیمت : </h6>
          <h6 className="text-fantesy-color font-text">{`${price} تومان`}</h6>
        </div>
        <div className="wrapper-of-bought d-flex px-4 py-1 justify-content-between">
          <h6 className="text-secondary font-text">خریداری شده :</h6>
          <h6 className="text-fantesy-color font-text">{booked}</h6>
        </div>
      </div>
    </>
  );
}
