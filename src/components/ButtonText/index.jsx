import { Container } from "./styles";

export function ButtonText({ title, ...rest}) {
  return (
    <Container type="title" {...rest}>
      {title}
    </Container>
  )
}