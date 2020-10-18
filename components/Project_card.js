import styles from "../styles/components/Project_card.module.scss";

const ProjectCard = (props) => {
  return (
    <div
      className={styles.projectCard}
      data-aos="fade"
      data-aos-duration="1000"
      data-aos-delay="500"
    >
      <img src={props.img} alt={props.alt} className={styles.projectImage} />
      <div className={styles.bottomBox}>
        <h4 className={styles.bottomBox__title}>{props.title}</h4>
        <p className={styles.bottomBox__subtitle}>{props.subtitle}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
