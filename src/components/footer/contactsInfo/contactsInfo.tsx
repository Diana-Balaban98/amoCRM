import { SocialContacts } from "@/components/socialContacts/socialContacts";

import s from "./contactsInfo.module.scss";

export const ContactsInfo = () => {
  return (
    <div className={s.contactsInfo}>
      <h4 className={s.title}>Контакты</h4>
      <ul className={s.blockList}>
        <li>
          <SocialContacts className={s.position} />
        </li>
        <li>Москва, Путевой проезд 3с1, к 902</li>
      </ul>
    </div>
  );
};
