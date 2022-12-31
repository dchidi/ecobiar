import { Link } from "react-router-dom";
import style from "./Buttons.module.css";
export const MoreButton = (props) => {
  const { url, btn_style, text } = props;
  // console.log(style[btn_style]);
  return (
    <Link className={style[btn_style]} to={url}>
      {text}
    </Link>
  );
};
