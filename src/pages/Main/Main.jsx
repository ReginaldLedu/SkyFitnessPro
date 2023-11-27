import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import sticker from "../../img/main/sticker.svg";
import yoga from "../../img/main/yoga.png";
import stretch from "../../img/main/stretch.png";
import danceFitness from "../../img/main/danceFitness.svg";
import stepAerobics from "../../img/main/stepAerobics.svg";
import bodyFlex from "../../img/main/bodyFlex.png";
import S from "./Main.module.css";
import { exitFromApp } from "../../store/reducers/mainReducers";

function Main() {
  const user = useSelector((state) => state.rootReducer.mainState.user);
  const [dropList, setDropList] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickToRouteInLogin = () => {
    navigate("/login");
  };
  const clickToExitButton = () => {
    dispatch(exitFromApp());
    navigate("/login");
  };
  const clickToRouteInProfile = () => {
    navigate("/profile");
  };

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
        {user.id === 0 ? (
          <button
            onClick={clickToRouteInLogin}
            type="button"
            className={S.login__button}
          >
            Войти
          </button>
        ) : (
          <div
            className={S.drop_container}
            aria-hidden="true"
            tabIndex="-1"
            onMouseLeave={() => setDropList(false)}
            onBlur={() => {}}
          >
            <div
              className={S.drop_title}
              aria-hidden="true"
              onClick={() => setDropList((prev) => !prev)}
            >
              <div className={S.drop_circle} />
              <div className={S.drop_username}>{user.login.slice(0, 11)}…</div>
              <div className={S.drop_arrow}>{String.fromCodePoint(9013)}</div>
            </div>
            {dropList ? (
              <div className={`${S.drop_list} ${S.drop_list_open}`}>
                <div
                  className={S.link_exit}
                  aria-hidden="true"
                  onClick={clickToExitButton}
                >
                  Выйти
                </div>
                <div
                  className={S.link_profile}
                  aria-hidden="true"
                  onClick={clickToRouteInProfile}
                >
                  Профиль
                </div>
                <div className={S.link_main}>На главную</div>
              </div>
            ) : (
              <div className={`${S.drop_list} ${S.drop_list_close}`}>
                <div className={S.link_exit}>Выйти</div>
                <div className={S.link_profile}>Профиль</div>
                <div className={S.link_main}>На главную</div>
              </div>
            )}
          </div>
        )}

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
          Наверх {String.fromCodePoint(65514)}
        </button>
      </div>
    </div>
  );
}

export default Main;
