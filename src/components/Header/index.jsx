import { Input } from "../Input";
import { Container, Profile, Brand, Search } from "./styles";

export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovie</h1>
      </Brand>
      <Search>
        <Input placeholder="Pesquisar pelo titulo"/>
      </Search>
      <Profile>
        <div>
          <strong>Jonatas Amorim</strong>
          <button> sair </button>
        </div>
        <img src="https://github.com/JonatasAS.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}
