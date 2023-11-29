import { FunctionComponent } from "react";

import { Telegram, Viber, Whatsapp } from "@/assets";

import s from "./socialContacts.module.scss";

type SocialContactsProps = {
  className?: string;
};

export const SocialContacts: FunctionComponent<SocialContactsProps> = ({
  className,
}) => {
  const socialArr = [
    { icon: <Telegram /> },
    { icon: <Viber /> },
    { icon: <Whatsapp /> },
  ];

  return (
    <div className={`${s.socialContacts} ${className}`}>
      <span>+7 555 555-55-55</span>
      <div className={s.socialIcons}>
        {socialArr.map((s, i) => (
          <span key={i}>{s.icon}</span>
        ))}
      </div>
    </div>
  );
};
