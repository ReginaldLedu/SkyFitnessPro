/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch } from "react-redux";
import { useState } from "react";
import { passwordUpdate } from "../../store/reducers/mainReducers";
import S from "./NewPwd.module.css";
import logo from "../../img/logo__black.png";
import cross from "../../img/profile/cross.svg";

function NewPwd({ setIsNpwOpen }) {
  const dispatch = useDispatch();
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");
  const [inputError, setInputError] = useState(null)
  const saveButton = () => {
    if (newPassword === repeatNewPassword && newPassword.length > 0) {
      setIsNpwOpen(false);
      dispatch(passwordUpdate(newPassword));
    } else {
      setInputError('Поле пароль не должно быть пустыми! Длинна пароля должна составлять минимум 5 символов. Пароли должны совпадать!');
    }
  };
  return (
    <div className={S.newpwd_window}>
      <div className={S.newpwd_header}>
        <img
          className={S.cross}
          src={cross}
          alt="logo"
          onClick={() => setIsNpwOpen(false)}
        />
        <img className={S.newpwd_logo} src={logo} alt="logo" />
      </div>
      <form action="" className={S.newpwd_form}>
        <p className={S.form_header}>Новый пароль:</p>
        <input
          type="text"
          placeholder="Введите пароль"
          className={S.newpwd_input}
          onChange={(event) => {
            setNewPassword(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Повторите пароль"
          className={S.newpwd_input}
          onChange={(event) => {
            setRepeatNewPassword(event.target.value);
          }}
        />
        {inputError && <div className={S.error}>{inputError}</div>}
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

export default NewPwd;
