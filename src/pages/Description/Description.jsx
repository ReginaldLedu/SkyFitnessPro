import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import userSelector, { courseSelector } from "../../store/selectors/selectors";
import EnterButton from "../../components/EnterButton/EnterButton";
import S from "./Description.module.css";
import DropArrow from "../../components/DropArrow/DropArrow";

function Description() {
  const navigate = useNavigate();
  const course = useSelector(courseSelector);
  const user = useSelector(userSelector);
  const [singUpCheck, setSingUpCheck] = useState(false);

  const signUp = () => {
    if (!user.logout) navigate("/login");
    setSingUpCheck(!singUpCheck);
  };

  return (
    <div className={S.descriptionContent}>
      {!singUpCheck ? " " : <div className={S.cover} />}
      <header className={S.header}>
        <Link to="/" className={S.header__logo} />
        {!user.logout ? <EnterButton /> : <DropArrow />}
      </header>
      <div className={S.description}>
        <section className={S.description__logo}>
          <h1 className={S.description__title}>{course.name}</h1>
        </section>
        <section className={S.description__forYou}>
          <h2 className={S.description__header}>Подойдет для вас, если:</h2>
          <div className={S.description__elseBox}>
            <section className={S.description__else}>
              <h2 className={S.description__number}>1</h2>
              <p className={S.description__text}>{course.conditions[0]}</p>
            </section>
            <section className={S.description__else}>
              <h2 className={S.description__number}>2</h2>
              <p className={S.description__text}>{course.conditions[1]}</p>
            </section>
            <section className={S.description__else}>
              <h2 className={S.description__number}>3</h2>
              <p className={(S.description__text, S.description__textEnd)}>
                {course.conditions[2]}
              </p>
            </section>
          </div>
        </section>
        <section className={S.description__direction}>
          <h2 className={S.description__directionHeader}>Направления:</h2>
          <div className={S.description__directionBox}>
            <ul className={S.description__directionList}>
              {course.directions.map((direction) => (
                <li className={S.description__list}>{direction}</li>
              ))}
            </ul>
          </div>
        </section>
        <p className={S.description__course}>{course.description}</p>
        {course.sub_description ? (
          <div>
            <p className={S.description__course}>
              {course.sub_description.title}
            </p>
            <ul className={S.description__sub_directionList}>
              {course.sub_description.items.map((direction) => (
                <li className={S.description__list}>{direction}</li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
      {!singUpCheck ? (
        ""
      ) : (
        <div className={S.progress}>
          <div className={S.progress__box}>
            <h2 className={S.progress__title}>Вы успешно записались!</h2>
            <button className={S.exit__button} onClick={signUp} type="button">
              {}
            </button>
          </div>
        </div>
      )}
      <footer className={S.footer}>
        <p className={S.footer__text}>
          Оставьте заявку на пробное занятие, мы свяжемся <br />
          с вами, поможем с выбором направления и тренера, <br />с которым
          тренировки принесут здоровье и радость!
        </p>
        <button onClick={signUp} type="button" className={S.footer__button}>
          Записаться на тренировку
        </button>
      </footer>
    </div>
  );
}

export default Description;
