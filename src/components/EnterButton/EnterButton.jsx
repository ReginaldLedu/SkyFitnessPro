import { useNavigate } from "react-router-dom";
import S from "./EnterButton.module.css";

function EnterButton() {
  const navigate = useNavigate();

  const clickToRouteInLogin = () => {
    navigate("/login");
  };

  return (
    <button
      onClick={clickToRouteInLogin}
      type="button"
      className={S.login__button}
    >
      Войти
    </button>
  );
}

export default EnterButton;
