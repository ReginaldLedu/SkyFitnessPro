import { useDispatch } from "react-redux";
import { useState } from "react";
import logo from "../../img/logo__black.png";
import { loginUpdate } from "../../store/reducers/mainReducers";
import S from "./NewLogin.module.css";

function NewLogin({ setIsNlogOpen }) {
  const dispatch = useDispatch();
  const [newLogin, setNewLogin] = useState("");
  const saveButton = () => {
    if (newLogin.length > 0) {
      setIsNlogOpen(false);
      dispatch(loginUpdate(newLogin));
    } else {
      alert('Поле логин не может быть пустым!')
    }

  };
  return (
    <div className={S.newpwd_window}>
      <img className={S.newpwd_logo} src={logo} alt="logo" />
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
