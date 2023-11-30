import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { userUpdate } from "../../store/reducers/mainReducers";
import { getUser } from "../../api/api";
import S from "./Login.module.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [errorLog, setError] = useState(null);

  const checkInput = () => {
    if (!login) throw new Error("Не введен логин");
    if (!password) throw new Error("Не введен пароль");
  };

  const clickToLoginInApp = async () => {
    try {
      setDisabled(true);
      checkInput();
      const user = await getUser(login);

      if (user && user.password === password) {
        dispatch(
          userUpdate({
            login,
            password,
            logout: true,
          }),
        );
        localStorage.setItem(
          "user",
          JSON.stringify({ login, password, logout: true }),
        );
        navigate("/profile");
      } else {
        throw new Error("Пароль или логин введены не верно");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setDisabled(false);
    }
  };

  useEffect(() => {
    setError(null);
  }, [login, password]);

  return (
    <div className={S.body__login}>
      <section className={S.login__screen}>
        <div className={S.login__wrapper}>
          <NavLink to="/">
            <div className={S.login__logo} />
          </NavLink>
          <input
            type="text"
            className={S.login__name}
            placeholder="Логин"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
          />
          <input
            type="password"
            className={S.login__password}
            placeholder="Пароль"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {errorLog && <div className={S.error}>{errorLog}</div>}
          <button
            disabled={disabled}
            type="button"
            className={S.login__button}
            onClick={clickToLoginInApp}
          >
            Войти
          </button>
          <NavLink to="/register">
            <button type="button" className={S.register__button}>
              Зарегистрироваться
            </button>
          </NavLink>
        </div>
      </section>
    </div>
  );
}

export default Login;
