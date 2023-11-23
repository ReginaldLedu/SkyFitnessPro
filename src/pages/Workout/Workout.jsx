import { useSelector, useDispatch } from "react-redux";
import {
  submitProgress,
  backToInitial,
} from "../../store/reducers/mainReducers";
import MyProgress from "../../components/Workout progress/myProgress";
import S from "./Workout.module.css";

function Workout() {
  const dispatch = useDispatch();
  const completeProgressSwitcher = useSelector(
    (state) => state.rootReducer.mainState.initialState,
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
      {completeProgressSwitcher === false ? " " : <div className={S.cover} />}
      <header>
        <div className={S.header__wrapper}>
          <div className={S.header__logo}>
            <img src="logo.png" alt="logo_image" className={S.logo} />
          </div>
          <div className={S.header__name}>
            <div className={S.name__img} />
            <p className={S.name__text}>Сергей</p>
          </div>
        </div>
      </header>
      <main className={S.workout__auth}>
        <h1 className={S["workout-authorized__title"]}>Йога</h1>
        <h2 className={S["workout-authorized__path"]}>
          Красота и здоровье / Йога на каждый день / 2 день
        </h2>
        <div className={S["workout-authorized__video"]}>
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
        <section className={S["workout-authorized__info"]}>
          <div className={S["workout-authorized__exercises"]}>
            <h3 className={S["workout-authorized__exercises-title"]}>
              Упражнения
            </h3>
            <ul className={S["workout-authorized__list"]}>
              <li className={S.exercises__item}>
                Наклон вперед (10 повторений)
              </li>
              <li className={S.exercises__item}>
                Наклон назад (10 повторений)
              </li>
              <li className={S.exercises__item}>
                Поднятие ног, согнутых в коленях <br />
                (5 повторений)
              </li>
            </ul>
            <button
              onClick={writeMyProgress}
              type="button"
              className={S["workout-authorized__check"]}
            >
              Заполнить свой прогресс
            </button>
          </div>
          <div className={S["workout-authorized__progress"]}>
            <div className={S.progress__wrapper}>
              <h3 className={S.progress__title}>
                Мой прогресс по тренировке 2:
              </h3>
              <div className={S.progress__item}>
                <p className={S.progress__text}>Наклоны вперед</p>
                <div className={S.progress__scale}>
                  <div className={S.progress__scale_inner} />
                </div>
              </div>
              <div className={S.progress__item}>
                <p className={S.progress__text}>Наклоны назад</p>
                <div className={S.progress__scale} />
              </div>
              <div className={S.progress__item}>
                <p className={S.progress__text}>
                  Поднятие ног, <br />
                  согнутых в коленях
                </p>
                <div className={S.progress__scale} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Workout;
