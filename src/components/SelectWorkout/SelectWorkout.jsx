/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useDispatch } from "react-redux";
import S from "./SelectWorkout.module.css";
// import added from "../../img/profile/added.svg";
import cross from "../../img/profile/cross.svg";
import { setCurrentWorkout } from "../../store/reducers/mainReducers";

function SelectWorkout({ setIsTrainingOpen, data, type }) {
  // console.log(data[type]);
  // const workoutsArray = data[type];
  const dispatch = useDispatch();
  return (
    <div className={S.sw_window}>
      <div className={S.sw_header}>
        <img
          className={S.cross}
          src={cross}
          alt="cross"
          onClick={() => setIsTrainingOpen(false)}
        />
        <p className={S.sw_window__header}>Выберите тренировку</p>
      </div>
      {data[type].map((el) => (
        <div className={S.items_list} onClick={() => dispatch(setCurrentWorkout(el))}>
          <div className={S.item}>
            <p className={S.item__header}>{el.title.split("/", 1)}</p>{" "}
            {el.title.split("/").length > 1 && (
              <p className={S.item__text}>
                {el.title.split("/").slice(1, 3).join("/")}
              </p>
            )}
          </div>{" "}
        </div>
      ))}
    </div>
  );
}

export default SelectWorkout;

// <div className={S.item_clicked}>
// <div className={S.check_box}>
//   <p className={S.item__header_clicked}>Утренняя практика</p>{" "}
//   <img src={added} alt="" className={S.item_svg} />
// </div>
// <p className={S.item__text_clicked}>Йога на каждый день / 1 день</p>
// </div>
// <div className={S.item_clicked}>
// <p className={S.item__header_clicked}>Утренняя практика</p>{" "}
// <p className={S.item__text_clicked}>Красота и здоровье</p>
// </div>
