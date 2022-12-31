import { MoreButton } from "../button/Buttons";
import style from "./Card.module.css";

const Card = (props) => {
  const { img, text, url, title } = props;
  return (
    <div className={style.card}>
      <img src={`${img}`} alt="Image holder" className={style.cardImg} />
      <h2 className={style.title}>{title}</h2>
      <p className={style.text}>{text}</p>
      <MoreButton text="Details ++" url={url} btn_style="outline" />
    </div>
  );
};

export default Card;
