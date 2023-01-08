import Contact from "../../components/contact/Contact";
import Footer from "../../components/layout/Footer";
import Menu from "../../components/widgets/menu/Menu";
import style from "./ContactPage.module.css";
const ContactPage = (props) => {
  return (
    <>
      <Menu />
      <div className={style.top}></div>
      <img
        src="https://togohb.com/wp-content/uploads/2021/11/Contact-TOGO-Banner-01.jpg"
        alt="composting banner"
        className={style.img}
      />
      <div className={`${style.row} ${style.p} ${style.mb}`}>
        <div className={`${style.col6} ${style.form}`}>
          <Contact />
        </div>
        <div className={`${style.map} ${style.col6}`}>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="100%"
                height="300px"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=21F%20Grace%20Park%20Grove,%20Drumcondra&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
          <p className={style.pmap}>Head Office Address: xxxx</p>
          <p className={style.pmap}>Factory Address: xxx</p>
          <p className={style.pmap}>Mobile/WhatsApp: +353 xxx Email: xxx</p>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ContactPage;
