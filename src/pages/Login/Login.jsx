import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutUpdate } from "../../store/reducers/mainReducers";
import S from "./Login.module.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState("");
  const [password, setPassword] = useState("");

  const clickToLoginInApp = () => {
    if (userLogin === "admin" && password === "admin") {
      dispatch(logoutUpdate(true));
      navigate("/profile");
    } else {
      alert("Неправильно!!!");
    }
  };

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
            value={userLogin}
            onChange={(event) => setUserLogin(event.target.value)}
          />
          <input
            type="password"
            className={S.login__password}
            placeholder="Пароль"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
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
