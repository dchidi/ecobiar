import { Link } from "react-router-dom";
import { LINKS } from "../../links/Links";
import style from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone, faAt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerLink}>
        <div>
          <h3>NAVIGATION MENU</h3>
          <div className={style.line}></div>
          <ul className={style.footerUl}>
            <li>
              <Link to={LINKS.HOME} className={style.menu}>
                Home
              </Link>
            </li>
            <li>
              <Link to={LINKS.PRODUCTS} className={style.menu}>
                Products
              </Link>
            </li>
            <li>
              <Link to={LINKS.HOME_COMPOSTER} className={style.menu}>
                Home Composter
              </Link>
            </li>
            <li>
              <Link to={LINKS.COMMERCIAL_COMPOSTER} className={style.menu}>
                Commercial Composter
              </Link>
            </li>
            {/* <li>
              <Link to={LINKS.NEWS} className={style.menu}>
                News
              </Link>
            </li> */}
            <li>
              <Link to={LINKS.ABOUT} className={style.menu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to={LINKS.CONTACT} className={style.menu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.productCategories}>
          <h3>PRODUCT CATEGORIES</h3>
          <div className={style.line}></div>
          <ul className={style.footerUl}>
            <li>
              <Link to={LINKS.ORGANIC_WASTE_SHREDDER} className={style.menu}>
                Organic Waste Shredder
              </Link>
            </li>
            <li>
              <Link to={LINKS.OIL_WATER_SEPARATOR} className={style.menu}>
                Oil Water Separator
              </Link>
            </li>
            <li>
              <Link to={LINKS.FOOD_WASTE_COMPOSTING} className={style.menu}>
                Food Waste Composting
              </Link>
            </li>
            <li>
              <Link to={LINKS.SHREDDER_DEHYDRATOR} className={style.menu}>
                Shredder & Dehydrator
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.contact}>
          <h3>CONTACT US</h3>
          <div className={style.line}></div>
          <div className={style.address}>
            <FontAwesomeIcon icon={faHome} />
            <p>21F Grace Park Grove, Drumcondra, Dublin, Ireland</p>
          </div>
          <div className={style.phone}>
            <FontAwesomeIcon icon={faPhone} />
            <p>+353899516678</p>
          </div>
          <div className={style.email}>
            <FontAwesomeIcon icon={faAt} />
            <p>info@ecobiar.com</p>
          </div>
        </div>
      </div>
      <div className={style.copyright}>
        Copyright 2022 &copy; www.ecobia.com
      </div>
    </div>
  );
};

export default Footer;
