import S from "./NewPwd.module.css";
import logo from "../../imgAl/logo.png";

function NewPwd() {
  return (
    <div className={S.newpwd_window}>
      <img className={S.newpwd_logo} src={logo} alt="logo" />
      <form action="" className={S.newpwd_form}>
        <p className={S.form_header}>Новый пароль:</p>
        <input type="text" placeholder="Введите пароль" className={S.newpwd_input}/>
        <input type="text" placeholder="Повторите пароль" className={S.newpwd_input}/>
        <button type="submit" className={S.form_button}>Сохранить</button>
      </form>
    </div>
  );
}

export default NewPwd;
