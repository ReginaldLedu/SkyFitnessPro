import { useSelector, useDispatch } from "react-redux";

import S from "../pages/Workout/Workout.module.css";
import {
  submitProgress,
  backToInitial,
 
} from "../store/reducers/mainReducers";
// import { coursesApi } from "../api/api";

function WorkoutExercises() {
  const dispatch = useDispatch();
  const completeProgressSwitcher = useSelector(
	(state) => state.rootReducer.mainState.initialState,
 );
  /* const { data: workouts } = coursesApi.useGetWorkoutsQuery();
  console.log(workouts); */
  

  const writeMyProgress = () => {
    if (completeProgressSwitcher === false) {
      dispatch(submitProgress());
    } else {
      dispatch(backToInitial());
    }
  };


  return (
    <div className={S["workout-authorized__exercises"]}>
      <h3 className={S["workout-authorized__exercises-title"]}>Упражнения</h3>
      <ul className={S["workout-authorized__list"]}>
        {/* {workouts.bodyflex[1].exercises.map((item) => (
          <li className={S.exercises__item}>{item}</li>
        ))} */}
        <li className={S.exercises__item}>Наклон вперед (10 повторений)</li>
        <li className={S.exercises__item}>Наклон назад (10 повторений)</li>
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
  );
}
export default WorkoutExercises;
