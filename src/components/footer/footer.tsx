import { CompanyInfo } from "@/components/footer/companyInfo";
import { ContactsInfo } from "@/components/footer/contactsInfo";
import { MenuInfo } from "@/components/footer/menuInfo";

import s from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer>
      <div className={s.footerContainer}>
        <div className={s.leftBlock}>
          <CompanyInfo />
        </div>
        <MenuInfo />
        <ContactsInfo />
      </div>
    </footer>
  );
};
