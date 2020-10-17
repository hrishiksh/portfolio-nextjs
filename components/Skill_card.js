import style from "../styles/components/Skill_card.module.scss";

const SkillCard = (props) => {
  return (
    <div className={style.skillCard}>
      <svg className={style.svgicon}>
        <use xlinkHref={props.icon}></use>
      </svg>
      <p className={style.title}>{props.title}</p>
    </div>
  );
};

export default SkillCard;
