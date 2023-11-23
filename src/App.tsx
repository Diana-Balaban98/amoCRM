import PurpleBall from "@/assets/icons/purpleBall";
import { Container } from "@/components/container/container";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { InfoBlock } from "@/components/infoBlock/infoBlock";
import { Section } from "@/components/section";
import { Title } from "@/components/title";

import s from "./app.module.scss";

export function App() {
  return (
    <Container>
      <PurpleBall className={s.purpleBall} />
      <Header />
      <Section className={s.sectionApp}>
        <Title />
        <InfoBlock />
      </Section>
      <Footer />
    </Container>
  );
}
