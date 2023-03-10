import React from "react";
import HomePage from "./home/Index";
import style from "./Controller.module.css";
import Household from "./composters/Household";
import Commercial from "./composters/Commercial";
import ContactPage from "./contact/ContactPage";
import About from "./about/About";

const Controller = (props) => {
  const page = {
    home: <HomePage />,
    composter_household: <Household />,
    composter_commercial: <Commercial />,
    contact: <ContactPage />,
    about: <About />,
    page_not_found: "page not found",
  };

  return <div>{page[props.page]}</div>;
};

export default Controller;
