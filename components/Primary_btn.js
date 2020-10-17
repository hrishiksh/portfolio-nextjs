import styles from "../styles/components/Primary_btn.module.scss";

const primary_btn = (props) => {
  return <button className={styles.primary_btn}>{props.children}</button>;
};

export default primary_btn;
