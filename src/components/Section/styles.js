import styled from "styled-components";

export const Container = styled.div`
  margin: 32px 0;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 16px;
  

  > h2 {
    margin-bottom: 24px;

    font-size: 24px;
    font-weight: 400;
  }
`;