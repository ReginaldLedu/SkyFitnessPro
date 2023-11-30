import { useSelector, useDispatch } from "react-redux";
import {
  submitProgress,
  backToInitial,
} from "../../store/reducers/mainReducers";
import S from "../../pages/Workout/Workout.module.css";

function WorkoutExercises() {
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
    <div className={S["workout-authorized__exercises"]}>
      <h3 className={S["workout-authorized__exercises-title"]}>Упражнения</h3>
      <ul className={S["workout-authorized__list"]}>
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
