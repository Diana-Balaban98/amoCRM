import { Logo } from "@/assets";
import RedBall from "@/assets/icons/redBall";
import { Navbar } from "@/components/navbar/navbar";
import { SocialContacts } from "@/components/socialContacts/socialContacts";
import { navItems } from "@/data/data";

import s from "./header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.headerBody}>
        <div className={s.headerInner}>
          <div className={s.logoBlock}>
            <Logo />
            <span>крупный интегратор CRM в Росcии и ещё 8 странах</span>
          </div>
          <RedBall className={s.redBall} />
          <Navbar navbarItems={navItems} />
        </div>
        <SocialContacts />
      </div>
    </header>
  );
};
