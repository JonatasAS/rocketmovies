import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";
import { FiPlus } from "react-icons/fi";
import { Container, Content, AddMovie } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <div className="MyMovie">
          <h1>Meus filmes</h1>
          <AddMovie>
            <FiPlus />
            Adicionar filme
          </AddMovie>
        </div>

        <Content>
          <Section>
            <Note
            data={{
                title: "Interestelar",
                preview: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...",
                tags: [
                  { id: "1", name: "Ficção ciêntifica" },
                  { id: "2", name: "Drama" },
                  { id: "3", name: "Família" },
                ],
              }}>
            </Note>
          </Section>
          <Section>
            <Note
            data={{
                title: "Interestelar",
                preview: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...",
                tags: [
                  { id: "1", name: "Ficção ciêntifica" },
                  { id: "2", name: "Drama" },
                  { id: "3", name: "Família" },
                ],
              }}>
            </Note>
          </Section>
          <Section>
            <Note
            data={{
                title: "Interestelar",
                preview: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...",
                tags: [
                  { id: "1", name: "Ficção ciêntifica" },
                  { id: "2", name: "Drama" },
                  { id: "3", name: "Família" },
                ],
              }}>
            </Note>
          </Section>
          <Section>
            <Note
            data={{
                title: "Interestelar",
                preview: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...",
                tags: [
                  { id: "1", name: "Ficção ciêntifica" },
                  { id: "2", name: "Drama" },
                  { id: "3", name: "Família" },
                ],
              }}>
            </Note>
          </Section>
        </Content>
      </main>
    </Container>
  );
}
