<<<<<<< HEAD
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
=======
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
>>>>>>> a3b14d3e2f0e0bf69eea2164f1b081a3ff27278b
import DropArrow from "../../components/DropArrow/DropArrow";
import WorkoutExercises from "../../components/WorkoutExercises/WorkoutExercises";
import MyProgress from "../../components/Workout progress/myProgress";
import S from "./Workout.module.css";
import /* getWorkoutFirebase, */ "../../api/api";
import { courseUpdate } from "../../store/reducers/mainReducers";

function Workout() {
  const dispatch = useDispatch();
  const completeProgressSwitcher = useSelector(
    (state) => state.rootReducer.mainState.initialState,
  );
  const courseFromApi = useSelector(
    (state) => state.rootReducer.mainState.course,
  );
  function getWorkoutFirebase() {
    return (
      axios
        .get(
          "https://skyfitnesspro-abf64-default-rtdb.europe-west1.firebasedatabase.app/courses.json",
        )
        // eslint-disable-next-line prefer-arrow-callback
        .then(function (response) {
          dispatch(courseUpdate(response.data));
        })
    );
  }
  useEffect(() => {
    getWorkoutFirebase();
    console.log(courseFromApi);
  }, []);

  return (
    <>
      <header>
        <div className={S.header__wrapper}>
          <Link to="/" className={S.header__logo} />
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
