import styles from "../styles/components/White_btn.module.scss";

const WhiteBtn = (props) => {
  return (
    <button
      className={styles.WhiteBtn}
      data-aos="flip-right"
      data-aos-duration="1000"
    >
      {props.children}
    </button>
  );
};

export default WhiteBtn;
