import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import DropArrow from "../../components/DropArrow/DropArrow";
import WorkoutExercises from "../../components/WorkoutExercises/WorkoutExercises";
import MyProgress from "../../components/Workout progress/myProgress";
import WorkoutExerciseScales from "../../components/WorkoutExerciseScales/WorkoutExerciseScales";
import S from "./Workout.module.css";
import {
  setExerciseTitles,
  setInitialProgress,
  setTargetProgress,
  /* setUserProgress, */
} from "../../store/reducers/mainReducers";

function Workout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInitialProgress());
  }, []);
  const currentExercises = useSelector(
    (state) => state.rootReducer.mainState.currentWorkout.exercises,
  );

  const completeProgressSwitcher = useSelector(
    (state) => state.rootReducer.mainState.initialState,
  );

  const currentTitle = useSelector(
    (state) => state.rootReducer.mainState.currentWorkout.title,
  );
  const mainTitle = useSelector(
    (state) => state.rootReducer.mainState.currentWorkout.name,
  );

  function exerciseTitlesToReducer(array) {
    dispatch(setExerciseTitles(array));
  }
  function targetProgressToReducer(object) {
    dispatch(setTargetProgress(object));
  }
  /* function userInitialProgressToReducer(object) {
    const exerciseTitles = object.map((item) => item.split("(", 1));
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < exerciseTitles.length; i++) {
      exerciseTitles[i].push(0);
    }
    dispatch(setUserProgress(exerciseTitles));
  } */

  useEffect(() => {
    const arr = currentExercises.map((item) => item.split("(", 2));
    const arr2 = arr.map((item) => item[1].split(" ", 1));
    const targetProgressQuantity = arr2.map((item) => parseInt(item[0], 10));
    const exerciseTitles = currentExercises.map((item) => item.split("(", 1));
    exerciseTitlesToReducer(currentExercises.map((item) => item.split("(", 1)));
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < exerciseTitles.length; i++) {
      exerciseTitles[i].push(targetProgressQuantity[i]);
    }
    targetProgressToReducer(Object.fromEntries(exerciseTitles));
    /* userInitialProgressToReducer(currentExercises); */
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
        <h1 className={S["workout-authorized__title"]}>{mainTitle}</h1>
        <h2 className={S["workout-authorized__path"]}>{currentTitle}</h2>
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
          <WorkoutExerciseScales />
        </section>
      </main>
    </>
  );
}

export default Workout;
