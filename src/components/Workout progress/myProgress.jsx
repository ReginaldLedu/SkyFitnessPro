import { useDispatch, useSelector } from "react-redux";
import styles from "./myProgress.module.css";
import { backToInitial } from "../../store/reducers/myProgressReducer";

function MyProgress() {
  const dispatch = useDispatch();

  const completeProgressSwitcher = useSelector(
    (state) => state.myProgressToolkit.initialState,
  );

  const submitProgressSwitch = () => {
    dispatch(backToInitial());
    console.log(completeProgressSwitcher);
  };

  return (
    <section className={styles.myProgress}>
      <div className={styles.myProgress__wrapper}>
        <h1 className={styles.myProgress__title}>Мой прогресс</h1>
        <div className={styles.myProgress__item}>
          <p className={styles.myProgress__question}>
            Сколько раз вы сделали наклоны вперед?
          </p>
          <input
            type="text"
            className={styles.myProgress__answer}
            placeholder="Введите значение"
          />
        </div>
        <div className={styles.myProgress__item}>
          <p className={styles.myProgress__question}>
            Сколько раз вы сделали наклоны назад?
          </p>
          <input
            type="number"
            className={styles.myProgress__answer}
            placeholder="Введите значение"
          />
        </div>
        <div className={styles.myProgress__item}>
          <p className={styles.myProgress__question}>
            Сколько раз вы сделали поднятие ног, согнутых в коленях?
          </p>
          <input
            type="number"
            className={styles.myProgress__answer}
            placeholder="Введите значение"
          />
        </div>
        <button
          onClick={submitProgressSwitch}
          type="button"
          className={styles.myProgress__submit}
        >
          Отправить
        </button>
      </div>
    </section>
  );
}
export default MyProgress;
