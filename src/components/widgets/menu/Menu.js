import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Menu.module.css";

const Menu = () => {
  const [clsMenuChanged, setClsMenuChanged] = useState("");
  const changeMenu = () => {
    setClsMenuChanged((prev) => {
      return prev === "hide" ? "" : "hide";
    });
  };
  const MobileMenu = () => {
    return (
      <div onClick={changeMenu} id="menu">
        <div className={style.bar1}></div>
        <div className={style.bar2}></div>
        <div className={style.bar3}></div>
      </div>
    );
  };

  return (
    <div className={style.nav}>
      {/* <img src="" alt="logo image" /> */}
      <h1>ECOBIA</h1>
      <div href="#" className={`${style[clsMenuChanged]} ${style.mobileMenu}`}>
        <MobileMenu />
      </div>
      <ul className={`${style.menu} ${style[clsMenuChanged]}`}>
        <li className={style.menuItem}>
          <Link to="/home" className={style.item}>
            Home
          </Link>
        </li>
        <li className={style.menuItem}>
          <Link to="" className={style.item}>
            Products
          </Link>
          <ul className={style.subMenu}>
            <li className={style.menuItem}>
              <Link to="" className={style.item}>
                Food waste composting
              </Link>
            </li>
            <li className={style.menuItem}>
              <Link to="" className={style.item}>
                {" "}
                waste disposal solution
              </Link>
            </li>
          </ul>
        </li>
        <li className={style.menuItem}>
          {/* to ="/composter_household" */}
          <Link to="" className={style.item}>
            Home Composter
          </Link>
        </li>
        <li className={style.menuItem}>
          <Link to="/composter_commercial" className={style.item}>
            Commercial Composter
          </Link>
        </li>
        <li className={style.menuItem}>
          <Link to="" className={style.item}>
            About Us
          </Link>
        </li>
        <li className={style.menuItem}>
          <Link to="" className={style.item}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
