import React, { useEffect, useState } from "react";
import { MoreButton } from "../button/Buttons";
import style from "./Slider.module.css";
const Slider = (props) => {
  const [position, setPosition] = useState(0);
  const SLIDER = [
    {
      title: "ORGANIC WASTE COMPOSTING",
      content:
        "Let's stop our future from going to waste. Create a zero organic waste future with ECOBIA today.",
      url: "",
      image:
        "https://www.twp.greene.franklin.pa.us/wp-content/uploads/2020/12/Mulch-Pile-2048x1170.jpg",
      contentPosition: "center",
    },
    {
      title: "Commercial Food Waste Composter",
      content:
        "Complete the circle of sustainability with our cutting-edge compost machines that can turn any organic waste into fertilizer in just 24 hours",
      url: "",
      image:
        "https://img.freepik.com/premium-photo/field-with-green-sprouts-young-corn-sunny-day-spring_157402-3275.jpg?w=2000",
      contentPosition: "left",
    },
    {
      title: "Save money while being Eco-Friendly",
      content:
        "ECOBIA provides sustainable organic waste management services to communities, industries, offices, and homes across 100+ countries",
      url: "",
      image:
        "https://cdn.shopify.com/s/files/1/0442/8929/4491/articles/grow-at-home-the-no-dig-method-of-gardening_1024x1024.jpg?v=1604321402",
      contentPosition: "right",
    },
  ];
  const move = (x) => {
    setPosition((prev) => {
      const newPosition = prev + x;
      return newPosition >= 0 && newPosition < SLIDER.length ? newPosition : 0;
    });
  };

  // Enable auto sliding of div for every x seconds
  useEffect(() => {
    const interval = setInterval(() => {
      move(1);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  const Items = () => {
    const { title, content, url, image, contentPosition } = SLIDER[position];
    return (
      <div className={style.slider}>
        <div className={style.sliderImage}>
          <img src={image} alt={title} />
          <div className={style.sliderImageBlur}></div>
        </div>
        <div className={`${style.content}`}>
          <a
            href="#"
            onClick={() => move(-1)}
            className={`${style.prev} ${style.hide}`}
          >
            &#8249;
          </a>
          <div className={`${style[contentPosition]} ${style.fadeIn}`}>
            <h2 className={style.title}>{title}</h2>
            <p className={style.subContent}>{content}</p>
            <MoreButton url={url} btn_style="outlineWhite" text="LEARN MORE" />
          </div>
          <a
            href="#"
            onClick={() => move(1)}
            className={`${style.next} ${style.hide}`}
          >
            &#8250;
          </a>
        </div>
      </div>
    );
  };

  return <Items />;
};

export default Slider;
