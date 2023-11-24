import PurpleBall from "@/assets/icons/purpleBall";
import {
  Container,
  Footer,
  Header,
  InfoBlock,
  Section,
  Title,
} from "@/components";

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
