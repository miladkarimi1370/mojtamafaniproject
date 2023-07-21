import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="bg-blue-dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 d-flex align-items-center">
              <p className="text-white font-tiny custom-style">
                <i className="fa-solid fa-location-dot px-3"></i>
                آدرس : تهران خیابان ولیعصر نرسیده به میدان فاطمی پلاک 346
                ساختمان مینیاتور
                <span dir="ltr" className="px-3">
                  021-22540934
                </span>
                <i className="fa-solid fa-phone"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-light">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-10">
              <ul className="nav">
                <li className="nav-item">
                  <Link className="nav-link text-white" to={"/"}>
                  <i className="fa-solid fa-house px-2"></i>
                    خانه
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to={"/courses"}>
                  <i className="fa-solid fa-graduation-cap px-2"></i>
                    دوره های آموزشی
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to={"/languages"}>
                  <i className="fa-solid fa-globe px-2"></i>
                    زبان ها
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to={"/teachers"}>
                  <i className="fa-solid fa-person-chalkboard px-2"></i>
                    اساتید
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to={"/aboutus"}>
                  <i className="fa-solid fa-school px-2"></i>
                    درباره ما
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to={"/contactus"}>
                  <i className="fa-solid fa-location-dot px-2"></i>
                    ارتباط با ما
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-2">
              <button className="btn btn-dark btn-sm custom-button">ورود / ثبت نام</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
