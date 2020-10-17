import Head from "next/head";
import Primary_btn from "../components/Primary_btn";
import SkillCard from "../components/Skill_card";
import ProjectCard from "../components/Project_card";
import WhiteBtn from "../components/White_btn";
import styles from "../styles/page/Home.module.scss";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Hrishikesh Pathak</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <header>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <a href="#skill">Skills</a>
            </li>
            <li className={styles.nav__item}>Project</li>
            <li className={styles.nav__item}>Open Source</li>
            <Primary_btn>Contact</Primary_btn>
          </ul>
        </nav>
      </header>

      {/* main section starts here. it contains HomePage body */}

      <main className={styles.main}>
        <section className={styles.main__hero}>
          <div className={styles.main__textbox}>
            <h1 className={styles.main__textbox__text}>
              I AM{" "}
              <span className={styles.main__textbox__bold}>
                Hrishikesh Pathak
              </span>
            </h1>
            <h2 className={styles.main__textbox__text}>
              Web and app developer
            </h2>
          </div>
          <div className={styles.main__imgbox}>
            <img
              className={styles.main__imgbox__img}
              src="/profile_img.jpg"
              alt="Image of Hrishikesh Pathak"
            />
          </div>
          <div className={styles.main__iconbox}>
            <svg className={styles.main__iconbox__icon}>
              <use xlinkHref="/sprite.svg#icon-github"></use>
            </svg>
            <svg className={styles.main__iconbox__icon}>
              <use xlinkHref="/sprite.svg#icon-linkedin"></use>
            </svg>
            <svg className={styles.main__iconbox__icon}>
              <use xlinkHref="/sprite.svg#icon-twitter"></use>
            </svg>
          </div>
        </section>

        {/* this is skill section */}

        <section className={styles.main__skills} id="skill">
          <h2 className={styles.main__skills__title}>Technology & Skills</h2>
          <h3 className={styles.main__skills__subtitle}>
            Confidence without skill is just emptiness
          </h3>
          <div className={styles.main__skills__box}>
            <SkillCard icon="/sprite.svg#icon-flutter" title="Flutter" />
            <SkillCard icon="/sprite.svg#icon-react" title="React" />
            <SkillCard icon="/sprite.svg#icon-node-dot-js" title="Nodejs" />
            <SkillCard icon="/sprite.svg#icon-mongodb" title="MongoDb" />
            <SkillCard icon="/sprite.svg#icon-docker" title="Docker" />
          </div>
        </section>

        {/* This is Project section. it contain all the projects*/}

        <section className={styles.main__projects}>
          <h2 className={styles.main__projects__title}>Projects</h2>
          <h3 className={styles.main__projects__subtitle}>
            Checkout my noteworthy projects
          </h3>
          <div className={styles.main__projects__items}>
            <ProjectCard
              img="/rideapp.jpg"
              alt="rideapp is one of my project"
              title="RideApp"
              subtitle="App that can measure your travel distance and speed and give insights"
            />
            <ProjectCard
              img="/rideapp.jpg"
              alt="rideapp is one of my project"
              title="Expentic"
              subtitle="A cross platform app that revolutionize persional finance"
            />
          </div>
        </section>

        {/* This will be contact section */}

        <section className={styles.main__contact}>
          <h2 className={styles.main__contact__title}>Contact</h2>
          <h3 className={styles.main__contact__subtitle}>
            For quick connect, Drop a mail
          </h3>
          <div className={styles.main__contact__socialbox}>
            <svg className={styles.main__contact__socialbox__icon}>
              <use xlinkHref="/sprite.svg#icon-github"></use>
            </svg>
            <svg className={styles.main__contact__socialbox__icon}>
              <use xlinkHref="/sprite.svg#icon-linkedin"></use>
            </svg>
            <svg className={styles.main__contact__socialbox__icon}>
              <use xlinkHref="/sprite.svg#icon-twitter"></use>
            </svg>
          </div>
          <div className={styles.main__contact__or}>
            <p className={styles.main__contact__or__text}>or</p>
          </div>
          <div className={styles.main__contact__cta}>
            <WhiteBtn>Drop a Mail</WhiteBtn>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;