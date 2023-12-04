/* eslint-disable camelcase */
/* eslint-disable no-case-declarations */
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import userSelector, { courseSelector } from "../../store/selectors/selectors";
import {
  addCoursesBody_flex,
  addCoursesDance_fitness,
  addCoursesStep_aerobics,
  addCoursesStretching,
  addCoursesYoga,
  getProgress,
  getUser,
} from "../../api/api";
import { userCoursesUpdate } from "../../store/reducers/mainReducers";
import EnterButton from "../../components/EnterButton/EnterButton";
import DropArrow from "../../components/DropArrow/DropArrow";
import S from "./Description.module.css";

function Description() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const course = useSelector(courseSelector);
  const logout = useSelector((state) => state.rootReducer.mainState.logout);
  const user = useSelector(userSelector);
  const [singUpCheck, setSingUpCheck] = useState(false);
  const [coursesCheck, setCoursesCheck] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const exit = () => {
    setSingUpCheck((prev) => !prev);
  };

  const signUp = async () => {
    if (!logout) navigate("/login");

    switch (course.name) {
      case "Йога":
        if (user.courses.yoga) {
          setCoursesCheck((prev) => !prev);
          setDisabled((prev) => !prev);
          return;
        }
        await addCoursesYoga({
          login: user.login,
          yoga: await getProgress("yoga"),
        });
        break;
      case "Стретчинг":
        if (user.courses.stretching) {
          setCoursesCheck((prev) => !prev);
          setDisabled((prev) => !prev);
          return;
        }
        await addCoursesStretching({
          login: user.login,
          stretching: await getProgress("stretching"),
        });
        break;
      case "Танцевальный фитнес":
        if (user.courses.dance_fitness) {
          setCoursesCheck((prev) => !prev);
          setDisabled((prev) => !prev);
          return;
        }
        await addCoursesDance_fitness({
          login: user.login,
          dance_fitness: await getProgress("dance_fitness"),
        });
        break;
      case "Степ-аэробика":
        if (user.courses.step_aerobics) {
          setCoursesCheck((prev) => !prev);
          setDisabled((prev) => !prev);
          return;
        }
        await addCoursesStep_aerobics({
          login: user.login,
          step_aerobics: await getProgress("step_aerobics"),
        });
        break;
      case "Бодифлекс":
        if (user.courses.body_flex) {
          setCoursesCheck((prev) => !prev);
          setDisabled((prev) => !prev);
          return;
        }
        await addCoursesBody_flex({
          login: user.login,
          body_flex: await getProgress("body_flex"),
        });
        break;
      default:
        break;
    }
    const newDataUser = await getUser(user.login);
    dispatch(userCoursesUpdate(newDataUser.courses));
    setSingUpCheck((prev) => !prev);
  };

  return (
    <div className={S.descriptionContent}>
      {!singUpCheck ? " " : <div className={S.cover} />}
      <header className={S.header}>
        <Link to="/" className={S.header__logo} />
        {!logout ? <EnterButton /> : <DropArrow />}
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
            <button className={S.exit__button} onClick={exit} type="button">
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
        <button
          disabled={disabled}
          onClick={signUp}
          type="button"
          className={S.footer__button}
        >
          {coursesCheck
            ? "Вы уже записаны на этот курс"
            : "Записаться на тренировку"}
        </button>
      </footer>
    </div>
  );
}

export default Description;
