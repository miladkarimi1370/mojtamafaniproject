import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styleProduction.css";
import Template from "./Template";

export default function Products() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/Products")
      .then((response) => setProducts(response.data));
  }, []);
  const porduction = products.length
    ? products.map((item) => {
        return (
          <div className="col-sm-12 col-md-4">
            <Template
              key={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
              booked={item.booked}
            />
          </div>
        );
      })
    : "";
  return (
    <>
      <div className="bg-grey">
        <div className="container">
          <div className="row mb-5">
            <div className="col-sm-12 col-md-12">
              <h6 className="text-grey mt-5">محصولات : </h6>
            </div>
          </div>
          <div className="row">{porduction}</div>
        </div>
      </div>
    </>
  );
}
