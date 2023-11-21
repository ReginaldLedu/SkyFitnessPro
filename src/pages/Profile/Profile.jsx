/* eslint-disable import/named */
import { useState } from "react";
import S from "./Profile.module.css";
import logo from "../../imgAl/logo.png";
import arrow from "../../imgAl/arrow.png";
import NewPwd from "./NewPwd";
import NewLogin from "./NewLogin";
import SelectWorkout from "./SelectWorkout";

function Profile() {
  const [isNpwOpen, setIsNpwOpen] = useState(false);
  const [isNlogOpen, setIsNlogOpen] = useState(false);

  return (
    <div className={S.profile_page}>
      <header className={S.header}>
        <img className={S.header_logo} src={logo} alt="logo" />
        <div className={S.user_block}>
          <div className={S.user_block__avatar} />
          <div className={S.user_block__name}>Сергей</div>
          <img className={S.user_block__arrow} src={arrow} alt="arrow" />
        </div>
        {/* <SelectWorkout /> */}
        {isNpwOpen && <NewPwd />}
        {isNlogOpen && <NewLogin />}
      </header>
      <div className={S.profile_block}>
        <p className={S.profile_block__header}>Мой профиль</p>
        <p className={S.profile_block__data}>Логин: sergey.petrov96</p>
        <p className={S.profile_block__data}>Пароль: 4fkhdj880d</p>
        <div className={S.button_block}>
          <button
            className={S.profile_block__button}
            type="button"
            onClick={() => setIsNlogOpen(!isNlogOpen)}
          >
            Редактировать логин
          </button>
          <button
            className={S.profile_block__button}
            type="button"
            onClick={() => setIsNpwOpen(!isNpwOpen)}
          >
            Редактировать пароль
          </button>
        </div>
        <div className={S.mycourses_block}>
          <p className={S.mycourses_block__header}>Мой профиль</p>
          <div className={S.mycourses__items}>
            <div className={S.mycourses__item_yoga}>
              <p className={S.item_text}>Йога</p>
              <button className={S.item_button} type="button">
                Перейти →
              </button>
            </div>
            <div className={S.mycourses__item_strech}>
              <p className={S.item_text}>Стретчинг</p>
              <button className={S.item_button} type="button">
                Перейти →
              </button>
            </div>
            <div className={S.mycourses__item_bflex}>
              <p className={S.item_text}>Бодифлекс</p>
              <button className={S.item_button} type="button">
                Перейти →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
