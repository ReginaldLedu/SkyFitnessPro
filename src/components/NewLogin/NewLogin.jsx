import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUpdateUser, deleteUser, getUser } from "../../api/api";
import { loginUpdate } from "../../store/reducers/mainReducers";
import { safeString } from "../Helper/Helper";
import userSelector from "../../store/selectors/selectors";
import logo from "../../img/logo__black.png";
import S from "./NewLogin.module.css";

function NewLogin({ setIsNlogOpen }) {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const [newLogin, setNewLogin] = useState("");
  const [inputError, setInputError] = useState(null);
  const user = useSelector(userSelector);

  const checkInput = () => {
    if (!newLogin) throw new Error("Поле логин не должно быть пустыми!");
    if (newLogin.length < 5)
      throw new Error("Логин должен быть минимум из 5 символов");
  };

  const saveButton = async () => {
    try {
      setDisabled(true);
      checkInput();

      const checkUser = await getUser(safeString(newLogin));

      if (checkUser)
        throw new Error("Пользователь с таким логином уже существует");

      await deleteUser(user.login);
      await addUpdateUser(safeString(newLogin), user.password, user.courses);
      dispatch(loginUpdate(safeString(newLogin)));
      localStorage.setItem(
        "user",
        JSON.stringify({
          login: safeString(newLogin),
          password: user.password,
          courses: user?.courses || {},
        }),
      );
      setIsNlogOpen(false);
    } catch (error) {
      setInputError(error.message);
    } finally {
      setDisabled(false);
    }
  };

  useEffect(() => {
    setInputError(null);
  }, [newLogin]);

  return (
    <div className={S.newpwd_window}>
      <div className={S.newpwd_header}>
        <button
          onClick={() => setIsNlogOpen(false)}
          type="button"
          className={S.cross}
        >
          {}
        </button>
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

export default NewLogin;
