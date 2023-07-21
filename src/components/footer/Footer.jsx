import React from "react";
import "./styleoffooter.css";
export default function Footer() {
  return (
    <>
      <div>
        <div className="container my-5">
          <div className="row">
            <div className="col-sm-12 col-md-4 d-flex flex-column justify-content-center align-items-around">
              <h6 className="font-text">درباره ما </h6>
              <p className="text-grey text-justify custom-p">
                آموزشگاه زبان دانش پژوهان با کسب افتخارات فراوانی در عرصه آموزش
                بیش از 12 زبان خارجی یکی از معتبر ترین مراکز آموزش زبان های
                خارجی محسوب میشود. موسسه زبان ایران کمبریج با بکارگیری از
                مشاورین با تجربه این امکان را به مراجعین و زبان آموزان خود میدهد
                که از درست ترین تصمیم و مشاوره بهره مند شوند. مشاورین موسسه زبان
                ایران کمبریج این امکان را برای زبان آموزان فراهم میسازند تا در
                انتخاب نوع دوره و حتی نوع زبان و پروسه های مهاجرت خود , همواره
                برترین تصمیمات را اتخاذ نمایند.
              </p>
            </div>
            <div className="col-sm-12 col-md-4">
              <h5 className="font-text">اخبار و رویدادها</h5>
              <ul className="list-group">
                <li className="list-group-item border-0 border-bottom font-title text-grey custom-link">
                  چگونه در صحبت از لغات سخت استفاده کنیم ؟
                </li>
                <li className="list-group-item border-0 border-bottom font-title text-grey custom-link">
                  چگونه انگلیسی را روان صحبت کنیم ؟
                </li>
                <li className="list-group-item border-0 border-bottom font-title text-grey custom-link">
                  دوره های تخصصی زبان انگلیسی | دوره های تخصصی
                </li>
                <li className="list-group-item border-0 border-bottom font-title text-grey custom-link">
                  عبارات کاربردی زبان اسپانیایی
                </li>
                <li className="list-group-item border-0 border-bottom font-title text-grey custom-link">
                  کارگاه ریدینگ آیلتس | Reading IELTS
                </li>
                <li className="list-group-item border-0 border-bottom font-title text-grey custom-link">
                  مدرسه زبان روسی در تهران | کالچ تخصصی زبان روسی{" "}
                </li>
                <li className="list-group-item border-0 border-bottom font-title text-grey custom-link">
                  کتاب آموزش زبان فرانسه در 24 ساعت
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="جستجو . . . "
                  id="inputsearch"
                />
              </div>
              <div className="wrapper-of-location">
                <h6 className="font-text">آدرس ما : </h6>
                <p className="text-grey">
                  تهران - خیابان ولیعصر نرسیده به میدان فاطمی پلاک 346 ساختمان
                  مینیاتور{" "}
                </p>
                <h6 className="font-text"> تلفن : </h6>
                <p className="text-grey" dir="ltr">
                  021 - 22540934
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-dark">
        <p className="text-white text-center mb-0 py-3 font-tiny">
          تمامی حقوق مادی و معنوی این وبسایت متعلق به آموزشگاه دانش پژوهان می
          باشد{" "}
        </p>
      </div>
    </>
  );
}
