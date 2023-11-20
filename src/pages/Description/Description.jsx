import { Link } from "react-router-dom";
import S from "./Description.module.css";

function Description() {
  return (
    <div className={S.descriptionContent}>
      <header className={S.header}>
        <Link to="/" className={S.header__logo} />
        <button type="button" className={S.header__button}>
          Войти
        </button>
      </header>
      <div className={S.description}>
        <section className={S.description__logo}>
          <h1 className={S.description__title}>Йога</h1>
        </section>
        <section className={S.description__forYou}>
          <h2 className={S.description__header}>Подойдет для вас, если:</h2>
          <div className={S.description__elseBox}>
            <section className={S.description__else}>
              <h2 className={S.description__number}>1</h2>
              <p className={S.description__text}>
                Давно хотели попробовать йогу, но не решались начать
              </p>
            </section>
            <section className={S.description__else}>
              <h2 className={S.description__number}>2</h2>
              <p className={S.description__text}>
                Хотите укрепить позвоночник, избавиться от болей в спине и
                суставах
              </p>
            </section>
            <section className={S.description__else}>
              <h2 className={S.description__number}>3</h2>
              <p className={(S.description__text, S.description__textEnd)}>
                Ищете активность, полезную для тела и души
              </p>
            </section>
          </div>
        </section>
        <section className={S.description__direction}>
          <h2 className={S.description__directionHeader}>Направления:</h2>
          <div className={S.description__directionBox}>
            <ul className={S.description__directionList}>
              <li className={S.description__list}>Йога для новичков</li>
              <li className={S.description__list}>Классическая йога</li>
              <li className={S.description__list}>Йогатерапия</li>
            </ul>
            <ul className={S.description__directionList}>
              <li className={S.description__list}>Кундалини-йога</li>
              <li className={S.description__list}>Хатха-йога</li>
              <li className={S.description__list}>Аштанга-йога</li>
            </ul>
          </div>
        </section>
        <p className={S.description__course}>
          Благодаря комплексному воздействию упражнений происходит проработка
          всех групп мышц, тренировка суставов, улучшается циркуляция крови.
          Кроме того, упражнения дарят отличное настроение, заряжают бодростью и
          помогают противостоять стрессам.
        </p>
      </div>
      <footer className={S.footer}>
        <p className={S.footer__text}>
          Оставьте заявку на пробное занятие, мы свяжемся <br />
          с вами, поможем с выбором направления и тренера, <br />с которым
          тренировки принесут здоровье и радость!
        </p>
        <button type="button" className={S.footer__button}>
          Записаться на тренировку
        </button>
      </footer>
    </div>
  );
}

export default Description;
