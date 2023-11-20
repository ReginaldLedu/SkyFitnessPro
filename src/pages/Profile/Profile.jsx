import S from "./Profile.module.css";
import logo from "../../imgAl/logo.png";
import arrow from "../../imgAl/arrow.png";

function Profile() {
  return (
    <div className={S.profile_page}>
      <header className={S.header}>
        <img className={S.header_logo} src={logo} alt="logo" />
        <div className={S.user_block}>
          <div className={S.user_block__avatar} />
          <div className={S.user_block__name}>Сергей</div>
          <img className={S.user_block__arrow} src={arrow} alt="arrow" />
        </div>
      </header>
      <div className={S.profile_block}>
        <p className={S.profile_block__header}>Мой профиль</p>
        <p className={S.profile_block__data}>Логин: sergey.petrov96</p>
        <p className={S.profile_block__data}>Пароль: 4fkhdj880d</p>
        <div className={S.button_block}>
          <button className={S.profile_block__button} type="button">
            Редактировать логин
          </button>
          <button className={S.profile_block__button} type="button">
            Редактировать логин
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
