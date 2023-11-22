import { NavLink } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
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
          />
          <input
            type="text"
            className={styles.login__password}
            placeholder="Пароль"
          />
          <button type="button" className={styles.login__button}>
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
