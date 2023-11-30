/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch } from "react-redux";
import { useState } from "react";
import logo from "../../img/logo__black.png";
import { loginUpdate } from "../../store/reducers/mainReducers";
import S from "./NewLogin.module.css";
import cross from "../../img/profile/cross.svg";

function NewLogin({ setIsNlogOpen }) {
  const dispatch = useDispatch();
  const [newLogin, setNewLogin] = useState("");
  const saveButton = () => {
    if (newLogin.length > 0) {
      setIsNlogOpen(false);
      dispatch(loginUpdate(newLogin));
    } else {
      alert("Поле логин не может быть пустым!");
    }
  };
  return (
    <div className={S.newpwd_window}>
      <div className={S.newpwd_header}>
        <img
          className={S.cross}
          src={cross}
          alt="logo"
          onClick={() => setIsNlogOpen(false)}
        />
        <img className={S.newpwd_logo} src={logo} alt="logo" />
      </div>
      <form action="" className={S.newpwd_form}>
        <p className={S.form_header}>Новый логин:</p>
        <input
          type="text"
          className={S.newpwd_input}
          onChange={(event) => {
            setNewLogin(event.target.value);
          }}
        />
        <button
          type="button"
          className={S.form_button}
          onClick={() => saveButton()}
        >
          Сохранить
        </button>
      </form>
    </div>
  );
}

export default NewLogin;
