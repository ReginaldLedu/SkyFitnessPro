// import { useEffect } from "react";
import { useSelector /* useDispatch */ } from "react-redux";
import { workoutSelector } from "../../store/selectors/selectors";
import S from "../../pages/Workout/Workout.module.css";
// import { getUserProgress } from "../../api/api";
// import { setProgress } from "../../store/reducers/mainReducers";

export default function WorkoutExerciseScales() {
  const userCurrentWorkoutProgress = useSelector(
    (state) => state.rootReducer.mainState.currentWorkoutProgress,
  );

  const progressForRender = useSelector(
    (state) => state.rootReducer.mainState.progressForRender,
  );

  /* const userProgress = useSelector(
    (state) => state.rootReducer.mainState.userProgress,
  ); */

  const workout = useSelector(workoutSelector);
  const colors = [
    { common: "#EDECFF", inner: "#565EEF" },
    { common: "#FFF2E0", inner: "#FF6D00" },
    { common: "#F9EBFF", inner: "#9A48F1" },
  ];

  /* const getProgress = async () => {
    const newdata = await getUserProgress("admin");
    console.log(newdata.data);
    dispatch(setProgress(newdata.data));
  };
  useEffect(() => getProgress, []); */
  // eslint-disable-next-line consistent-return
  function getNumber(n) {
    switch (n) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 0;
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 0;
      case 7:
        return 1;
      default:
        break;
    }
  }
  /* const arrForRender = (objuserProgress) => {
    const arr = Object.entries(objuserProgress);
    console.log(arr);
    return arr;
  };
  const array = arrForRender(userProgress); */

  return (
    <div className={S["workout-authorized__progress"]}>
      <div className={S.progress__wrapper}>
        <h3 className={S.progress__title}>Мой прогресс по тренировке 2:</h3>
        {/* eslint-disable-next-line no-nested-ternary */}
        {userCurrentWorkoutProgress.length > 0
          ? progressForRender.map((item) => (
              <>
                {" "}
                <div className={S.progress__item}>
                  <p className={S.progress__text}>{Object.keys(item)}</p>
                  <div
                    className={S.progress__scale}
                    style={{
                      background:
                        colors[getNumber(progressForRender.indexOf(item))]
                          .common,
                      border: `2px solid ${
                        colors[getNumber(progressForRender.indexOf(item))].inner
                      }`,
                    }}
                  >
                    <div
                      className={S.progress__scale_inner}
                      style={{
                        width: `${parseInt(Object.values(item), 10)}%`,
                        maxWidth: "100%",
                        background:
                          colors[getNumber(progressForRender.indexOf(item))]
                            .inner,
                      }}
                    >
                      {Number.isNaN(Object.values(item))
                        ? "0%"
                        : Object.values(item)}
                    </div>
                  </div>
                </div>
              </>
            ))
          : workout.exercises.map((item) => (
              <>
                {" "}
                <div className={S.progress__item}>
                  <p className={S.progress__text}>{item.split("(", 1)}</p>
                  <div className={S.progress__scale}>
                    <div className={S.progress__scale_inner} />
                  </div>
                </div>
              </>
            ))}
      </div>
    </div>
  );
}
