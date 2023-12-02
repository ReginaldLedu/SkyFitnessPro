import { useSelector } from "react-redux";
import S from "../../pages/Workout/Workout.module.css";

export default function WorkoutExerciseScales() {
  const userProgress = useSelector(
    (state) => state.rootReducer.mainState.userProgress,
  );
  const currentExercises = useSelector(
    (state) => state.rootReducer.mainState.currentWorkout.exercises,
  );
  const colors = [
    { common: "#EDECFF", inner: "#565EEF" },
    { common: "#FFF2E0", inner: "#FF6D00" },
    { common: "#F9EBFF", inner: "#9A48F1" },
    { common: "#EDECFF", inner: "#565EEF" },
    { common: "#FFF2E0", inner: "#FF6D00" },
    { common: "#F9EBFF", inner: "#9A48F1" },
    
  ];
  return (
    <div className={S["workout-authorized__progress"]}>
      <div className={S.progress__wrapper}>
        <h3 className={S.progress__title}>Мой прогресс по тренировке 2:</h3>
        {userProgress.length > 0
          ? userProgress.map((item) => (
              <>
                {" "}
                <div className={S.progress__item}>
                  <p className={S.progress__text}>{Object.keys(item)}</p>
                  <div
                    className={S.progress__scale}
                    style={{
                      background: colors[userProgress.indexOf(item)].common,
                      border: `2px solid ${
                        colors[userProgress.indexOf(item)].inner
                      }`,
                    }}
                  >
                    <div
                      className={S.progress__scale_inner}
                      style={{
                        width: Object.values(item),
                        maxWidth: "100%",
                        background: colors[userProgress.indexOf(item)].inner,
                      }}
                    >
                      {Object.values(item)}{" "}
                    </div>
                  </div>
                </div>
              </>
            ))
          : currentExercises.map((item) => (
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
