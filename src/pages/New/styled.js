import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    width: 1113px;
    height: 88px; 

    display: flex;
    flex-wrap: wrap;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_1100};

    border-radius: 8px;
  }
`;

export const Form = styled.form`
  max-width: 1137px;
  height: 783px;
  margin: 40px auto 85px;

  > header {
    margin-bottom: 40px;
    > h1 {
      margin-top: 24px;
    }
  }

  .titlemovie {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }
`;