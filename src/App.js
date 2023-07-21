import React from "react";
import "./Style/Style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Courses from "./pages/courses/Courses";
import Languages from "./pages/languages/Languages";
import Teachers from "./pages/teachers/Teachers";
import AboutUs from "./pages/aboutus/AboutUs";
import ContactUs from "./pages/contactus/ContactUs";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="languages" element={<Languages />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
