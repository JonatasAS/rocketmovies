import { Input } from "../Input";
import { Container, Profile, Brand} from "./styles";

export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovie</h1>
      </Brand>
      <Input title="Pesquisar"/>
      <Profile>
        <div>
          <strong>Jonatas Amorim</strong>
          <span>Sair</span>
        </div>
        <img src="https://github.com/JonatasAS.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}
