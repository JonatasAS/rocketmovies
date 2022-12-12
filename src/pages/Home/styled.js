import styled from "styled-components";

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
  overflow-y: auto;
  
  ::-webkit-scrollbar{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    width: 8px;
  }
  
  ::-webkit-scrollbar-thumb{
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
    width: 8px;
    height: 96px;
  }
`;

export const AddMovie = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  border: none;
  border-radius: 8px;
  padding: 14px 32px;

`;
