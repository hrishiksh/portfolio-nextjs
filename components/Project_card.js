import styles from "../styles/components/Project_card.module.scss";

const ProjectCard = (props) => {
  return (
    <div className={styles.projectCard}>
      <img src={props.img} alt={props.alt} className={styles.projectImage} />
      <div className={styles.bottomBox}>
        <h4 className={styles.bottomBox__title}>{props.title}</h4>
        <p className={styles.bottomBox__subtitle}>{props.subtitle}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
