import s from "./menuInfo.module.scss";

export const MenuInfo = () => {
  return (
    <div className={s.menuBlockInfo}>
      <h4 className={s.title}>Меню</h4>
      <ul className={s.menuList}>
        <div className={s.firstBlock}>
          <li>Расчёт стоимости</li>
          <li>Услуги</li>
          <li>Виджеты</li>
          <li>Интеграции</li>
          <li>Наши клиенты</li>
        </div>
        <div className={s.secondBlock}>
          <li>Кейсы</li>
          <li>Благодарственные письма</li>
          <li>Сертификаты</li>
          <li>Блог на Youtube</li>
          <li>Вопрос / Ответ</li>
        </div>
      </ul>
    </div>
  );
};
