import { MoreButton } from "../widgets/button/Buttons";
import style from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={style.formGroup}>
        <div className={style.label}>Name</div>
        <input type="text" className={style.inputValue} />
      </div>
      <div className={style.formGroup}>
        <div className={style.label}>Email</div>
        <input type="text" className={style.inputValue} />
      </div>
      <div className={style.formGroup}>
        <div className={style.label}>Phone</div>
        <input type="text" className={style.inputValue} />
      </div>
      <div className={style.formGroup}>
        <div className={style.label}>Message</div>
        <textarea rows="12" className={style.textArea} />
      </div>
      <div className={style.formGroup}>
        <MoreButton url="" btn_style="btn" text="SUBMIT" />
      </div>
    </div>
  );
};
export default Contact;
