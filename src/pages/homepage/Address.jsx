import React from "react";

export default function Address() {
  return (
    <>
      <div className="bg-grey2">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 text-white my-4">
              <p>با ما در ارتباط باشید</p>
              <h6>تلفن های مجموعه : </h6>
              <h6
                dir="ltr"
                style={{ textAlign: "right" }}
                className="font-text"
              >
                021 - 44667892
              </h6>
              <h6
                dir="ltr"
                style={{ textAlign: "right" }}
                className="font-text"
              >
                021 - 44762323
              </h6>
            </div>
            <div className="col-sm-12 col-md-4 my-4 d-flex flex-column justify-content-center align-items-center">
              <div className="wrapper-of-channel-address p-2">
                <h6 className="text-white text-center mb-0 font-text">
                  آدرس کانال تلگرام{" "}
                </h6>
                <a href="#" className="text-warning">
                  @daneshpajohan/t.me
                </a>
              </div>
              <div className="wrapper-of-supporter p-2">
                <h6 className="text-white text-center mb-0 font-text">
                  آدرس کانال تلگرام - پشتیبانی
                </h6>
                <a href="#" className="text-warning">
                  @poshtibanidaneshpajohan/t.me
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 my-4 d-flex flex-column justify-content-center align-items-center">
              <div className="wrapper-of-channel-address p-2">
                <h6 className="text-white text-center mb-0 font-text">
                  آدرس صفحه ما در اینستاگرام{" "}
                </h6>
                <a href="#" className="text-warning">
                  https://www.instagram.com/iamcardib/?hl=en
                </a>
              </div>
              <div className="wrapper-of-supporter p-2">
                <h6 className="text-white text-center mb-0 font-text">
                  آدرس ما در شبکه اجتماعی ایتا
                </h6>
                <a href="#" className="text-warning">
                  https://www.instagram.com/iamcardib/?hl=en
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
