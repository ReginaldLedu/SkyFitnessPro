import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { logoutUpdate } from "../../store/reducers/mainReducers";
import userSelector from "../../store/selectors/selectors";
import S from "./DropArrow.module.css";

function DropArrow() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(userSelector);
  const [dropList, setDropList] = useState(false);

  const clickToExitButton = () => {
    dispatch(logoutUpdate(false));
    navigate("/login");
  };

  const clickToRouteInProfile = () => {
    navigate("/profile");
  };

  const clickToRouteInMain = () => {
    navigate("/");
  };

  return (
    <div
      className={S.drop_container}
      aria-hidden="true"
      tabIndex="-1"
      onMouseLeave={() => setDropList(false)}
      onBlur={() => {}}
    >
      <div
        className={S.drop_title}
        aria-hidden="true"
        onClick={() => setDropList((prev) => !prev)}
      >
        <div className={S.drop_circle} />
        <div className={S.drop_username}>
          {user.login.length > 11 ? `${user.login.slice(0, 11)}…` : user.login}
        </div>
        <div className={S.drop_arrow}>{String.fromCodePoint(9013)}</div>
      </div>
      {dropList ? (
        <div className={`${S.drop_list} ${S.drop_list_open}`}>
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
      ) : (
        ""
      )}
    </div>
  );
}

export default DropArrow;
