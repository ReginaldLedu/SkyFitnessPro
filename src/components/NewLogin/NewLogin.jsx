import S from "./NewLogin.module.css";
import logo from "../../img/logo__black.png";

function NewLogin() {
  return (
    <div className={S.newpwd_window}>
      <img className={S.newpwd_logo} src={logo} alt="logo" />
      <form action="" className={S.newpwd_form}>
        <p className={S.form_header}>Новый логин:</p>
        <input
          type="text"
          placeholder="Введите логин"
          className={S.newpwd_input}
        />
        <button type="submit" className={S.form_button}>
          Сохранить
        </button>
      </form>
    </div>
  );
}

export default NewLogin;
