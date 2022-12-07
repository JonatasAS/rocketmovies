import { Header } from "../../components/Header";
import { Container, Form } from "./styled";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";

export function New() {
  return (
    <Container>
      <Header></Header>

      <main>
        <Form>
          <header>
            <ButtonText icon={FiArrowLeft} title="Voltar" />
            <h1> Novo filme </h1>
          </header>

          <Section>
            <div className="titlemovie">
              <Input placeholder="Titulo" type="text" />
              <Input placeholder="Sua nota (de 0 a 5)" type="number" />
            </div>
          </Section>

          <Textarea placeholder="Observações"/>
          
        </Form>
      </main>
    </Container>
  );
}
