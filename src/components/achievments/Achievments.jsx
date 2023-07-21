import React, { useEffect, useState } from "react";
import TemplateOfAchievement from "./TemplateOfAchievement";
import axios from "axios";
export default function Achievments() {
  let [information, setInformation] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/achievments")
      .then((response) => setInformation(response.data));
  }, []);
  const arrayInformaiton =
    information.length &&
    information.map((item) => {
      return (
        <TemplateOfAchievement
          title={item.title}
          count={item.count}
          classOfFontAwesome={item.classOfFontAwesome}
          key={item.id}
        />
      );
    });
  return (
    <>
      <div className="blue-lighter-than-dark">
        <div className="container">
          <div className="row">{arrayInformaiton}</div>
        </div>
      </div>
    </>
  );
}
