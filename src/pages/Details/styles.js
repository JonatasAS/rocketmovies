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
    overflow-y: scroll;
    padding: 40px 0 156px 0;
  }

  .mark {
    margin-top: 40px;
  }

`;

export const Content = styled.div`
  max-width: 1137px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > p {
    font-size: 16px;
    margin-top: 40px;
    text-align: justify;
  }
`;


