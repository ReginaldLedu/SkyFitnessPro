import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { enterToApp } from "../../store/reducers/mainReducers";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState("");
  const [password, setPassword] = useState("");

  const clickToLoginInApp = () => {
    if(userLogin==="admin" && password === "admin"){
      dispatch(enterToApp());
      navigate("/profile");
    } else {
      alert("Неправильно!!!");
    }    
  };

  return (
    <div className={styles.body__login}>
      <section className={styles.login__screen}>
        <div className={styles.login__wrapper}>
          <NavLink to="/">
            <div className={styles.login__logo} />
          </NavLink>
          <input
            type="text"
            className={styles.login__name}
            placeholder="Логин"
            value={userLogin}
            onChange={(event) => setUserLogin(event.target.value)}
          />
          <input
            type="text"
            className={styles.login__password}
            placeholder="Пароль"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            type="button"
            className={styles.login__button}
            onClick={clickToLoginInApp}
          >
            Войти
          </button>
          <NavLink to="/register">
            <button type="button" className={styles.register__button}>
              Зарегистрироваться
            </button>
          </NavLink>
        </div>
      </section>
    </div>
  );
}

export default Login;
