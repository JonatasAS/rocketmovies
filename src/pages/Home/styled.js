import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px, auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    padding: 50px 123px;
    overflow-y: auto;

    ::-webkit-scrollbar{
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
      width: 8px;
    }

    ::-webkit-scrollbar-thumb{
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
    }
  }

  .MyMovie {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h1{
      font-size: 32px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      
    }
  }
`;

export const Content = styled.div`
  max-width: 1137px;
  height: 716px;
  margin: 0 auto;

`;

export const AddMovie = styled(Link)`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
  border: none;
  border-radius: 8px;
  padding: 14px 32px;

`;
