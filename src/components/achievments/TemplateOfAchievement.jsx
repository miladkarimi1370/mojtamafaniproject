import React from "react";

export default function TemplateOfAchievement({
  title,
  count,
  classOfFontAwesome,
}) {
  return (
    <>
      <div className="col-sm-12 col-md-4">
        <div className="wrapper-of-achievments p-5 d-flex flex-column justify-content-center align-items-center">
          <i
            class={`fa-solid ${classOfFontAwesome} fa-2xl text-white mb-5`}
          ></i>
          <div className="text-white font-very-big mb-1">
            {count - 10 + "+"}
          </div>
          <div className="text-white font-title">{title}</div>
        </div>
      </div>
    </>
  );
}
