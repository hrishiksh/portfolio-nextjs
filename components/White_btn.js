import styles from "../styles/components/White_btn.module.scss";

const WhiteBtn = (props) => {
  return <button className={styles.WhiteBtn}>{props.children}</button>;
};

export default WhiteBtn;
