import { FunctionComponent } from "react";

import s from "./navbarItem.module.scss";

type NavbarItemProps = {
  path: string;
  title: string;
};

export const NavbarItem: FunctionComponent<NavbarItemProps> = ({
  path,
  title,
}) => {
  return (
    <li className={s.navbarItem}>
      <a className={s.navbarLink} href={path}>
        {title}
      </a>
    </li>
  );
};
