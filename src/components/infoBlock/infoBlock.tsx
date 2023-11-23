import { Button } from "@/components/button";
import { InfoColumn } from "@/components/infoBlock/infoColumn";

import s from "./infoBlock.module.scss";

export const InfoBlock = () => {
  return (
    <div className={s.infoBlock}>
      <h2 className={s.title}>
        Вместе с <span>бесплатной консультацией</span> мы дарим:
      </h2>
      <div className={s.infoColumns}>
        <div className={s.leftColumns}>
          <InfoColumn description={"30 готовых решений"} title={"Виджеты"} />
          <InfoColumn
            description={"отдела продаж и CRM системы"}
            title={"Skype Аудит"}
          />
        </div>
        <div className={s.rightColumns}>
          <InfoColumn
            description={"с показателями вашего бизнеса"}
            title={"Dashboard"}
          />

          <InfoColumn description={"использования CRM"} title={"35 дней"} />
        </div>
      </div>
      <Button>Получить консультацию</Button>
    </div>
  );
};
