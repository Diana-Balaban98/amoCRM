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
    { icon: <Telegram />, path: "https://web.telegram.org/" },
    { icon: <Viber />, path: "https://www.viber.com/ru/" },
    { icon: <Whatsapp />, path: "https://www.whatsapp.com/?lang=ru_RU" },
  ];

  return (
    <div className={`${s.socialContacts} ${className}`}>
      <span>+7 555 555-55-55</span>
      <div className={s.socialIcons}>
        {socialArr.map((s, i) => (
          <span key={i}>
            <a href={s.path} rel={"noreferrer"} target={"_blank"}>
              {s.icon}
            </a>
          </span>
        ))}
      </div>
    </div>
  );
};
