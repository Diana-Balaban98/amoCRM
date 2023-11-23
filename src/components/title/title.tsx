import s from "./title.module.scss";

export const Title = () => {
  return (
    <div className={s.blockTitle}>
      <h1 className={s.titleApp}>
        Зарабатывайте больше <span>c WELBEX</span>
      </h1>
      <div className={s.titleInfo}>Развиваем и контролируем продажи за вас</div>
    </div>
  );
};
