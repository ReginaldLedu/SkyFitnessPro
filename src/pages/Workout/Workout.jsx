import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { workoutSelector } from "../../store/selectors/selectors";
import {
  setExerciseTitles,
  setInitialProgress,
  setTargetProgress,
} from "../../store/reducers/mainReducers";
import WorkoutExerciseScales from "../../components/WorkoutExerciseScales/WorkoutExerciseScales";
import WorkoutExercises from "../../components/WorkoutExercises/WorkoutExercises";
import MyProgress from "../../components/Workout progress/myProgress";
import DropArrow from "../../components/DropArrow/DropArrow";
import S from "./Workout.module.css";

function Workout() {
  const dispatch = useDispatch();
  const workout = useSelector(workoutSelector);
  const completeProgressSwitcher = useSelector(
    (state) => state.rootReducer.mainState.initialState,
  );

  function exerciseTitlesToReducer(array) {
    dispatch(setExerciseTitles(array));
  }

  function targetProgressToReducer(object) {
    dispatch(setTargetProgress(object));
  }

  useEffect(() => {
    dispatch(setInitialProgress());
    const arr = workout.exercises.map((item) => item.split("(", 2));
    const arr2 = arr.map((item) => item[1].split(" ", 1));
    const targetProgressQuantity = arr2.map((item) => parseInt(item[0], 10));
    const exerciseTitles = workout.exercises.map((item) => item.split("(", 1));

    exerciseTitlesToReducer(
      workout.exercises.map((item) => item.split("(", 1)),
    );

    for (let i = 0; i < exerciseTitles.length; i += 1) {
      exerciseTitles[i].push(targetProgressQuantity[i]);
    }

    targetProgressToReducer(Object.fromEntries(exerciseTitles));
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
        <h1 className={S["workout-authorized__title"]}>{workout.name}</h1>
        <h2 className={S["workout-authorized__path"]}>{workout.title}</h2>
        <div className={S["workout-authorized__video"]}>
          <iframe
            width="1160"
            height="639"
            src={`https://www.youtube.com/embed/${workout.link}`}
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
