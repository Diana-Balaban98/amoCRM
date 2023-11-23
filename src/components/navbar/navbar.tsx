import { FunctionComponent } from "react";

import { NavbarItem } from "@/components/navbar/navbarItem";
import { TnavbarItems } from "@/types";

import s from "./navbar.module.scss";

type NavbarProps = {
  navbarItems: TnavbarItems[];
};

export const Navbar: FunctionComponent<NavbarProps> = ({ navbarItems }) => {
  const mappedNavbarItems = navbarItems.map((i) => (
    <NavbarItem key={i.id} path={i.path} title={i.title} />
  ));

  return (
    <nav>
      <ul className={s.navbarList}>{mappedNavbarItems}</ul>
    </nav>
  );
};
