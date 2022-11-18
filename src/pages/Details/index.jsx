import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Container } from './styles';
import { Tag } from '../../components/Tag';


export function Details() {
  return (
    <Container>
      <Header />

      <Section title="Interestelar">
        
        <span>Por Jonatas Amorim</span> 
        <span> 23/05/1997 </span>

        <div className='mark'>
        <Tag title="Ficção Científica"></Tag>
        <Tag title="Ficção Científica"></Tag>
        <Tag title="Ficção Científica"></Tag>
        </div>
      </Section>
      
      
    </Container>
  )
} 