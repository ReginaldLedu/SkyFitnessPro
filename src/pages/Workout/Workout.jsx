import { useDispatch, useSelector } from "react-redux";
import {
  submitProgress,
  backToInitial,
} from "../../store/reducers/myProgressReducer";
import styles from "./Workout.module.css";
import MyProgress from "../../components/Workout progress/myProgress";

function Workout() {
  const dispatch = useDispatch();
  const completeProgressSwitcher = useSelector(
    (state) => state.myProgressToolkit.initialState,
  );

  const writeMyProgress = () => {
    if (completeProgressSwitcher === false) {
      dispatch(submitProgress());
    } else {
      dispatch(backToInitial());
    }
  };

  return (
    <>
      {completeProgressSwitcher === false ? (
        " "
      ) : (
        <div className={styles.cover} />
      )}
      <header>
        <div className={styles.header__wrapper}>
          <div className={styles.header__logo}>
            <img src="logo.png" alt="logo_image" className={styles.logo} />
          </div>
          <div className={styles.header__name}>
            <div className={styles.name__img} />
            <p className={styles.name__text}>Сергей</p>
          </div>
        </div>
      </header>
      <main className={styles.workout__auth}>
        <h1 className={styles["workout-authorized__title"]}>Йога</h1>
        <h2 className={styles["workout-authorized__path"]}>
          Красота и здоровье / Йога на каждый день / 2 день
        </h2>
        <div className={styles["workout-authorized__video"]}>
          <iframe
            width="1160"
            height="639"
            src="https://www.youtube.com/embed/WxFz-4YsiEE?si=QU82bMEoBf2TGEN-"
            title="video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
        {completeProgressSwitcher === false ? " " : <MyProgress />}
        <section className={styles["workout-authorized__info"]}>
          <div className={styles["workout-authorized__exercises"]}>
            <h3 className={styles["workout-authorized__exercises-title"]}>
              Упражнения
            </h3>
            <ul className={styles["workout-authorized__list"]}>
              <li className={styles.exercises__item}>
                Наклон вперед (10 повторений)
              </li>
              <li className={styles.exercises__item}>
                Наклон назад (10 повторений)
              </li>
              <li className={styles.exercises__item}>
                Поднятие ног, согнутых в коленях <br />
                (5 повторений)
              </li>
            </ul>
            <button
              onClick={writeMyProgress}
              type="button"
              className={styles["workout-authorized__check"]}
            >
              Заполнить свой прогресс
            </button>
          </div>
          <div className={styles["workout-authorized__progress"]}>
            <div className={styles.progress__wrapper}>
              <h3 className={styles.progress__title}>
                Мой прогресс по тренировке 2:
              </h3>
              <div className={styles.progress__item}>
                <p className={styles.progress__text}>Наклоны вперед</p>
                <div className={styles.progress__scale}>
                  <div className={styles.progress__scale_inner} />
                </div>
              </div>
              <div className={styles.progress__item}>
                <p className={styles.progress__text}>Наклоны назад</p>
                <div className={styles.progress__scale} />
              </div>
              <div className={styles.progress__item}>
                <p className={styles.progress__text}>
                  Поднятие ног, <br />
                  согнутых в коленях
                </p>
                <div className={styles.progress__scale} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Workout;
