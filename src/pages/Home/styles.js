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
  }
`;

export const Content = styled.div`
  max-width: 1137px;
  margin: 0 auto;
  overflow-y: auto;
  
`;

export const AddMovie = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  border: none;
  border-radius: 8px;
  padding: 14px 32px;

`;
