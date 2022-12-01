import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    display: flex;
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: #CAC4CF;
  }

  > a {
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;