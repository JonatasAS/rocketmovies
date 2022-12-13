import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px, auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    padding: 40px 0 156px 0;
    overflow-y: auto;

    ::-webkit-scrollbar{
      background: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
      width: 8px;
    }
    
    ::-webkit-scrollbar-thumb{
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
    }
  
    ::-webkit-scrollbar-track{
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    }

  .mark {
    margin-top: 40px;
  }
  }
`;

export const Content = styled.div`
  max-width: 1137px;
  height: 581px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: start;
  }

  > p {
    font-size: 16px;
    margin-top: 40px;
    text-align: justify;
  }
`;


