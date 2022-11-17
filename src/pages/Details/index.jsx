import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Container } from './styles';


export function Details() {
  return (
    <Container>
      <Header />

      <Section title="Interestelar">
        <span>Por Jonatas Amorim</span> 
        <span> 23/05/1997 </span>
      </Section>
      <Button title="Salvar" />
    </Container>
  )
} 