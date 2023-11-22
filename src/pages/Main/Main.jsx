import { Link } from "react-router-dom";
import sticker from "../../img/main/sticker.svg";
import yoga from "../../img/main/yoga.png";
import stretch from "../../img/main/stretch.png";
import danceFitness from "../../img/main/danceFitness.svg";
import stepAerobics from "../../img/main/stepAerobics.svg";
import bodyFlex from "../../img/main/bodyFlex.png";
import S from "./Main.module.css";

function Main() {
  const enter = () => {};

  const card = () => {};

  const scroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={S.container}>
      <div className={S.top__row}>
        <Link to="/" className={S.logo__container} />
        <button onClick={enter} type="button" className={S.login__button}>
          Войти
        </button>
        <div className={S.sticker}>
          <img alt="sticker" src={sticker} />
        </div>
      </div>
      <div className={S.small__title}>Онлайн-тренировки для занятий дома</div>
      <div className={S.big__title}>
        Начните заниматься спортом и улучшите качество жизни
      </div>
      <div className={S.cards__container}>
        <button
          onClick={() => card("yoga")}
          type="button"
          className={S.card__box}
        >
          <img alt="yoga" className={S.card__img_yoga} src={yoga} />
        </button>
        <button
          onClick={() => card("stretch")}
          type="button"
          className={S.card__box}
        >
          <img alt="stretch" className={S.card__img_stretch} src={stretch} />
        </button>
        <button
          onClick={() => card("danceFitness")}
          type="button"
          className={S.card__box}
        >
          <img
            alt="danceFitness"
            className={S.card__img_danceFitness}
            src={danceFitness}
          />
        </button>
        <button
          onClick={() => card("stepAerobics")}
          type="button"
          className={S.card__box}
        >
          <img
            alt="stepAerobics"
            className={S.card__img_stepAerobics}
            src={stepAerobics}
          />
        </button>
        <button
          onClick={() => card("bodyFlex")}
          type="button"
          className={S.card__box}
        >
          <img alt="bodyFlex" className={S.card__img_bodyFlex} src={bodyFlex} />
        </button>
      </div>
      <div className={S.bottom__container}>
        <button onClick={scroll} type="button" className={S.bottom__button}>
          Наверх {String.fromCodePoint(8593)}
        </button>
      </div>
    </div>
  );
}

export default Main;
