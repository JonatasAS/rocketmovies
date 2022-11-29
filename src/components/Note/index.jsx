import { Container } from "./styles";
import { Tag } from "../Tag";

export function Note({ data, preview, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <img src="/src/assets/stars.svg" alt="Estrelas" />
      <p>{data.preview}</p>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} preview={tag.preview} />
          ))}
        </footer>
      )}
    </Container>
  );
}
