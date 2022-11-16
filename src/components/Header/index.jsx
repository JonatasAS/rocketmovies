import { Input } from "../Input";
import { Container, Profile} from "./styles";

export function Header() {
  return (
    <Container>
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
