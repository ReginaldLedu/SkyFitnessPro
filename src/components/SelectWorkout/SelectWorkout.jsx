/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setCurrentWorkout } from "../../store/reducers/mainReducers";
import S from "./SelectWorkout.module.css";

function SelectWorkout({ setIsTrainingOpen, data, type }) {
  const dispatch = useDispatch();

  return (
    <div className={S.sw_window}>
      <div className={S.sw_header}>
        <button
          onClick={() => setIsTrainingOpen(false)}
          type="button"
          className={S.cross}
        >
          {}
        </button>
        <p className={S.sw_window__header}>Выберите тренировку</p>
      </div>
      {data[type].map((el) => (
        <NavLink
          to="/workout"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            className={S.items_list}
            onClick={() => dispatch(setCurrentWorkout(el))}
          >
            <div className={S.item}>
              <p className={S.item__header}>{el.title.split("/", 1)}</p>
              {el.title.split("/").length > 1 && (
                <p className={S.item__text}>
                  {el.title.split("/").slice(1, 3).join("/")}
                </p>
              )}
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default SelectWorkout;
