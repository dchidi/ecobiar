import style from "./Product.module.css";

const Product = () => {
  return (
    <>
      <div className={style.product}>
        <img
          src="https://togohb.com/wp-content/uploads/2021/08/TG-CC-5-2-3.jpg"
          className={style.productImg}
        />
        <div>
          <h2 className={style.title}>TG-CC-5</h2>
          <ul className={style.productUl}>
            <li>5 kg/day</li>
            <li>10 lbs/day</li>
            <li>2 tons/year</li>
          </ul>
        </div>
        <div>
          <h2 className={style.pt2}>INDUSTRY APPLICATIONS</h2>
          <ul className={style.productUl}>
            <li>Offices</li>
            <li>Kitchen</li>
            <li>Househod</li>
            <li>Small Scale Apartment Buildings</li>
          </ul>
        </div>
      </div>
      <div className={style.product}>
        <img
          src="https://togohb.com/wp-content/uploads/2021/08/TG-CC-10-9-2.jpg"
          className={style.productImg}
        />
        <div>
          <h2 className={style.title}>TG-CC-10</h2>
          <ul className={style.productUl}>
            <li>10-20 kg/day</li>
            <li>20-40 lbs/day</li>
            <li>4-8 tons/year</li>
          </ul>
        </div>
        <div>
          <h2 className={style.pt2}>INDUSTRY APPLICATIONS</h2>
          <ul className={style.productUl}>
            <li>Offices</li>
            <li>Kitchen</li>
            <li>Househod</li>
            <li>Small Scale Apartment Buildings</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Product;
