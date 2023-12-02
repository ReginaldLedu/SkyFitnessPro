/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useDispatch, useSelector } from "react-redux";
import { backToInitial, setProgress } from "../../store/reducers/mainReducers";
import { workoutSelector } from "../../store/selectors/selectors";
import S from "./myProgress.module.css";

function MyProgress() {
  
  const dispatch = useDispatch();
  const submitProgressSwitch = () => {
    dispatch(backToInitial());
  };
  const workout = useSelector(workoutSelector);
  const targetProgressFromRedux = useSelector(
    (state) => state.rootReducer.mainState.currentWorkout.targetProgress,
  );

  function userProgressToRedux(obj) {
    dispatch(setProgress(obj));
  }

  function userProgressCreation(exerciseTitleArr, inputValue) {    
    const arrForCount = [];
    arrForCount.push(exerciseTitleArr[0]);
    arrForCount.push(parseInt(inputValue, 10));
    const keys = Object.keys(targetProgressFromRedux);
    const exerciseKey = keys.find((item) => item === arrForCount[0]);
    const userProgressPercentage =
      (arrForCount[1] / targetProgressFromRedux[exerciseKey]) * 100;
    const key = arrForCount[0];
    const obj = {};
    // eslint-disable-next-line prefer-destructuring
    obj[key] = `${userProgressPercentage}%`;
    userProgressToRedux(obj);
  }
  

  return (
    <section className={S.myProgress}>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div className={S.cross} onClick={submitProgressSwitch} />
      <div className={S.myProgress__wrapper}>
        <h1 className={S.myProgress__title}>Мой прогресс</h1>
        {workout.exerciseTitles.map((item) => (
          <div className={S.myProgress__item}>
            <p className={S.myProgress__question}>
              {`Сколько раз Вы сделали ${item}?`}
            </p>
            <input
              onBlur={(event) => userProgressCreation(item, event.target.value)}
              type="number"              
              className={S.myProgress__answer}
              placeholder="Введите значение"                
            />
          </div>
        ))}
        <button
          type="button"
          className={S.myProgress__submit}
          onClick={submitProgressSwitch}
        >
          Отправить
        </button>
      </div>
    </section>
  );
}
export default MyProgress;
