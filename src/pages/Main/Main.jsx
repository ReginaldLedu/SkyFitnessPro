import { Link } from "react-router-dom";
import sticker from "../../img/sticker.svg";
import yoga from "../../img/yoga.png";
import stretch from "../../img/stretch.png";
import danceFitness from "../../img/danceFitness.svg";
import stepAerobics from "../../img/stepAerobics.svg";
import bodyFlex from "../../img/bodyFlex.png";
import S from "./Main.module.css";

function Main() {
  return (    
    <div className={S.container}>
    <div className={S.top__row}>
      <div className={S.logo__container}>
        <div className={S.logo}>
          <img alt="logo" src="./imgMarat/Logo.svg" />
        </div>
        <div className={S.logo__text}>SkyFitnessPro</div>
      </div>
      <div className={S.login__button}>Войти</div>
      <div className={S.sticker}>
        <img alt="sticker" src="./imgMarat/sticker.svg" />
      </div>
    </div>
    <div className={S.small__title}>0нлайн-тренировки для занятий дома</div>
    <div className={S.big__title}>
      Начните заниматься спортом и улучшите качество жизни
    </div>
    <div className={S.cards__container}>
      <div className={S.card__box}>
        <img alt="yoga" className={S.card__img_yoga} src="./imgMarat/yoga.png" />
      </div>
      <div className={S.card__box}>
        <img
          alt="stretch"
          className={S.card__img_stretch}
          src="./imgMarat/stretch.png"
        />
      </div>
      <div className={S.card__box}>
        <img
          alt="dancefitness"
          className={S.card__img_dancefitness}
          src="./imgMarat/dancefitness.svg"
        />
      </div>
      <div className={S.card__box}>
        <img
          alt="stepaerobika"
          className={S.card__img_stepaerobika}
          src="./imgMarat/stepaerobika.svg"
        />
      </div>
      <div className={S.card__box}>
        <img
          alt="bodyflex"
          className={S.card__img_bodyflex}
          src="./imgMarat/bodyflex.png"
        />
      </div>
    </div>
    <div className={S.bottom__container}>
      <div className={S.bottom__button}>Наверх {String.fromCodePoint(8593)}</div>
    </div>
  </div>
  );
}

export default Main;
