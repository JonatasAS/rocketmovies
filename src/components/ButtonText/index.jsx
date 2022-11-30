import { Container } from "./styles";

export function ButtonText({ icon: Icon, title, isActive = false, ...rest }) {
  return (
    <Container type="title" isActive={isActive} {...rest}>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  );
}
