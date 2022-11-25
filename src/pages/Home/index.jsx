import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
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

        <Content></Content>
      </main>
    </Container>
  );
}
