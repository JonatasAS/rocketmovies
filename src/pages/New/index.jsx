import { Header } from "../../components/Header";
import { Container, Form } from "./styled";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

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

          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="Ação" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </Section>

          <div className="buttonFinished">
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
