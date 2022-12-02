import styled from "styled-components";
import backgroundImg from "../../assets/rocketmovie.png";

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
    display: flex;
    align-items: center;
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK};

    > svg {
      margin-right: 8px;
      font-size: 20px;
    }
  }
`;

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;