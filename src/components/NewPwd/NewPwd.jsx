import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { passwordUpdate } from "../../store/reducers/mainReducers";
import logo from "../../img/logo__black.png";
import S from "./NewPwd.module.css";
import { addUser } from "../../api/api";

function NewPwd({ setIsNpwOpen, login }) {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");
  const [inputError, setInputError] = useState(null);

  const checkInput = () => {
    if (!newPassword) throw new Error("Не введен пароль!");
    if (!repeatNewPassword) throw new Error("Не введен повторный пароль");
    if (newPassword.length < 5)
      throw new Error("Пароль должен быть минимум из 5 символов");
    if (newPassword !== repeatNewPassword)
      throw new Error("Пароль не совпадает");
  };

  const saveButton = () => {
    try {
      setDisabled(true);
      checkInput();
      setIsNpwOpen(false);
      dispatch(passwordUpdate(newPassword));
      addUser(login, newPassword);
    } catch (error) {
      setInputError(error.message);
    } finally {
      setDisabled(false);
    }
  };

  useEffect(() => {
    setInputError(null);
  }, [newPassword]);

  return (
    <div className={S.newpwd_window}>
      <div className={S.newpwd_header}>
        <button
          onClick={() => setIsNpwOpen(false)}
          type="button"
          className={S.cross}
        >
          {}
        </button>
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
          disabled={disabled}
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
