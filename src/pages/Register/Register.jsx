import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, getUser } from "../../api/api";
import { safeString } from "../../components/Helper/Helper";
import { logoutUpdate, userUpdate } from "../../store/reducers/mainReducers";
import S from "./Register.module.css";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [errorLog, setError] = useState(null);

  const registerButtonClass = () => {
    if (!disabled) return S.register__button;
    return S.register__button_loading;
  };

  const checkInput = () => {
    if (!login) throw new Error("Не введен логин");
    if (login.length < 5)
      throw new Error("Логин должен быть минимум из 5 символов");
    if (!password) throw new Error("Не введен пароль");
    if (password.length < 5)
      throw new Error("Пароль должен быть минимум из 5 символов");
    if (!repeatPassword) throw new Error("Не введен повторный пароль");
    if (password !== repeatPassword) throw new Error("Пароль не совпадает");
  };

  const registerButton = async () => {
    try {
      setDisabled(true);
      checkInput();
      const safeLogin = safeString(login);
      const safePassword = safeString(password);
      const checkUser = await getUser(safeLogin);

      if (checkUser)
        throw new Error("Пользователь с таким логином уже существует");

      await addUser(safeLogin, safePassword);
      dispatch(
        userUpdate({
          login: safeLogin,
          password: safePassword,
          courses: {},
        }),
      );
      localStorage.setItem(
        "user",
        JSON.stringify({
          login: safeLogin,
          password: safePassword,
          courses: {},
        }),
      );
      dispatch(logoutUpdate(true));
      localStorage.setItem("logout", JSON.stringify(true));
      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setDisabled(false);
    }
  };

  const pressEnterKey = (event) => {
    if (event.keyCode === 13) registerButton();
  };

  useEffect(() => {
    setError(null);
  }, [login, password, repeatPassword]);

  return (
    <div className={S.body__register}>
      <section className={S.register__screen}>
        <div className={S.register__wrapper}>
          <NavLink to="/">
            <div className={S.login__logo} />
          </NavLink>
          <input
            type="text"
            className={S.register__name}
            placeholder="Логин"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
            onKeyDown={(event) => pressEnterKey(event)}
          />
          <input
            type="password"
            className={S.register__password}
            placeholder="Пароль"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onKeyDown={(event) => pressEnterKey(event)}
          />
          <input
            type="password"
            className={S.repeat__password}
            placeholder="Повторите пароль"
            value={repeatPassword}
            onChange={(event) => setRepeatPassword(event.target.value)}
            onKeyDown={(event) => pressEnterKey(event)}
          />
          {errorLog && <span className={S.error}>{errorLog}</span>}
          <button
            disabled={disabled}
            type="button"
            className={registerButtonClass()}
            onClick={registerButton}
          >
            {!disabled ? "Зарегистрироваться" : "...Идет регистрация"}
          </button>
          <button
            disabled={disabled}
            type="button"
            className={S.login__button}
            onClick={() => navigate("/login")}
          >
            Войти
          </button>
        </div>
      </section>
    </div>
  );
}

export default Register;
