import { useSelector } from "react-redux";
import DropArrow from "../../components/DropArrow/DropArrow";
import WorkoutExercises from "../../components/WorkoutExercises";
import MyProgress from "../../components/Workout progress/myProgress";
import S from "./Workout.module.css";

function Workout() {
  const completeProgressSwitcher = useSelector(
    (state) => state.rootReducer.mainState.initialState,
  );

  return (
    <>
      <header>
        <div className={S.header__wrapper}>
          <div className={S.header__logo} />
          <DropArrow />
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
            allowFullScreen
          />
        </div>
        {completeProgressSwitcher === false ? " " : <div className={S.cover} />}
        {completeProgressSwitcher === false ? " " : <MyProgress />}
        <section className={S["workout-authorized__info"]}>
          <WorkoutExercises />
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
