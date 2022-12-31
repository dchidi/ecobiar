import React from "react";
import HomePage from "./home/Index";
import style from "./Controller.module.css";
import Household from "./composters/Household";
import Commercial from "./composters/Commercial";

const Controller = (props) => {
  const page = {
    home: <HomePage />,
    composter_household: <Household />,
    composter_commercial: <Commercial />,
    page_not_found: "page not found",
  };

  return <div>{page[props.page]}</div>;
};

export default Controller;
