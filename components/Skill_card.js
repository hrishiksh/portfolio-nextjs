import style from "../styles/components/Skill_card.module.scss";

const SkillCard = (props) => {
  return (
    <div
      className={style.skillCard}
      data-aos="fade"
      data-aos-duration="1000"
      data-aos-delay="500"
    >
      <svg className={style.svgicon}>
        <use xlinkHref={props.icon}></use>
      </svg>
      <p className={style.title}>{props.title}</p>
    </div>
  );
};

export default SkillCard;
