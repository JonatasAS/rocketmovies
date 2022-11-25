import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { FiPlus } from 'react-icons/fi';
import { Container, Content } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <div className="AddMovie">

        <h1>Meus filmes</h1>
        <Button title="Adicionar filmes" />
          
        </div>

        <Content></Content>
      </main>
    </Container>
  );
}
