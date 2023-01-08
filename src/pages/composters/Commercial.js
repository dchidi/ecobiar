import Footer from "../../components/layout/Footer";
import { MoreButton } from "../../components/widgets/button/Buttons";
import Menu from "../../components/widgets/menu/Menu";
import Product from "../../components/product/Product";
import style from "./Commercial.module.css";
import Contact from "../../components/contact/Contact";

const Commercial = () => {
  return (
    <>
      <Menu />
      <div className={style.top}></div>
      <h3 className={style.title1}>ORGANIC WASTE COMPOSTING MACHINE</h3>
      <p className={`${style.p} ${style.textCenter}`}>
        ECOBIA provides intelligent organic food waste composting machine. Our
        automatic organic food waste composting equipment using microbial
        technology, reduces waste volumes by up to 90% in 24 hours, easily
        transforms your food waste into fertilizer, decreases disposal costs,
        and creates a nutrient-rich, reusable end product.
      </p>
      <div className={style.flexCenter}>
        <MoreButton url="" btn_style="btn" text="ENQUIRY HERE" />
      </div>
      {/* smallSlider */}
      <h3 className={style.title}>NO MORE FOOD WASTE IN LANDFILL</h3>
      <div className={style.flexCenter}>
        <div className={`${style.col4} ${style.textCenter} ${style.iconText}`}>
          <div className={style.flexCenter}>
            <img
              src="https://togohb.com/wp-content/uploads/2021/07/24-HOUR-COMPOST-150x150.png"
              alt="clock "
              className={style.imgIcon}
            />
          </div>
          24 HOUR COMPOST
        </div>
        <div className={`${style.col4} ${style.textCenter} ${style.iconText}`}>
          <div className={style.flexCenter}>
            <img
              src="https://togohb.com/wp-content/uploads/2021/07/REDUCE-LANDFILL-VOLUMES-150x150.png"
              alt="landfill "
              className={style.imgIcon}
            />
          </div>
          REDUCE LANDFILL VOLUMES
        </div>
        <div className={`${style.col4} ${style.textCenter} ${style.iconText}`}>
          <div className={style.flexCenter}>
            <img
              src="https://togohb.com/wp-content/uploads/2021/07/REDUCE-DISPOSAL-COSTS-150x150.png"
              alt="reduce disposal cost "
              className={style.imgIcon}
            />
          </div>
          REDUCE DISPOSAL COSTS
        </div>
      </div>
      <div className={style.flexCenter}>
        <div className={`${style.col4} ${style.textCenter} ${style.iconText}`}>
          <div className={style.flexCenter}>
            <img
              src="https://togohb.com/wp-content/uploads/2021/07/MINIMAL-150x150.png"
              alt="minimal odour "
              className={style.imgIcon}
            />
          </div>
          MINIMAL ODOUR
        </div>
        <div className={`${style.col4} ${style.textCenter} ${style.iconText}`}>
          <div className={style.flexCenter}>
            <img
              src="https://togohb.com/wp-content/uploads/2021/07/PEST-DETERRENT-150x150.png"
              alt="pest deterrent"
              className={style.imgIcon}
            />
          </div>
          PEST DETERRENT
        </div>
        <div className={`${style.col4} ${style.textCenter} ${style.iconText}`}>
          <div className={style.flexCenter}>
            <img
              src="https://togohb.com/wp-content/uploads/2021/07/ENVIRONMENTALLY-150x150.png"
              alt="Environmentally and socially responsible "
              className={style.imgIcon}
            />
          </div>
          ENVIRONMENTALLY & SOCIALLY RESPONSIBLE
        </div>
      </div>
      <div className={style.bgImg1}>
        <div className={style.flexCenter}>
          <div className={style.caption}>
            <h2 className={style.captionTitle}>Let's give back to nature.</h2>
            <p>
              Introducing organic waste converter machine - a waste management
              system that gives back to nature
            </p>
            <MoreButton url="" btn_style="outlineWhite" text="EXPLORE MORE" />
          </div>
        </div>
      </div>
      <p className={`${style.p} ${style.textCenter}`}>
        ECOBIA provides organic food waste composting solutions for a variety of
        commercial uses, from home to large-scale institutions. Utilizing
        microbial technology, our organic waste composting converter reduces
        waste volume by up to 90%. Our 24-Hours-Composters are fully automatic
        and compact in size, and process all types of Organic and Horticulture
        waste. Noiseless, Odorless, Maintenance-free, No harmful gases are let
        out and do not need a skilled person to operate it. The process is fully
        automatic and involves temperature-controlled processing of the waste.
        This organic waste fertilizer machine could be fed continuously.
      </p>
      <Product />
      <img
        src="https://togohb.com/wp-content/uploads/2022/04/composting-banner.jpg"
        alt="composting banner"
        className={style.img}
      />
      <h3 className={style.title}>
        LARGE CAPACITY ORGANIC FOOD WASTE DISPOSAL SYSTEM
      </h3>
      <p className={`${style.p} ${style.textCenter}`}>
        ECOBIA specializes in providing complete solutions in recycling food
        waste from 5kgs to 300 metric tons per day. Our organic food waste
        composting machine (kitchen, fruit, and vegetable waste) is an
        integrated system that combines pretreatment, biochemical treatment,
        residue oil and water separation and collection, three waste treatment,
        and other technologies to reduce organic waste and conduct harmless and
        resourceful treatment. The organic waste treatment equipment adopts
        fully automated, intelligent, and standardized operation processes.
      </p>
      <div className={style.flexCenter}>
        <img
          src="https://togohb.com/wp-content/uploads/2021/09/Organic-Food-Waste-Disposal-Solutions.png
      "
          alt="organic food wast solution"
          className={style.img2}
        />
      </div>
      <div className={style.p}>
        <p>
          ECOBIA has been engaged in offering a broad variety of food waste
          composting machines. Our offering range converters the organic waste
          added the machine into nitrogen-rich compost from vegetables by
          reducing its value at almost 90% of the original.
        </p>
        <p>
          We are offering you a complete choice of automatic organic food waste
          composter. We customize these solutions as per customer requirements.
          We cater to domestic as well as international customers.
        </p>
        <p>
          ECOBIA can design a cost-effective organic waste recycling machine for
          you according to various actual working conditions. After organic
          waste is collected and transported, moving into garbage sorting,
          crushing, and dehydration, and finally, organic fertilizer is
          produced. After the waste liquid is separated into residue oil and
          water, the waste oil collection can be sold for the Refinement of
          biodiesel, wastewater is discharged after physical and biochemical
          treatment.
        </p>
      </div>
      {/* video */}
      <div className={`${style.p} ${style.my2} ${style.mtXs5}`}>
        <h2>INFORMATION REQUEST </h2>
        <p>
          Please fill in the following form, we will respond to your request in
          24 hours.
        </p>
      </div>
      <div className={`${style.row} ${style.p} ${style.mb}`}>
        <div className={`${style.col6}`}>
          <Contact />
        </div>
        <img
          src="https://togohb.com/wp-content/uploads/2021/09/Organic-Waste-Disposal-Solutions-1.jpg"
          alt="make enquiry"
          className={`${style.contactImg} ${style.col6}`}
        />
      </div>
      <Footer />
    </>
  );
};

export default Commercial;
