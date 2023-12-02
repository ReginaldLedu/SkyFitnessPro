import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { userUpdate } from "../../store/reducers/mainReducers";
import userSelector from "../../store/selectors/selectors";
import S from "./DropArrow.module.css";
import { uppString } from "../Helper/Helper";

function DropArrow() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const user = useSelector(userSelector);
  const [dropList, setDropList] = useState(0);

  const clickToExitButton = () => {
    dispatch(userUpdate({ logout: false }));
    localStorage.removeItem("user");
    navigate("/");
  };

  const dropArrowClass = () => {
    if (location !== "/") return S.drop_container;
    return S.drop_container_mainpage;
  };

  const clickToRouteInProfile = () => {
    navigate("/profile");
  };

  const clickToRouteInMain = () => {
    navigate("/");
  };
  const showUser = () => {
    const result =
      user.login.length > 11 ? `${user.login.slice(0, 11)}…` : user.login;
    return uppString(result);
  };
  const showDropList = () => {
    if (dropList === 0) {
      return S.drop_list;
    }
    if (dropList === 1) {
      return `${S.drop_list} ${S.drop_list_open}`;
    }
    return `${S.drop_list} ${S.drop_list_close}`;
  };
  
  return (
    <div
      className={dropArrowClass()}
      aria-hidden="true"
      tabIndex="-1"
      onMouseLeave={() => dropList===1 ? setDropList(2):null}
      onBlur={() => {}}
    >
      <div
        className={S.drop_title}
        aria-hidden="true"
        onClick={() => (dropList === 1 ? setDropList(2) : setDropList(1))}
      >
        <div className={S.drop_circle} />
        <div className={S.drop_username}>{showUser()}</div>
        <div className={S.drop_arrow}>{String.fromCodePoint(9013)}</div>
      </div>      
        <div className={showDropList()}>
          <div
            className={S.link_exit}
            aria-hidden="true"
            onClick={clickToExitButton}
          >
            Выйти
          </div>
          <div
            className={S.link_profile}
            aria-hidden="true"
            onClick={clickToRouteInProfile}
          >
            Профиль
          </div>
          <div
            className={S.link_main}
            aria-hidden="true"
            onClick={clickToRouteInMain}
          >
            На главную
          </div>
        </div>      
    </div>
  );
}

export default DropArrow;
