import s from "./companyInfo.module.scss";

export const CompanyInfo = () => {
  return (
    <div className={s.blockInfo}>
      <h4 className={s.title}>О компании</h4>
      <ul className={s.blockList}>
        <li>
          <a href={"#"}>Партнёрская программа</a>
        </li>
        <li>
          <a href={"#"}>Вакансии</a>
        </li>
      </ul>
    </div>
  );
};
