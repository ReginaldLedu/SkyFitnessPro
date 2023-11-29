import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import S from "./Profile.module.css";
import logo from "../../img/logo__black.png";
// import arrow from "../../img/arrow.png";
import NewPwd from "../../components/NewPwd/NewPwd";
import NewLogin from "../../components/NewLogin/NewLogin";
import SelectWorkout from "../../components/SelectWorkout/SelectWorkout";
import { useGetWorkoutsQuery } from "../../api/api";
import DropArrow from "../../components/DropArrow/DropArrow";

function Profile() {
  const { data = [] } = useGetWorkoutsQuery();
  const [isNpwOpen, setIsNpwOpen] = useState(false);
  const [isNlogOpen, setIsNlogOpen] = useState(false);
  const [isTrainingOpen, setIsTrainingOpen] = useState(false);
  const userData = useSelector((store) => store.rootReducer.mainState.user);
  const trainingType = ["yoga", "body_flex"];
  return (
    <div className={S.profile_page}>
      <header className={S.header}>
        <Link to="/" className={S.header_logo}>
          <img className={S.header_logo} src={logo} alt="logo" />
        </Link>
        <div className={S.user_block}>
          <DropArrow />
          {/* <div className={S.user_block__avatar} />
          <div className={S.user_block__name}>Сергей</div>
          <img className={S.user_block__arrow} src={arrow} alt="arrow" /> */}
        </div>
        {isTrainingOpen && (
          <SelectWorkout
            setIsTrainingOpen={setIsTrainingOpen}
            data={data}
            type={trainingType[0]}
          />
        )}
        {isNpwOpen && <NewPwd setIsNpwOpen={setIsNpwOpen} />}
        {isNlogOpen && <NewLogin setIsNlogOpen={setIsNlogOpen} />}
      </header>
      <div className={S.profile_block}>
        <p className={S.profile_block__header}>Мой профиль</p>
        <p className={S.profile_block__data}>Логин: {userData.login}</p>
        <p className={S.profile_block__data}>Пароль: {userData.password}</p>
        <div className={S.button_block}>
          <button
            className={S.profile_block__button}
            type="button"
            onClick={() => {
              setIsNpwOpen(false);
              setIsTrainingOpen(false);
              setIsNlogOpen(!isNlogOpen);
            }}
          >
            Редактировать логин
          </button>
          <button
            className={S.profile_block__button}
            type="button"
            onClick={() => {
              setIsTrainingOpen(false);
              setIsNlogOpen(false);
              setIsNpwOpen(!isNpwOpen);
            }}
          >
            Редактировать пароль
          </button>
        </div>
        <div className={S.mycourses_block}>
          <p className={S.mycourses_block__header}>Мой профиль</p>
          <div className={S.mycourses__items}>
            <div className={S.mycourses__item_yoga}>
              <p className={S.item_text}>Йога</p>
              <button
                className={S.item_button}
                type="button"
                onClick={() => {
                  setIsNlogOpen(false);
                  setIsNpwOpen(false);
                  setIsTrainingOpen(!isTrainingOpen);
                }}
              >
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
