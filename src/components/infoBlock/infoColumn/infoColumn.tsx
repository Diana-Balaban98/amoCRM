import { FunctionComponent } from "react";

import s from "./infoColumn.module.scss";

type InfoColumnProps = {
  description: string;
  title: string;
};

export const InfoColumn: FunctionComponent<InfoColumnProps> = ({
  description,
  title,
}) => {
  return (
    <div className={s.infoColumn}>
      <h3>{title}</h3>
      <span>{description}</span>
    </div>
  );
};
