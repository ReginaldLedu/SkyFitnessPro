import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SelectWorkout from "../../components/SelectWorkout/SelectWorkout";
import userSelector from "../../store/selectors/selectors";
import DropArrow from "../../components/DropArrow/DropArrow";
import NewLogin from "../../components/NewLogin/NewLogin";
import NewPwd from "../../components/NewPwd/NewPwd";
import logo from "../../img/logo__black.png";
import S from "./Profile.module.css";

function Profile() {
  const [isNpwOpen, setIsNpwOpen] = useState(false);
  const [isNlogOpen, setIsNlogOpen] = useState(false);
  const [isTrainingOpen, setIsTrainingOpen] = useState(false);
  const [trainingType, setTrainingType] = useState(null);
  const userData = useSelector(userSelector);

  return (
    <div className={S.profile_page}>
      {!isNpwOpen ? " " : <div className={S.cover} />}
      {!isNlogOpen ? " " : <div className={S.cover} />}
      {!isTrainingOpen ? " " : <div className={S.cover} />}
      <header className={S.header}>
        <Link to="/" className={S.header_logo}>
          <img className={S.header_logo} src={logo} alt="logo" />
        </Link>
        <div className={S.user_block}>
          <DropArrow />
        </div>
        {isTrainingOpen && (
          <SelectWorkout
            setIsTrainingOpen={setIsTrainingOpen}
            type={trainingType}
          />
        )}
        {isNpwOpen && (
          <NewPwd setIsNpwOpen={setIsNpwOpen} login={userData.login} />
        )}
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
            {userData.courses.yoga && (
              <div className={S.mycourses__item_yoga}>
                <p className={S.item_text}>Йога</p>

                <button
                  className={S.item_button}
                  type="button"
                  onClick={() => {
                    setIsNlogOpen(false);
                    setIsNpwOpen(false);
                    setIsTrainingOpen(!isTrainingOpen);
                    setTrainingType("yoga");
                  }}
                >
                  Перейти →
                </button>
              </div>
            )}
            {userData.courses.stretching && (
              <div className={S.mycourses__item_strech}>
                <p className={S.item_text}>Стретчинг</p>
                <button
                  className={S.item_button}
                  type="button"
                  onClick={() => {
                    setIsNlogOpen(false);
                    setIsNpwOpen(false);
                    setIsTrainingOpen(!isTrainingOpen);
                    setTrainingType("stretching");
                  }}
                >
                  Перейти →
                </button>
              </div>
            )}
            {userData.courses.body_flex && (
              <div className={S.mycourses__item_bflex}>
                <p className={S.item_text}>Бодифлекс</p>
                <button
                  className={S.item_button}
                  type="button"
                  onClick={() => {
                    setIsNlogOpen(false);
                    setIsNpwOpen(false);
                    setIsTrainingOpen(!isTrainingOpen);
                    setTrainingType("body_flex");
                  }}
                >
                  Перейти →
                </button>
              </div>
            )}

            {userData.courses.step_aerobics && (
              <div className={S.mycourses__item_step}>
                <p className={S.item_text}>Степ-аэробика</p>
                <button
                  className={S.item_button}
                  type="button"
                  onClick={() => {
                    setIsNlogOpen(false);
                    setIsNpwOpen(false);
                    setIsTrainingOpen(!isTrainingOpen);
                    setTrainingType("step_aerobics");
                  }}
                >
                  Перейти →
                </button>
              </div>
            )}
            {userData.courses.dance_fitness && (
              <div className={S.mycourses__item_dance}>
                <p className={S.item_text}>Танцевальный фитнес</p>
                <button
                  className={S.item_button_dance}
                  type="button"
                  onClick={() => {
                    setIsNlogOpen(false);
                    setIsNpwOpen(false);
                    setIsTrainingOpen(!isTrainingOpen);
                    setTrainingType("dance_fitness");
                  }}
                >
                  Перейти →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
