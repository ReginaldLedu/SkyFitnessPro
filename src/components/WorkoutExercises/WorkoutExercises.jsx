import { useSelector, useDispatch } from "react-redux";
import {
  submitProgress,
  backToInitial,
  removeProgressArrayForRender,
} from "../../store/reducers/mainReducers";
import S from "../../pages/Workout/Workout.module.css";

function WorkoutExercises() {
  const dispatch = useDispatch();
  const removeProgress = () => {
    dispatch(removeProgressArrayForRender());
  };
  const completeProgressSwitcher = useSelector(
    (state) => state.rootReducer.mainState.initialState,
  );
  const currentExercises = useSelector(
    (state) => state.rootReducer.mainState.currentWorkout.exercises,
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
        {currentExercises !== undefined
          ? currentExercises.map((item) => (
              <li className={S.exercises__item}>{item}</li>
            ))
          : " "}
      </ul>
      <button
        onClick={() => {
          writeMyProgress();
          removeProgress();
        }}
        type="button"
        className={S["workout-authorized__check"]}
      >
        Заполнить свой прогресс
      </button>
    </div>
  );
}
export default WorkoutExercises;
