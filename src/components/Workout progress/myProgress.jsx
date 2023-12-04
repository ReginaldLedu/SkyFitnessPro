/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Workout_modal/Modal";
import {
  backToInitial,
  setProgress,
  setCurrentWorkoutProgress,
  setProgressArrayForRender,
} from "../../store/reducers/mainReducers";
import userSelector, { workoutSelector } from "../../store/selectors/selectors";
import { addProgress } from "../../api/api";
import S from "./myProgress.module.css";

function MyProgress() {
  const [modalOpen, setModalOpen] = useState(false);
  const user = useSelector(userSelector);
  const targetProgressFromRedux = useSelector(
    (state) => state.rootReducer.mainState.currentWorkout.targetProgress,
  );
  const userCurrentWorkoutProgress = useSelector(
    (state) => state.rootReducer.mainState.currentWorkoutProgress,
  );

  const showModal = () => {
    setModalOpen(true);
  };

  const submitProgressSwitch = () => {
    dispatch(backToInitial());
  };

  const workout = useSelector(workoutSelector);

  function userProgressToRedux(obj) {
    dispatch(setProgress(obj));
  }

  function userCurrentWorkoutProgressToRedux(obj) {
    dispatch(setCurrentWorkoutProgress(obj));
  }

  function setArrayForRender(object) {
    dispatch(setProgressArrayForRender(object));
  }

  function userProgressCreation(exerciseTitleArr, inputValue) {
    const arrForCount = [];
    arrForCount.push(exerciseTitleArr[0]);
    arrForCount.push(parseInt(inputValue, 10));
    const keys = Object.keys(targetProgressFromRedux);
    const exerciseKey = keys.find((item) => item === arrForCount[0]);
    const userProgressPercentage = Math.round(
      (arrForCount[1] / targetProgressFromRedux[exerciseKey]) * 100,
    );
    const key = arrForCount[0];
    const obj = {};
    if (Number.isNaN(userProgressPercentage)) {
      obj[key] = "0%";
    } else if (userProgressPercentage > 100) {
      obj[key] = `100%`;
    } else {
      obj[key] = `${userProgressPercentage}%`;
    }
    userCurrentWorkoutProgressToRedux(obj);
  }

  function userProgressUpdate(arrWithObj) {
    // const arrfiltered = [];
    const keys = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < arrWithObj.length; i++) {
      const er = Object.keys(arrWithObj[i]);
      keys.push(er[0]);
    }
    const uniqueKeys = keys.filter(
      (value, index, self) => self.indexOf(value) === index,
    );
    const obj = {};
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < uniqueKeys.length; i++) {
      const objForRender = {};
      const exInUserProgress = arrWithObj.find(
        (item) => Object.keys(item)[0] === uniqueKeys[i],
      );
      objForRender[uniqueKeys[i]] = exInUserProgress[uniqueKeys[i]];
      setArrayForRender(objForRender);
      obj[uniqueKeys[i]] = exInUserProgress[uniqueKeys[i]];
    }

    function getTitle(title) {
      switch (title) {
        case "Йога":
          return "yoga";
        case "Стретчинг":
          return "stretching";
        case "Степ-аэробика":
          return "step_aerobics";
        case "Танцевальный фитнес":
          return "dance_fitness";
        case "Бодифлекс":
          return "body_flex";
        default:
          return "yoga";
      }
    }

    function getDay(day) {
      switch (day) {
        case "Утренняя практика / Йога на каждый день / 1 день / Алексей Казубский":
          return "0";
        case "Красота и здоровье/ Йога на каждый день / 2 день / Алексей Казубский":
          return "1";
        case "Асаны стоя / Йога на каждый день / 3 день / Алексей Казубский":
          return "2";
        case "Растягиваем мышцы бедра / Йога на каждый день / 4 день / Алексей Казубский":
          return "3";
        case "Гибкость спины / Йога на каждый день / 5 день / Алексей Казубский":
          return "4";
        case "Основы стретчинга":
          return "0";
        case "Разогрев мышц":
          return "1";
        case "Разогрев мышц 2.0":
          return "2";
        case "Техника дыхания":
          return "0";
        case "Тренировка мышц бедер":
          return "1";
        case "Тренировка мышц ягодиц":
          return "2";
        default:
          return "3";
      }
    }
    const title = getTitle(workout.name);
    const day = getDay(workout.title);
    userProgressToRedux(obj);
    // setArrayForRender(progressArrayFromObject(obj));
    addProgress(user.login, obj, title, day);
  }

  function onKeyPress(event) {
    // eslint-disable-next-line eqeqeq
    if (
      event.keyCode == 46 ||
      event.keyCode == 8 ||
      event.keyCode == 9 ||
      event.keyCode == 27 ||
      // Разрешаем: Ctrl+A
      // eslint-disable-next-line eqeqeq
      (event.keyCode == 65 && event.ctrlKey === true) ||
      // Разрешаем: home, end, влево, вправо
      (event.keyCode >= 35 && event.keyCode <= 39)
    ) {
      // Ничего не делаем
      // eslint-disable-next-line no-useless-return
      return;
      // eslint-disable-next-line no-else-return
    } else {
      // eslint-disable-next-line no-lonely-if
      if (
        (event.keyCode < 48 || event.keyCode > 57) &&
        (event.keyCode < 96 || event.keyCode > 105)
      ) {
        event.preventDefault();
      }
    }
  }

  return (
    <section className={S.myProgress}>
      <div className={S.cross} onClick={submitProgressSwitch} />
      <div className={S.myProgress__wrapper}>
        <h1 className={S.myProgress__title}>Мой прогресс</h1>
        {workout.exerciseTitles.map((item) => (
          <div className={S.myProgress__item}>
            <p className={S.myProgress__question}>
              {`Сколько раз Вы сделали ${item}?`}
            </p>
            <input
              maxLength="2"
              type="text"
              onKeyDown={(event) => onKeyPress(event)}
              onBlur={(event) => userProgressCreation(item, event.target.value)}
              className={S.myProgress__answer}
              placeholder="Введите значение"
            />
          </div>
        ))}
        {modalOpen === "false" ? (
          <Modal modalOpen={modalOpen} showModal={showModal} />
        ) : (
          " "
        )}
        <button
          type="button"
          className={S.myProgress__submit}
          onClick={() => {
            // showModal();
            userProgressUpdate(userCurrentWorkoutProgress);
            submitProgressSwitch();
          }}
        >
          Отправить
        </button>
      </div>
    </section>
  );
}
export default MyProgress;
