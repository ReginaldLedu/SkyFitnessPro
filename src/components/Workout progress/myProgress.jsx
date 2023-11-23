import { useSelector, useDispatch } from "react-redux";
import { backToInitial } from "../../store/reducers/mainReducers";
import S from "./myProgress.module.css";

function MyProgress() {
  const dispatch = useDispatch();
  const completeProgressSwitcher = useSelector(
    (state) => state.rootReducer.mainState.initialState,
  );

  const submitProgressSwitch = () => {
    dispatch(backToInitial());
    console.log(completeProgressSwitcher);
  };

  return (
    <section className={S.myProgress}>
      <div className={S.myProgress__wrapper}>
        <h1 className={S.myProgress__title}>Мой прогресс</h1>
        <div className={S.myProgress__item}>
          <p className={S.myProgress__question}>
            Сколько раз вы сделали наклоны вперед?
          </p>
          <input
            type="text"
            className={S.myProgress__answer}
            placeholder="Введите значение"
          />
        </div>
        <div className={S.myProgress__item}>
          <p className={S.myProgress__question}>
            Сколько раз вы сделали наклоны назад?
          </p>
          <input
            type="number"
            className={S.myProgress__answer}
            placeholder="Введите значение"
          />
        </div>
        <div className={S.myProgress__item}>
          <p className={S.myProgress__question}>
            Сколько раз вы сделали поднятие ног, согнутых в коленях?
          </p>
          <input
            type="number"
            className={S.myProgress__answer}
            placeholder="Введите значение"
          />
        </div>
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
