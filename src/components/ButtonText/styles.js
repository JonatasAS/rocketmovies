import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  
  background: none;
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.UPPINK : theme.COLORS.PINK};

  border: none;
  font-size: 16px;

  > svg {
    margin-right: 16px;
  }
`;
