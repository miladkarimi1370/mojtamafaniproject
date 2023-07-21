import React from "react";
import "./style.css";
import Header from "../../components/header/Header";
import Slider from "./Slider";
import Languages from "./Languages";
import Products from "../../components/products/Products";
import Achievments from "../../components/achievments/Achievments";

import GoToOnlineCourse from "./GoToOnlineCourse";
import CastOfAcademy from "../../components/castOFAcademy/CastOfAcademy";
import Address from "./Address";
import Footer from "../../components/footer/Footer";
import ArrowUpButton from "../../components/arrowUpButton/ArrowUpButton";
import SupportTeam from "../../components/supportTeam/SupportTeam";

export default function HomePage() {
  return (
    <>
      <Header />
      <Slider />
      <Languages />
      <Products />
      <Achievments />
      <GoToOnlineCourse />
      <CastOfAcademy />
      <Address />
      <Footer />
      <ArrowUpButton />
      <SupportTeam />
    </>
  );
}
