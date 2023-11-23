import { FunctionComponent, ReactNode } from "react";

import s from "./container.module.scss";

type ContainerProps = {
  children: ReactNode;
};

export const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return <div className={s.containerApp}>{children}</div>;
};
