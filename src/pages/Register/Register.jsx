import { NavLink } from "react-router-dom";
import S from "./Register.module.css";

function Register() {
  return (
    <div className={S.body__register}>
      <section className={S.register__screen}>
        <div className={S.register__wrapper}>
          <NavLink to="/">
            <div className={S.login__logo} />
          </NavLink>
          <input type="text" className={S.register__name} placeholder="Логин" />
          <input
            type="text"
            className={S.register__password}
            placeholder="Пароль"
          />
          <input
            type="text"
            className={S.repeat__password}
            placeholder="Повторите пароль"
          />

          <button type="button" className={S.register__button}>
            Зарегистрироваться
          </button>
        </div>
      </section>
    </div>
  );
}

export default Register;
