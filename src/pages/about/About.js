import Footer from "../../components/layout/Footer";
import { MoreButton } from "../../components/widgets/button/Buttons";
import Menu from "../../components/widgets/menu/Menu";
import style from "./About.module.css";
const About = (props) => {
  return (
    <>
      <Menu />

      <div className={style.top}></div>
      <img
        src="https://togohb.com/wp-content/uploads/2022/11/Banner-01.jpg"
        alt="company offices"
        className={style.img}
      />
      <div className={`${style.row} ${style.aboutCenter}`}>
        <div className={style.col8}>
          <p className={style.p}>
            ECOBIA founded in 2008, focuses on the service for organic refuse
            harmless and recycling process equipment for kitchen waste, food
            waste, fruit and vegetable, and so on. ECOBIA has since grown into a
            worldwide company has completed projects around the world. With a
            focus on continual improvement of products, management, and service,
            ECOBIA completes manufacturing in a state-of-the-art facility in
            conformity with international standards.{" "}
          </p>
          <p className={`${style.p} ${style.mt1}`}>
            All of our products are produced with a strong emphasis on
            simplistic design and ease of installation while aiming to minimize
            the environmental impact of all products and operations. With an
            in-house design team, ECOBIA invests strongly in product
            improvements and new developments based heavily on feedback from the
            diverse customer.
          </p>
        </div>
        <img
          src="https://togohb.com/wp-content/uploads/2022/11/Banner-01.jpg"
          alt="company offices small"
          className={`${style.col4} ${style.img2} ${style.hide}`}
        />
      </div>
      <div className={style.slogan}>
        <h2>NO MORE FOOD WASTE IN LANDFILL</h2>
        <p>Let's stop our future from going to waste.</p>
        <div className={style.moreBtn}>
          <MoreButton
            url=""
            text="CLICK HERE"
            btn_style="outlineWhite"
            className={`${style.justifyContentCenter}`}
          />
        </div>
      </div>
      <div className={style.aboutCenter}>
        <p className={style.p}>
          ECOBIA Environment Equipment Co., Ltd. was established with the aim to
          conserve and improve the eco-green system environment and overall
          well-being. Our team is always committed to discovering, develop and
          produce a wide range of products that focus on the development of
          waste-to-fertilizer technology. We specialize in providing complete
          solutions in composting wet food waste from 1 to 300 metric tons per
          day using our fully automatic Organic Waste Converters.
        </p>
        <p className={`${style.p} ${style.mt1}`}>
          ECOBIA is committed to helping the globe achieve zero food waste by
          providing composting solutions for all kinds of businesses and homes.
          Our goal is to help ‘close the loop’ of sustainability, allowing the
          food waste that comes from the farms to go back to the farms as
          fertilizer for future food. Our composters also offer a range of
          complementary services that will further help your business achieve
          its sustainability goals.
        </p>
        <p className={`${style.p} ${style.mt1}`}>
          We are proud to be the leading provider of smart, sustainable, and
          affordable solutions for businesses seeking to mitigate their
          environmental impact. ECOBIA will give your business a boost into the
          circular economy, where both the planet and your profit margin can
          benefit from the application of innovative environmental technology.
        </p>

        <h2 className={style.title}>Trusted around the world</h2>
        <p className={`${style.p} ${style.mt1}`}>
          ECOBIA works with some of the world’s leading brands to implement a
          zero-waste solution in their operations. Our clients are able to
          minimize their waste to landfills, reduce their greenhouse gas
          emissions and thus reduce their overall environmental footprint.
        </p>
        <h2 className={style.title1}>Our Strength & Values</h2>
        <div></div>
      </div>
      {/* slider */}

      <div className={style.aboutCenter}>
        <h2 className={style.title1}>READY TO START COMPOSTING?</h2>
        <p className={`${style.p} ${style.center}`}>
          Contact TOGO team today, and start composting. We’ll help you find the
          perfect compost system for your site.
        </p>
        <div className={style.moreBtn}>
          <MoreButton
            url=""
            text="LEARN MORE"
            btn_style="btn"
            className={`${style.justifyContentCenter}`}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
